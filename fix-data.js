const sequelize = require('./src/config/database');
async function fix() {
    try {
        // Cambiamos 'personaje' por 0 para que la gráfica pueda leerlo
        await sequelize.query("UPDATE Productos SET subcategoria_personaje = '0' WHERE subcategoria_personaje = 'personaje'");
        console.log("✅ Datos corregidos correctamente.");
    } catch (e) { console.log("❌ Error:", e); }
    process.exit();
}
fix();