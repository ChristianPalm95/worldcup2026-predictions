const API_URL =
  "https://script.google.com/macros/s/AKfycbzWXhYmtIo5ecM8Obg8PPRmnA262N1uUzTpQmRvYXuRI4jubsWvU2_cn3BiBPGuEmka/exec";

async function savePrediction(data) {

  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data)
  });

  return await response.json();

}

async function loadPrediction(player) {

  const response =
    await fetch(
      `${API_URL}?player=${encodeURIComponent(player)}`
    );

  return await response.json();

}
