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

  wrapper.className =
    "group-grid";

  const groups =
    ["A","B","C","D","E","F","G","H","I","J","K","L"];

  groups.forEach(group => {

    const card =
      document.createElement("div");

    card.className =
      "group-card";

    card.innerHTML = `
      <h3>Group ${group}</h3>
      <div class="team">Team 1</div>
      <div class="team">Team 2</div>
      <div class="team">Team 3</div>
      <div class="team">Team 4</div>
    `;

    wrapper.appendChild(card);

  });

  container.appendChild(wrapper);

}
