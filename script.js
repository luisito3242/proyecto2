const display = document.getElementById("display");

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  const lastChar = display.value.slice(-1);
  if (["+", "-", "*", "/"].includes(lastChar)) return; // evita duplicar operadores
  display.value += op;
}

function appendDecimal() {
  // Evita que haya dos puntos seguidos en el mismo número
  const parts = display.value.split(/[\+\-\*\/]/);
  const lastPart = parts[parts.length - 1];
  if (!lastPart.includes(".")) display.value += ".";
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    const result = eval(display.value);
    if (result === undefined || isNaN(result)) {
      display.value = "Error";
    } else {
      display.value = Number(result.toFixed(10)).toString(); // redondea decimales largos
    }
  } catch (e) {
    display.value = "Error";
  }
}
