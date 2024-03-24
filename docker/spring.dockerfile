# Etapa de compilación
FROM maven:3.8.4-openjdk-17-slim AS build

WORKDIR /app

# Copia el archivo pom.xml y descarga las dependencias
COPY spring/pom.xml .
RUN mvn dependency:go-offline

# Copia el código fuente de la aplicación
COPY spring/src ./src

# Compila y empaqueta la aplicación
RUN mvn clean package

# Etapa de ejecución
FROM openjdk:17-jdk-alpine

WORKDIR /app

# Copia el artefacto construido desde la etapa de compilación
COPY --from=build /app/target/spring-0.0.1-SNAPSHOT.jar .

EXPOSE 8080

# Ejecuta la aplicación
CMD ["java", "-jar", "spring-0.0.1-SNAPSHOT.jar"]
