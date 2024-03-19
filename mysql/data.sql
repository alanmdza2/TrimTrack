USE TrimTrack_dev;

-- Tabla Cliente
CREATE TABLE usuario (
  idusuario INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nombreapellido VARCHAR(255) NOT NULL,
  telefono VARCHAR(15),
  email VARCHAR(255),
  contrasenia VARCHAR(255),
  dni VARCHAR(8) NOT NULL UNIQUE,
  rol VARCHAR(50) NOT NULL
);

-- Tabla Servicio
CREATE TABLE servicio (
  idservicio INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  descripcion VARCHAR(255),
  precio INT
);

-- Tabla Turno
CREATE TABLE turno (
  idturno INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  fechahora TIMESTAMP,
  nota TEXT,
  idusuario INT NOT NULL,
  idservicio INT NOT NULL,
  FOREIGN KEY (idusuario) REFERENCES usuario(idusuario),
  FOREIGN KEY (idservicio) REFERENCES servicio(idservicio)
);


INSERT INTO usuario (nombreapellido, telefono, email, contrasenia, dni, rol)
VALUES ('Admin', NULL, NULL, '$2a$10$ppI6jITQfIz7rTKjqR7Eiebt13wOOMl1bm7EwdxF/YdVv/rpmEVeO', 'Admin', 'Admin');

INSERT INTO servicio (descripcion, precio)
VALUES ('Corte', 20);

INSERT INTO turno (fechahora, nota, idusuario, idservicio)
VALUES ('2024-03-18 10:00:00', 'Turno de prueba', 1, 1);
