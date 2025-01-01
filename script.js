const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

celsiusInput.addEventListener("input", handleCelsiusChange);
fahrenheitInput.addEventListener("input", handleFahrenheitChange);
kelvinInput.addEventListener("input", handleKelvinChange);

function handleCelsiusChange() {
    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        fahrenheitInput.value = ((celsius * 9/5) + 32).toFixed(2);
        kelvinInput.value = (celsius + 273.15).toFixed(2);
    } else {
        fahrenheitInput.value = "";
        kelvinInput.value = "";
    }
}

function handleFahrenheitChange() {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheit)) {
        celsiusInput.value = ((fahrenheit - 32) * 5/9).toFixed(2);
        kelvinInput.value = (((fahrenheit - 32) * 5/9) + 273.15).toFixed(2);
    } else {
        celsiusInput.value = "";
        kelvinInput.value = "";
    }
}

function handleKelvinChange() {
    const kelvin = parseFloat(kelvinInput.value);
    if (!isNaN(kelvin)) {
        celsiusInput.value = (kelvin - 273.15).toFixed(2);
        fahrenheitInput.value = ((kelvin - 273.15) * 9/5 + 32).toFixed(2);
    } else {
        celsiusInput.value = "";
        fahrenheitInput.value = "";
    }
}

function clearFields() {
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
}