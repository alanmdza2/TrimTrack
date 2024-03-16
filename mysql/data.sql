USE TrimTrack_dev;

-- Tabla Cliente
CREATE TABLE usuario (
  idusuario INT PRIMARY KEY NOT NULL AUTOINCREMENTAL,
  nombreapellido VARCHAR(255) NOT NULL,
  telefono INT NOT NULL,
  mail VARCHAR(255),
  contraseña VARCHAR(255)
);

-- Tabla Servicio
CREATE TABLE servicio (
  idservicio INT PRIMARY KEY NOT NULL AUTOINCREMENTAL,
  descripcion VARCHAR(255),
  precio INT
);

-- Tabla Turno
CREATE TABLE Turno (
  idturno INT PRIMARY KEY NOT NULL AUTOINCREMENTAL,
  fechahora TIMESTAMP,
  nota TEXT,
  idusuario INT FOREIGN KEY REFERENCES usuario(idusuario) NOT NULL,
  idservicio INT FOREIGN KEY REFERENCES servicio(idservicio) NOT NULL
);

