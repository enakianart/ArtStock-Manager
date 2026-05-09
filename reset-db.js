const sequelize = require('./src/config/database');
async function reset() {
    try {
        // Borra todo lo que tenga el error 'personaje'
        await sequelize.query("DELETE FROM Productos WHERE subcategoria_personaje = 'personaje'");
        console.log("✅ Dato corrupto eliminado. Tu dashboard ya debería estar limpio.");
    } catch (e) { console.log("❌ Error:", e); }
    process.exit();
}
reset();