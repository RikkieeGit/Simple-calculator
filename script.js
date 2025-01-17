const result = document.querySelector(".result h2");

const appendValue = (value) => {
  result.textContent += value;
};

const clearResult = () => {
  result.textContent = "";
};

const deleteValue = () => {
  result.textContent = result.textContent.slice(0, -1);
};

const calculateResult = () => {
  try {
    result.textContent = eval(result.textContent);
  } catch (error) {
    result.textContent = "Error";
  }
};

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || ["+", "-", "*", "/", "%"].includes(key)) {
    appendValue(key);
  }

  if (key === "Enter") {
    calculateResult();
  }

  if (key === "Backspace") {
    deleteValue();
  }

  if (key === "Escape") {
    clearResult();
  }
});
