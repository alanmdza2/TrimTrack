USE TrimTrack_dev;

-- Tabla Cliente
CREATE TABLE usuario (
  idusuario INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nombreapellido VARCHAR(255) NOT NULL,
  telefono VARCHAR(15),
  mail VARCHAR(255),
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
  idusuario INT,
  idservicio INT,
  FOREIGN KEY (idusuario) REFERENCES usuario(idusuario),
  FOREIGN KEY (idservicio) REFERENCES servicio(idservicio)
);
