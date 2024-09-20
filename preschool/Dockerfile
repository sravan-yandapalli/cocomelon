# Step 1: Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the project’s build output JAR file to the container
COPY target/*.jar app.jar

# Step 4: Expose the port that Spring Boot uses (usually 8080)
EXPOSE 8080

# Step 5: Run the JAR file with Java when the container starts
ENTRYPOINT ["java", "-jar", "app.jar"]
