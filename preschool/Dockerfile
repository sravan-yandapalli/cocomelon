# Stage 1: Build the application using Maven and Java 22
FROM maven:3.8.3-openjdk-22 AS build
COPY . .
RUN mvn clean package -DskipTests

# Stage 2: Run the Spring Boot application using OpenJDK 22
FROM openjdk:22-slim
COPY --from=build /target/preschool-0.0.1-SNAPSHOT.jar preschool.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "preschool.jar"]
