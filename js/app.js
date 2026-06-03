document.addEventListener("DOMContentLoaded", async () => {

  const playerSelect =
    document.getElementById("playerSelect");

  CONFIG.allowedPlayers.forEach(player => {

    const option =
      document.createElement("option");

    option.value = player;
    option.textContent = player;

    playerSelect.appendChild(option);

  });

  document
    .getElementById("saveBtn")
    .addEventListener("click", saveForm);

});

async function saveForm() {

  const player =
    document.getElementById("playerSelect").value;

  if(!player){

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
      document.getElementById("topScoringTeam").value

  };

  try{

    await savePrediction(data);

    alert("Prediction saved!");

  }

  catch(error){

    console.error(error);

    alert("Save failed");

  }

}
