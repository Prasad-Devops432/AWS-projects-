# Use official Tomcat image
FROM tomcat:9-jdk11

# Remove default Tomcat apps
RUN rm -rf /usr/local/tomcat/webapps/*

# Copy your WAR file into Tomcat
COPY target/maven-web-app.war /usr/local/tomcat/webapps/ROOT.war

# Expose port 1990
EXPOSE 1990

# Run Tomcat on port 1990
CMD ["catalina.sh", "run"]
