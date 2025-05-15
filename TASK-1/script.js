const expressionEl = document.getElementById("expression");
const liveResultEl = document.getElementById("liveResult");
const scientific = document.getElementById("scientificButtons");

// These two variables hold the displayed expression and the eval expression
let displayExpression = "";
let evalExpression = "";

function appendValue(val) {
  const mappings = {
    "Math.PI": { display: "π", eval: "Math.PI" },
    "Math.E": { display: "e", eval: "Math.E" },
    "Math.sqrt(": { display: "√(", eval: "Math.sqrt(" },
    "**2": { display: "²", eval: "**2" },
    "Math.sin(": { display: "sin(", eval: "Math.sin(" },
    "Math.cos(": { display: "cos(", eval: "Math.cos(" },
    "Math.tan(": { display: "tan(", eval: "Math.tan(" },
    "Math.log10(": { display: "log(", eval: "Math.log10(" },
    "Math.log(": { display: "ln(", eval: "Math.log(" },
    "**": { display: "^", eval: "**" },
  };

  if (displayExpression === "0") {
    displayExpression = "";
    evalExpression = "";
  }

  if (mappings[val]) {
    displayExpression += mappings[val].display;
    evalExpression += mappings[val].eval;
  } else {
    displayExpression += val;
    evalExpression += val;
  }

  expressionEl.innerText = displayExpression;
  liveCalculate();
}

function clearDisplay() {
  displayExpression = "";
  evalExpression = "";
  expressionEl.innerText = "0";
  liveResultEl.innerText = "0";
}

function deleteLast() {
  if (displayExpression.length === 0) return clearDisplay();

  const reverseMappings = {
    π: "Math.PI",
    e: "Math.E",
    "√(": "Math.sqrt(",
    "²": "**2",
    "sin(": "Math.sin(",
    "cos(": "Math.cos(",
    "tan(": "Math.tan(",
    "log(": "Math.log10(",
    "ln(": "Math.log(",
    "^": "**",
  };

  let found = false;
  for (const [displayStr, evalStr] of Object.entries(reverseMappings)) {
    if (displayExpression.endsWith(displayStr)) {
      displayExpression = displayExpression.slice(0, -displayStr.length);
      evalExpression = evalExpression.slice(0, -evalStr.length);
      found = true;
      break;
    }
  }

  if (!found) {
    displayExpression = displayExpression.slice(0, -1);
    evalExpression = evalExpression.slice(0, -1);
  }

  if (displayExpression === "") {
    clearDisplay();
  } else {
    expressionEl.innerText = displayExpression;
    liveCalculate();
  }
}

function addMissingClosingParens(expr) {
  const openParens = (expr.match(/\(/g) || []).length;
  const closeParens = (expr.match(/\)/g) || []).length;
  return expr + ")".repeat(Math.max(0, openParens - closeParens));
}

function calculate() {
  try {
    const finalExpr = addMissingClosingParens(evalExpression);
    const result = eval(finalExpr);
    displayExpression = String(result);
    evalExpression = String(result);
    expressionEl.innerText = displayExpression;
    liveResultEl.innerText = "0";
  } catch {
    liveResultEl.innerText = "Error";
  }
}

function liveCalculate() {
  try {
    const finalExpr = addMissingClosingParens(evalExpression);
    const result = eval(finalExpr);
    if (!isNaN(result)) {
      liveResultEl.innerText = result;
    } else {
      liveResultEl.innerText = "";
    }
  } catch {
    liveResultEl.innerText = "";
  }
}

function toggleMode() {
  scientific.classList.toggle("hidden");
}
