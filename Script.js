function checkFlood() {
    let waterLevel = document.getElementById("waterLevel").value;
    let result = document.getElementById("result");

    if (waterLevel === "") {
        result.innerHTML = "❗ Please enter a water level!";
        result.style.color = "orange";
        return;
    }

    waterLevel = parseFloat(waterLevel); // Convert input to a number

    if (waterLevel >= 50) {
        result.innerHTML = "🚨 Flood Alert! Water level is too high!";
        result.style.color = "red";
    } else {
        result.innerHTML = "✅ Safe! Water level is normal.";
        result.style.color = "green";
    }
}
