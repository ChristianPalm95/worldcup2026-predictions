function calculateGroupTable(group) {

  const table = {};

  GROUPS[group].forEach(team => {

    table[team] = {
      team,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0
    };

  });

  const matches =
    MATCHES.filter(
      match => match.group === group
    );

  matches.forEach(match => {

    const homeScore =
      parseInt(
        document.getElementById(
          `${match.id}_home`
        )?.value
      );

    const awayScore =
      parseInt(
        document.getElementById(
          `${match.id}_away`
        )?.value
      );

    if (
      isNaN(homeScore) ||
      isNaN(awayScore)
    ) {
      return;
    }

const home =
  table[match.home];

const away =
  table[match.away];

console.log(
  "HOME:",
  match.home,
  table[match.home]
);

console.log(
  "AWAY:",
  match.away,
  table[match.away]
);

    home.played++;
    away.played++;

    home.goalsFor += homeScore;
    home.goalsAgainst += awayScore;

    away.goalsFor += awayScore;
    away.goalsAgainst += homeScore;

    if (homeScore > awayScore) {

      home.won++;
      away.lost++;

      home.points += 3;

    } else if (awayScore > homeScore) {

      away.won++;
      home.lost++;

      away.points += 3;

    } else {

      home.drawn++;
      away.drawn++;

      home.points++;
      away.points++;

    }

  });

  return Object.values(table)
    .sort((a, b) => {

      if (b.points !== a.points)
        return b.points - a.points;

      const gdA =
        a.goalsFor - a.goalsAgainst;

      const gdB =
        b.goalsFor - b.goalsAgainst;

      return gdB - gdA;

    });

}

function renderGroupTable(group) {

  const container =
    document.getElementById(
      `table_${group}`
    );

  if (!container) return;

  const standings =
    calculateGroupTable(group);

  container.innerHTML = `
    <table class="standings-table">
    <thead>
  <tr>
    <th>#</th>
    <th>Team</th>
    <th>P</th>
    <th>W</th>
    <th>D</th>
    <th>L</th>
    <th>GD</th>
    <th>Pts</th>
  </tr>
</thead>
      <tbody>
     ${standings.map((team, index) => `
  <tr>
    <td>${index + 1}</td>
    <td>${team.team}</td>
    <td>${team.played}</td>
    <td>${team.won}</td>
    <td>${team.drawn}</td>
    <td>${team.lost}</td>
    <td>${team.goalsFor - team.goalsAgainst}</td>
    <td>${team.points}</td>
  </tr>
`).join("")}
      </tbody>
    </table>
  `;

}
