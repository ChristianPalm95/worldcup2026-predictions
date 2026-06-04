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
