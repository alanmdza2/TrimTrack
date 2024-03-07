# Usa una imagen base de Java
FROM openjdk:17-jdk-alpine

# Instala Maven
RUN apk add --no-cache maven

WORKDIR /app

# Copia el archivo pom.xml y descarga las dependencias
COPY spring/pom.xml .
RUN mvn dependency:go-offline

# Copia el código fuente de la aplicación
COPY spring/src ./src

EXPOSE 8080

# Variable de entorno para controlar el modo de depuración
ENV DEBUG=FALSE

# Si DEBUG=FALSE, compila y empaqueta la aplicación, y luego la ejecuta
CMD if [ "$DEBUG" = "FALSE" ]; then \
      cd ./src && mvn clean package && \
      java -jar target/spring-0.0.1-SNAPSHOT.jar; \
    else \
      sleep infinity; \
    fi