CREATE DATABASE academia;

\c academia;

CREATE TABLE alumnos(
    nombre varchar (50),
    rut varchar(50) PRIMARY KEY,
    curso varchar(50),
    nivel INT
);

