FROM maven:3.8.3-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim
COPY --from=build /target/preschool-0.0.1-SNAPSHORT.jar preschool.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","preschool.jar"]