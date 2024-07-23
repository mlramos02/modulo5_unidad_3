// Importar la instancia del pool desde bd.js
const pool = require('./bd.js');

// Función para obtener todos los empleados de la base de datos
async function obtenerEmpleados() {
  const selectQuery = 'SELECT * FROM empleados';
  try {
    const res = await pool.query(selectQuery);
    console.log('Empleados en la base de datos:', res.rows);
  } catch (err) {
    console.error('Error al obtener los empleados:', err.stack);
  }
}


// Función principal para ejecutar el código
(async () => {
 
  // Obtener todos los empleados
  await obtenerEmpleados();

  // Finalizar el pool de conexiones
  await pool.end();
})();