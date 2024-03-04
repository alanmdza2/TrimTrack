#!/bin/bash
set -e

# Ejecuta mvn clean package
mvn clean package -DskipTests

# Ejecuta el archivo .jar generado
java -jar /app/target/tu-aplicacion.jar
