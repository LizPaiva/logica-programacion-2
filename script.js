function convertirTemperatura() {
  let celsius = prompt("Ingresa la temperatura en grados Celsius:");
  celsius = parseFloat(celsius);

  if (isNaN(celsius)) {
    alert("Error: debes ingresar un número.");
    return;
  }

  const fahrenheit = (celsius * 9/5) + 32;
  const kelvin = celsius + 273.15;


  console.log("Grados Fahrenheit: " + fahrenheit);
  console.log("Grados Kelvin: " + kelvin);

  
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <p>Grados Fahrenheit: ${fahrenheit.toFixed(2)}</p>
    <p>Grados Kelvin: ${kelvin.toFixed(2)}</p>
  `;
}
