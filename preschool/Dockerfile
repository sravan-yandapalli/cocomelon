# Stage 1: Build the application using Maven and Java 22
# Use Maven with a proper Java 22 base image
FROM maven:3.9.2-eclipse-temurin-22 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Stage 2: Run the Spring Boot application using OpenJDK 22
FROM eclipse-temurin:22-jre-slim
COPY --from=build /app/target/preschool-0.0.1-SNAPSHOT.jar preschool.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "preschool.jar"]
