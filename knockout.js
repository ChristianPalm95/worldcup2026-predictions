const KNOCKOUT_MATCHES = [
 { id:"K73", round:"Round of 32", kickoff:"2026-06-28T21:00:00+02:00", home:"South Africa", away:"Canada" },
{ id:"K76", round:"Round of 32", kickoff:"2026-06-29T19:00:00+02:00", home:"Brazil", away:"Japan" },
{ id:"K74", round:"Round of 32", kickoff:"2026-06-29T22:30:00+02:00", home:"Germany", away:"Paraguay" },
{ id:"K75", round:"Round of 32", kickoff:"2026-06-30T03:00:00+02:00", home:"Netherlands", away:"Morocco" },

{ id:"K78", round:"Round of 32", kickoff:"2026-06-30T19:00:00+02:00", home:"Ivory Coast", away:"Norway" },
{ id:"K77", round:"Round of 32", kickoff:"2026-06-30T23:00:00+02:00", home:"France", away:"Sweden" },
{ id:"K79", round:"Round of 32", kickoff:"2026-07-01T03:00:00+02:00", home:"Mexico", away:"Ecuador" },
{ id:"K80", round:"Round of 32", kickoff:"2026-07-01T18:00:00+02:00", home:"England", away:"DR Congo" },

{ id:"K82", round:"Round of 32", kickoff:"2026-07-01T22:00:00+02:00", home:"Belgium", away:"Senegal" },
{ id:"K81", round:"Round of 32", kickoff:"2026-07-02T02:00:00+02:00", home:"USA", away:"Bosnia & Herzegovina" },
{ id:"K84", round:"Round of 32", kickoff:"2026-07-02T21:00:00+02:00", home:"Spain", away:"Austria" },
{ id:"K83", round:"Round of 32", kickoff:"2026-07-03T01:00:00+02:00", home:"Portugal", away:"Croatia" },

{ id:"K85", round:"Round of 32", kickoff:"2026-07-03T05:00:00+02:00", home:"Switzerland", away:"Algeria" },
{ id:"K88", round:"Round of 32", kickoff:"2026-07-03T20:00:00+02:00", home:"Australia", away:"Egypt" },
{ id:"K86", round:"Round of 32", kickoff:"2026-07-04T00:00:00+02:00", home:"Argentina", away:"Cape Verde" },
{ id:"K87", round:"Round of 32", kickoff:"2026-07-04T03:30:00+02:00", home:"Colombia", away:"Ghana" },

  { id:"K90", round:"Round of 16", kickoff:"2026-07-04T19:00:00+02:00", home:"Winner K73", away:"Winner K75" },
  { id:"K89", round:"Round of 16", kickoff:"2026-07-04T23:00:00+02:00", home:"Winner K74", away:"Winner K77" },
  { id:"K91", round:"Round of 16", kickoff:"2026-07-05T22:00:00+02:00", home:"Winner K76", away:"Winner K78" },
  { id:"K92", round:"Round of 16", kickoff:"2026-07-06T02:00:00+02:00", home:"Winner K79", away:"Winner K80" },
  { id:"K93", round:"Round of 16", kickoff:"2026-07-06T21:00:00+02:00", home:"Winner K83", away:"Winner K84" },
  { id:"K94", round:"Round of 16", kickoff:"2026-07-07T02:00:00+02:00", home:"Winner K81", away:"Winner K82" },
  { id:"K95", round:"Round of 16", kickoff:"2026-07-07T18:00:00+02:00", home:"Winner K86", away:"Winner K88" },
  { id:"K96", round:"Round of 16", kickoff:"2026-07-07T22:00:00+02:00", home:"Winner K85", away:"Winner K87" },

  { id:"K97", round:"Quarterfinals", kickoff:"2026-07-09T22:00:00+02:00", home:"Winner K89", away:"Winner K90" },
  { id:"K98", round:"Quarterfinals", kickoff:"2026-07-10T21:00:00+02:00", home:"Winner K93", away:"Winner K94" },
  { id:"K99", round:"Quarterfinals", kickoff:"2026-07-11T23:00:00+02:00", home:"Winner K91", away:"Winner K92" },
  { id:"K100", round:"Quarterfinals", kickoff:"2026-07-12T03:00:00+02:00", home:"Winner K95", away:"Winner K96" },

  { id:"K101", round:"Semifinals", kickoff:"2026-07-14T21:00:00+02:00", home:"Winner K97", away:"Winner K98" },
  { id:"K102", round:"Semifinals", kickoff:"2026-07-15T21:00:00+02:00", home:"Winner K99", away:"Winner K100" },

  { id:"K103", round:"Bronze Final", kickoff:"2026-07-18T23:00:00+02:00", home:"Runner-up K101", away:"Runner-up K102" },
  { id:"K104", round:"Final", kickoff:"2026-07-19T21:00:00+02:00", home:"Winner K101", away:"Winner K102" }
];

function buildKnockoutStage() {
  const container = document.getElementById("knockoutContainer");
  if (!container) return;

  const rounds = [
    "Round of 32",
    "Round of 16",
    "Quarterfinals",
    "Semifinals",
    "Bronze Final",
    "Final"
  ];

  container.innerHTML = `
    <div class="knockout-bracket">
      ${rounds.map(round => `
        <div class="knockout-round">
          <h3>${round}</h3>

          ${KNOCKOUT_MATCHES
            .filter(match => match.round === round)
            .map(match => renderKnockoutMatch(match))
            .join("")}
        </div>
      `).join("")}
    </div>
  `;

  refreshKnockoutWinners();
}

