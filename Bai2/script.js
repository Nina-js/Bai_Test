function generateRandomColor() {
  const getRandomValue = () =>
    Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
  return "#" + getRandomValue() + getRandomValue() + getRandomValue();
}

function setRandomColor() {
  let color = generateRandomColor();
  document.getElementById("color").value = color;
}

function generateGradient() {
  let color1 = document.getElementById("color1").value;
  let color2 = document.getElementById("color2").value;
  let gradientDiv = document.getElementById("gradient");

  let gradientStyle = `linear-gradient(to right, ${color1}, ${color2})`;
  gradientDiv.style.background = gradientStyle;
}

function copyToClipboard() {
  let colorInput = document.getElementById("color");
  colorInput.select();
  colorInput.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied the color code: " + colorInput.value);
}
