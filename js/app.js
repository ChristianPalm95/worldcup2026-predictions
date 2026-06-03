document.addEventListener("DOMContentLoaded", () => {

  loadPlayers();
  buildGroups();

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

}

function buildGroups(){

  const container =
    document.getElementById("groupsContainer");

  if(!container) return;

  const wrapper =
    document.createElement("div");

  wrapper.className = "group-grid";

  const groups = {
    A: ["🇲🇽 Mexico", "🇿🇦 South Africa", "🇰🇷 South Korea", "🇨🇿 Czech Republic"],
    B: ["🇨🇦 Canada", "🇧🇦 Bosnia & Herzegovina", "🇶🇦 Qatar", "🇨🇭 Switzerland"],
    C: ["🇧🇷 Brazil", "🇲🇦 Morocco", "🇭🇹 Haiti", "🏴 Scotland"],
    D: ["🇺🇸 USA", "🇵🇾 Paraguay", "🇦🇺 Australia", "🇹🇷 Turkey"],
    E: ["🇩🇪 Germany", "🇨🇼 Curaçao", "🇨🇮 Ivory Coast", "🇪🇨 Ecuador"],
    F: ["🇳🇱 Netherlands", "🇯🇵 Japan", "🇸🇪 Sweden", "🇹🇳 Tunisia"],
    G: ["🇧🇪 Belgium", "🇪🇬 Egypt", "🇮🇷 Iran", "🇳🇿 New Zealand"],
    H: ["🇪🇸 Spain", "🇨🇻 Cape Verde", "🇸🇦 Saudi Arabia", "🇺🇾 Uruguay"],
    I: ["🇫🇷 France", "🇸🇳 Senegal", "🇮🇶 Iraq", "🇳🇴 Norway"],
    J: ["🇦🇷 Argentina", "🇩🇿 Algeria", "🇦🇹 Austria", "🇯🇴 Jordan"],
    K: ["🇵🇹 Portugal", "🇨🇩 DR Congo", "🇺🇿 Uzbekistan", "🇨🇴 Colombia"],
    L: ["🏴 England", "🇭🇷 Croatia", "🇬🇭 Ghana", "🇵🇦 Panama"]
  };

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

      ${teams.map(team =>
        `<div class="team">${team}</div>`
      ).join("")}

      <div class="matches">

        ${groupMatches.map(match => {

          const kickoff =
            new Date(match.kickoff);

          const formatted =
            kickoff.toLocaleString("en-GB");

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
                >

                <span>-</span>

                <input
                  type="number"
                  min="0"
                  class="score-input"
                  id="${match.id}_away"
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

}
