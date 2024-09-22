# Stage 1: Build the application using Maven and OpenJDK 17
FROM maven:3.8.3-openjdk-17 AS build
WORKDIR /app
# Copy the pom.xml first to leverage Docker cache for dependencies
COPY pom.xml ./
# Download project dependencies
RUN mvn dependency:go-offline

# Copy the rest of the project files
COPY src ./src

# Build the project
RUN mvn clean package -DskipTests

# Stage 2: Run the Spring Boot application using OpenJDK 17
FROM openjdk:17-jdk-slim
COPY --from=build /app/target/preschool-0.0.1-SNAPSHOT.jar preschool.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "preschool.jar"]

