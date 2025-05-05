function convertirTemperatura() {
    const input = document.getElementById("celsiusInput").value;
    const celsius = parseFloat(input);

    if (isNaN(celsius)) {
      alert("Por favor, ingresa un número válido.");
      return;
    }

    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;

    console.log("Grados Fahrenheit: " + fahrenheit);
    console.log("Grados Kelvin: " + kelvin);

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
      <p>Grados Fahrenheit: ${fahrenheit.toFixed(2)}</p>
      <p>Grados Kelvin: ${kelvin.toFixed(2)}</p>
    `;
  }