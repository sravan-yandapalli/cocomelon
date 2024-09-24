# Stage 1: Build the frontend
FROM node:18 AS frontend-build
WORKDIR /app

# Copy package files and install dependencies
COPY public/package.json ./
COPY public/package-lock.json ./
RUN npm install

# Copy the frontend source files and build
COPY public/ ./
RUN npm run build

# Stage 2: Build the backend
FROM maven:3.9.0-openjdk-17 AS backend-build
WORKDIR /app

# Copy pom.xml and install dependencies
COPY pom.xml ./
COPY src/ ./src/
RUN mvn clean package -DskipTests

# Stage 3: Create the final image
FROM openjdk:17-jdk-slim
WORKDIR /app

# Copy the built backend and frontend
COPY --from=backend-build /app/target/*.jar app.jar
COPY --from=frontend-build /app/dist ./public

# Expose the application port
EXPOSE 8080

# Run the backend application
ENTRYPOINT ["java", "-jar", "app.jar"]





