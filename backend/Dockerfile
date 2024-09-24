# Stage 1: Build the Spring Boot application
FROM maven:3.8.4-openjdk-17 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the pom.xml file and download the dependencies
COPY backend/preschool/pom.xml ./    
RUN mvn dependency:go-offline -B

# Copy the rest of the project files
COPY backend/preschool/src ./src     
# Package the Spring Boot application
RUN mvn clean package -DskipTests

# Stage 2: Run the application in a lightweight JDK container
FROM eclipse-temurin:17-jre-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the jar file from the previous build stage
COPY --from=build /app/target/*.jar app.jar

# Expose the port your Spring Boot application will run on (default is 8080)
EXPOSE 8080

# Command to run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]


