# Stage 1: Build the application using Maven and Java 20
FROM maven:3.9.2-eclipse-temurin-20 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Stage 2: Run the Spring Boot application using OpenJDK 20
FROM eclipse-temurin:20-jre-slim
COPY --from=build /app/target/preschool-0.0.1-SNAPSHOT.jar preschool.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "preschool.jar"]
