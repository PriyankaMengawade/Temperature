function convertTemperature() {
    const inputTemp = document.getElementById('inputTemp').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const resultDiv = document.getElementById('result');


    if (isNaN(inputTemp) || inputTemp.trim() === "") {
        resultDiv.innerText = "Please enter a valid number!";
        return;
    }
    

    const temp = parseFloat(inputTemp);
    let result = "";

    switch (inputUnit) {
        case "celsius":
            result = `${temp} °C = ${(temp * 9/5 + 32).toFixed(2)} °F = ${(temp + 273.15).toFixed(2)} K`;
            break;
        case "fahrenheit":
            result = `${temp} °F = ${((temp - 32) * 5/9).toFixed(2)} °C = ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K`;
            break;
        case "kelvin":
            result = `${temp} K = ${(temp - 273.15).toFixed(2)} °C = ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
            break;
    }

    resultDiv.innerText = result;
}
