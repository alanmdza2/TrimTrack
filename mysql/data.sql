USE TrimTrack_dev;

-- Tabla Cliente
CREATE TABLE usuario (
  idusuario INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nombreapellido VARCHAR(255) NOT NULL,
  telefono INT NOT NULL,
  mail VARCHAR(255),
  contrasenia VARCHAR(255)
);

-- Tabla Servicio
CREATE TABLE servicio (
  idservicio INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  descripcion VARCHAR(255),
  precio INT
);

-- Tabla Turno
CREATE TABLE Turno (
  idturno INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  fechahora TIMESTAMP,
  nota TEXT,
  idusuario INT NOT NULL,
  idservicio INT NOT NULL,
  FOREIGN KEY (idusuario) REFERENCES usuario(idusuario),
  FOREIGN KEY (idservicio) REFERENCES servicio(idservicio)
);


