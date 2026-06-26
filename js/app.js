console.log("MATCHES FILE LOADED");
let OFFICIAL_RESULTS = {};
document.addEventListener("DOMContentLoaded", async () => {

  OFFICIAL_RESULTS =
    await fetchOfficialResults();

  loadPlayers();
  buildGroups();
  buildKnockoutStage();

    lockBonusQuestionsIfTournamentStarted();

  document
    .getElementById("saveBtn")
    .addEventListener("click", savePredictionForm);

});

function loadPlayers(){

  const select =
    document.getElementById("playerSelect");

  CONFIG.allowedPlayers.forEach(player => {

    const option =
      document.createElement("option");

    option.value = player;
    option.textContent = player;

    select.appendChild(option);

  });

  select.addEventListener(
    "change",
    loadPlayerPrediction
  );

}

function buildGroups(){

  const container =
    document.getElementById("groupsContainer");

  if(!container) return;

  const wrapper =
    document.createElement("div");

  wrapper.className = "group-grid";

  const groups = GROUPS;

  Object.entries(groups).forEach(([group, teams]) => {

    const groupMatches =
      MATCHES.filter(
        match => match.group === group
      );

    const card =
      document.createElement("div");

    card.className =
      "group-card";

    card.innerHTML = `
      <h3>Group ${group}</h3>

     <div
  class="group-standings"
  id="table_${group}"
>
</div> 

      <div class="matches">

        ${groupMatches.map(match => {

          const kickoff =
            new Date(match.kickoff);

          const formatted =
            kickoff.toLocaleString("en-GB");

  const now = new Date();

const locked =
  now >= kickoff;

const hoursToKickoff =
  (kickoff - now) / (1000 * 60 * 60);

const upcoming =
  hoursToKickoff > 24 &&
  hoursToKickoff <= 72;

const urgent =
  hoursToKickoff > 0 &&
  hoursToKickoff <= 24;

          return `
<div class="match-card ${
  locked
    ? "locked"
    : urgent
    ? "urgent"
    : upcoming
    ? "upcoming"
    : ""
}">

<div class="match-date">

  ${formatted}

${
  locked
    ? '<span class="locked-badge">Locked</span>'
    : urgent
    ? '<span class="urgent-badge">Starts within 24h</span>'
    : upcoming
    ? '<span class="soon-badge">Starts within 72h</span>'
    : ''
}

${
  OFFICIAL_RESULTS[match.id]
    ? `<div class="official-result">
         Official: ${OFFICIAL_RESULTS[match.id].home}-${OFFICIAL_RESULTS[match.id].away}
       </div>`
    : ""
}

</div>

              <div class="match-row">

                <span class="team-name home">
  ${match.home}
</span>

 <input
  type="number"
  min="0"
  class="score-input"
  id="${match.id}_home"
  ${locked ? "disabled" : ""}
  oninput="renderGroupTable('${group}')"
>

                <span>-</span>

  <input
  type="number"
  min="0"
  class="score-input"
  id="${match.id}_away"
  ${locked ? "disabled" : ""}
  oninput="renderGroupTable('${group}')"
>

                <span class="team-name away">
  ${match.away}
</span>

              </div>

            </div>
          `;
        }).join("")}

      </div>

    `;

    wrapper.appendChild(card);

  });

container.innerHTML = "";

container.appendChild(wrapper);

Object.keys(GROUPS).forEach(group => {
  renderGroupTable(group);
});

}

