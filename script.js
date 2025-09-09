function calcularCalorias() {
    const peso = parseFloat(document.getElementById("peso").value);
    const actividad = parseFloat(document.getElementById("actividad").value);
    const lactancia = parseFloat(document.getElementById("lactancia").value);
    const objetivo = document.getElementById("objetivo").value;


    if (isNaN(peso) || peso <= 0) {
        document.getElementById("resultado").innerText = "⚠️ Ingresa un peso válido.";
        return;
    }


    // Paso 1: Gasto basal
    const gastoBasal = peso * 22;


    // Paso 2: Ajuste por actividad
    const tdee = gastoBasal * actividad;


    // Paso 3: Sumar calorías de lactancia
    let calorias = tdee + lactancia;


    // Ajuste según objetivo
    if (objetivo === "subir") {
        calorias += 300; // superávit
    } else if (objetivo === "bajar") {
        calorias -= 300; // déficit
    }


    document.getElementById("resultado").innerText =
        `Necesitas aproximadamente ${Math.round(calorias)} kcal/día para tu objetivo.`;
}