function renderKnockoutMatch(match) {
  const kickoff = new Date(match.kickoff);
  const now = new Date();

  const locked = now >= kickoff;

  const hoursToKickoff =
    (kickoff - now) / (1000 * 60 * 60);

  const upcoming =
    hoursToKickoff > 24 &&
    hoursToKickoff <= 72;

  const urgent =
    hoursToKickoff > 0 &&
    hoursToKickoff <= 24;

  const official =
    typeof OFFICIAL_RESULTS !== "undefined"
      ? OFFICIAL_RESULTS[match.id]
      : null;

  return `
    <div class="knockout-match ${
      locked
        ? "locked"
        : urgent
        ? "urgent"
        : upcoming
        ? "upcoming"
        : ""
    }">

      <div class="knockout-date">
        ${kickoff.toLocaleString("en-GB")}

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
          official
            ? `<div class="official-result">
                 Official: ${official.home}-${official.away}
               </div>`
            : ""
        }
      </div>

      <div class="knockout-score-row">

  <div class="knockout-team-row">
    <span
      id="${match.id}_home_team"
      data-team-ref="${match.home}"
    >
      ${match.home}
    </span>

    <input
      type="number"
      min="0"
      class="knockout-score"
      id="${match.id}_home"
      ${locked ? "disabled" : ""}
      oninput="refreshKnockoutWinners()"
    >
  </div>

  <div class="knockout-team-row">
    <span
      id="${match.id}_away_team"
      data-team-ref="${match.away}"
    >
      ${match.away}
    </span>

    <input
      type="number"
      min="0"
      class="knockout-score"
      id="${match.id}_away"
      ${locked ? "disabled" : ""}
      oninput="refreshKnockoutWinners()"
    >
  </div>

</div>
    </div>
  `;
}

function getKnockoutTeamName(matchId, side) {
  const element =
    document.getElementById(`${matchId}_${side}_team`);

  if (!element) return "";

  return element.textContent.trim();
}

function getKnockoutScore(matchId, side) {
  const input =
    document.getElementById(`${matchId}_${side}`);

  if (!input || input.value === "") return null;

  return Number(input.value);
}

function getKnockoutWinner(matchId) {
  const homeScore =
    getKnockoutScore(matchId, "home");

  const awayScore =
    getKnockoutScore(matchId, "away");

  if (
    homeScore === null ||
    awayScore === null ||
    homeScore === awayScore
  ) {
    return null;
  }

  return homeScore > awayScore
    ? getKnockoutTeamName(matchId, "home")
    : getKnockoutTeamName(matchId, "away");
}

function getKnockoutRunnerUp(matchId) {
  const homeScore =
    getKnockoutScore(matchId, "home");

  const awayScore =
    getKnockoutScore(matchId, "away");

  if (
    homeScore === null ||
    awayScore === null ||
    homeScore === awayScore
  ) {
    return null;
  }

  return homeScore < awayScore
    ? getKnockoutTeamName(matchId, "home")
    : getKnockoutTeamName(matchId, "away");
}

function resolveKnockoutTeamName(reference) {
  if (!reference) return "";

  if (reference.startsWith("Winner K")) {
    const sourceId =
      reference.replace("Winner ", "");

    return getKnockoutWinner(sourceId) || reference;
  }

  if (reference.startsWith("Runner-up K")) {
    const sourceId =
      reference.replace("Runner-up ", "");

    return getKnockoutRunnerUp(sourceId) || reference;
  }

  return reference;
}

function refreshKnockoutWinners() {
  KNOCKOUT_MATCHES.forEach(match => {
    const homeElement =
      document.getElementById(`${match.id}_home_team`);

    const awayElement =
      document.getElementById(`${match.id}_away_team`);

    if (homeElement) {
      homeElement.textContent =
        resolveKnockoutTeamName(
          homeElement.dataset.teamRef
        );
    }

    if (awayElement) {
      awayElement.textContent =
        resolveKnockoutTeamName(
          awayElement.dataset.teamRef
        );
    }
  });
}

function collectKnockoutPredictions(existingKnockout = {}) {
  const knockout = {
    ...existingKnockout
  };

  KNOCKOUT_MATCHES.forEach(match => {
    const kickoff =
      new Date(match.kickoff);

    const now =
      new Date();

    if (now >= kickoff) {
      return;
    }

    knockout[match.id] = {
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

  return knockout;
}

function loadKnockoutPrediction(data) {
  if (!data || !data.knockout) {
    refreshKnockoutWinners();
    return;
  }

  Object.entries(data.knockout)
    .forEach(([matchId, score]) => {
      const homeInput =
        document.getElementById(`${matchId}_home`);

      const awayInput =
        document.getElementById(`${matchId}_away`);

      if (homeInput) {
        homeInput.value = score.home || "";
      }

      if (awayInput) {
        awayInput.value = score.away || "";
      }
    });

  refreshKnockoutWinners();
}
