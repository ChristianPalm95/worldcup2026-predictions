console.log("MATCHES FILE LOADED");
document.addEventListener("DOMContentLoaded", () => {

  loadPlayers();
  buildGroups();

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

          return `
            <div class="match-card">

             <div class="match-date">

  ${formatted}



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

  MATCHES.forEach(match => {

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

  try {

    console.log("Saving...", data);

    console.log(data);
    
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

  } catch(error) {

    console.error(error);

  }

}
