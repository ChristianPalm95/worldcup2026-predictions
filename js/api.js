const API_URL =
"https://script.google.com/macros/s/AKfycbzWXhYmtIo5ecM8Obg8PPRmnA262N1uUzTpQmRvYXuRI4jubsWvU2_cn3BiBPGuEmka/exec";

async function savePrediction(data) {

  await fetch(API_URL, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(data)
  });

  return {
    success: true
  };

}
