const expressionEl = document.getElementById("expression");
const liveResultEl = document.getElementById("liveResult");
const scientific = document.getElementById("scientificButtons");

function appendValue(val) {
  if (expressionEl.innerText === "0") expressionEl.innerText = "";
  expressionEl.innerText += val;
  liveCalculate();
}

function clearDisplay() {
  expressionEl.innerText = "0";
  liveResultEl.innerText = "0";
}

function deleteLast() {
  expressionEl.innerText = expressionEl.innerText.slice(0, -1) || "0";
  liveCalculate();
}

function calculate() {
  try {
    const result = eval(expressionEl.innerText);
    expressionEl.innerText = result;
    liveResultEl.innerText = "0";
  } catch {
    liveResultEl.innerText = "Error";
  }
}

function liveCalculate() {
  try {
    const result = eval(expressionEl.innerText);
    if (!isNaN(result)) {
      liveResultEl.innerText = result;
    }
  } catch {
    liveResultEl.innerText = "";
  }
}

function toggleMode() {
  scientific.classList.toggle("hidden");
}
