FROM amazoncorretto:21
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} SSAP-GaNeung-app.jar
ENV TZ=Asia/Seoul
ENTRYPOINT ["java", "-jar", "SSAP-GaNeung-app.jar"]