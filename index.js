//Descomentar para usar funciones por separado.

const { Pool } = require("pg");

const config = {
  user: "postgres",
  host: "localhost",
  password: "<password>", //ingresar password personal
  database: "academia",
  port: 5432,
  max: 20,
  idleTimeoutMillis: 5000,
  connectionTimeoutMillis: 2000,
};

const pool = new Pool(config);

// 1. Agregar un nuevo estudiante.

const agregar = {
  name: "fetch-user", // prepared statement
  rowMode: "array",
  text: "INSERT INTO alumnos (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4) RETURNING *",
  values: ["Brian May", "12.345.678-9", "Guitarra", 7],
};

// pool.connect(async (error_conexion, client, release) => {
//   if (error_conexion) return console.error(error_conexion.code);
//   try {
//     const res = await client.query(agregar);
//     console.log("Alumno agregado:", res.rows);
//   } catch (error_consulta) {
//     console.log(error_consulta.code);
//   }
//   release();
//   pool.end();
// });


//Consultar los estudiantes registrados.
const consulta = {
  name: "fetch-user", // prepared statement
  rowMode: "array",
  text: "SELECT * FROM alumnos",
};

// pool.connect(async (error_conexion, client, release) => {
//   if (error_conexion) return console.error(error_conexion.code);
//   try {
//     const res = await client.query(consulta);
//     console.log("Consulta:", res.rows);
//   } catch (error_consulta) {
//     console.log(error_consulta.code);
//   }
//   release();
//   pool.end();
// });



//Consultar estudiante por rut.

const consultaRut = {
  name: "fetch-user", // prepared statement
  rowMode: "array",
  text: "SELECT * FROM alumnos WHERE rut = '12.345.678-9'"
};

// pool.connect(async (error_conexion, client, release) => {
//   if (error_conexion) return console.error(error_conexion.code);
//   try {
//     const res = await client.query(consultaRut);
//     console.log("Resultado consulta:", res.rows);
//   } catch (error_consulta) {
//     console.log(error_consulta.code);
//   }
//   release();
//   pool.end();
// });



//Actualizar la información de un estudiante.

const actualizar = {
  name: "fetch-user", // prepared statement
  rowMode: "array",
  text: "UPDATE alumnos SET nivel = 10 WHERE rut = '12.345.678-9' RETURNING *"
};

// pool.connect(async (error_conexion, client, release) => {
//   if (error_conexion) return console.error(error_conexion.code);
//   try {
//     const res = await client.query(actualizar);
//     console.log("Resultado consulta:", res.rows);
//   } catch (error_consulta) {
//     console.log(error_consulta.code);
//   }
//   release();
//   pool.end();
// });



//Eliminar el registro de un estudiante.

const eliminar = {
  name: "fetch-user", // prepared statement
  rowMode: "array",
  text: "DELETE FROM alumnos WHERE rut = '12.345.678-9' RETURNING *"
};

// pool.connect(async (error_conexion, client, release) => {
//   if (error_conexion) return console.error(error_conexion.code);
//   try {
//     const res = await client.query(eliminar);
//     console.log("Registro eliminado:", res.rows);
//   } catch (error_consulta) {
//     console.log(error_consulta.code);
//   }
//   release();
//   pool.end();
// });