async function savePredictionForm() {

  const player =
    document.getElementById("playerSelect").value;

  if (!player) {
    alert("Choose your name");
    return;
  }

  const data = {

    player,

    worldChampion:
      document.getElementById("worldChampion").value,

    goldenBoot:
      document.getElementById("goldenBoot").value,

    topScoringTeam:
      document.getElementById("topScoringTeam").value,

    matches: {}

  };

  const existingData =
    await loadPrediction(player);

  data.matches =
    existingData.matches || {};

  MATCHES.forEach(match => {

    const kickoff =
      new Date(match.kickoff);

    const now =
      new Date();

    if (now >= kickoff) {
      return;
    }

    data.matches[match.id] = {

      home:
        document.getElementById(
          `${match.id}_home`
        )?.value || "",

      away:
        document.getElementById(
          `${match.id}_away`
        )?.value || ""

    };

  });

  data.knockout =
  collectKnockoutPredictions(
    existingData.knockout || {}
  );

  try {

    console.log("Saving...", data);

    const result =
      await savePrediction(data);

    console.log(result);

    const now =
      new Date();

    document.getElementById(
      "saveStatus"
    ).textContent =
      `Last saved: ${now.toLocaleString("da-DK")}`;

    alert("Prediction saved!");

  } catch(error) {

    console.error(error);

    alert("Save failed");

  }

}

async function loadPlayerPrediction() {

  const player =
    document.getElementById("playerSelect").value;

  if (!player) return;

  try {

   const data =
  await loadPrediction(player);

// Ryd alle kampfelter først

MATCHES.forEach(match => {

  const homeInput =
    document.getElementById(
      `${match.id}_home`
    );

  const awayInput =
    document.getElementById(
      `${match.id}_away`
    );

  if (homeInput)
    homeInput.value = "";

  if (awayInput)
    awayInput.value = "";

});

// Ryd øvrige felter

document.getElementById(
  "worldChampion"
).value = "";

document.getElementById(
  "goldenBoot"
).value = "";

document.getElementById(
  "topScoringTeam"
).value = "";

console.log("Loaded", data);

    console.log("Loaded", data);

    document.getElementById(
      "worldChampion"
    ).value =
      data.worldChampion || "";

    document.getElementById(
      "goldenBoot"
    ).value =
      data.goldenBoot || "";

    document.getElementById(
      "topScoringTeam"
    ).value =
      data.topScoringTeam || "";

    if (data.matches) {

      Object.entries(data.matches)
        .forEach(([matchId, score]) => {

          const homeInput =
            document.getElementById(
              `${matchId}_home`
            );

          const awayInput =
            document.getElementById(
              `${matchId}_away`
            );

          if (homeInput)
            homeInput.value =
              score.home || "";

          if (awayInput)
            awayInput.value =
              score.away || "";

        });

    }

Object.keys(GROUPS).forEach(group => {
  renderGroupTable(group);
});

loadKnockoutPrediction(data);

  } catch(error) {

    console.error(error);

  }

}

function lockBonusQuestionsIfTournamentStarted() {

  const tournamentStart =
    new Date("2026-06-11T21:00:00+02:00");

  const now =
    new Date();

  if (now < tournamentStart) return;

  document.getElementById("worldChampion").disabled = true;
  document.getElementById("goldenBoot").disabled = true;
  document.getElementById("topScoringTeam").disabled = true;

}

async function loadMatchPoints() {

  const container =
    document.getElementById("matchPointsContainer");

  container.innerHTML = "Loading...";

  try {

    const data =
      await fetchMatchPoints();

    let html = `
      <div class="match-points-wrapper">
        <table class="match-points-table">
          <thead>
            <tr>
              <th>Match</th>
            ${data.players.map((player, index) => `
  <th>
    <div class="player-rank">
      #${index + 1}
    </div>
    <div class="player-name">
      ${player.replace(
  "Mikkel E - Norwegian Messi",
  "Mikkel E"
)}
    </div>
  </th>
`).join("")}
            </tr>
          </thead>
          <tbody>
    `;

    data.rows.forEach(row => {

      html += `
        <tr>
          <td>
            <b>${row.match}</b><br>
            <span>${row.matchText}</span>
          </td>

          ${data.players.map(player => {

            const points =
              row.players[player];

            const className =
              points === 3
                ? "points-exact"
                : points === 1
                ? "points-outcome"
                : "points-zero";

            return `
              <td class="${className}">
                ${points === 0 ? "" : points}
              </td>
            `;

          }).join("")}
        </tr>
      `;

    });

    html += `
          </tbody>
        </table>
      </div>
    `;

    container.innerHTML = html;

  } catch(error) {

    console.error(error);
    container.innerHTML = "Failed to load match points";

  }

}
