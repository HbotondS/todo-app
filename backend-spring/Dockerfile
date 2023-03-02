FROM openjdk:11

EXPOSE 8080

ADD target/test-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=docker", "app.jar"]
