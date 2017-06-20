FROM nginx:1.13.1

ENV API_HOST http://api:9000
ENV DATA_HOST http://data:9090
# Remove the default Nginx configuration file
RUN rm -v /etc/nginx/nginx.conf

# Copy a configuration file from the current directory
ADD ./docker/nginx/nginx.conf /etc/nginx/
#
#COPY ./docker/nginx/entrypoint.sh /etc/nginx/

#RUN chmod +x /etc/nginx/entrypoint.sh

ENTRYPOINT ["/etc/nginx/entrypoint.sh", "${API_HOST}", "${DATA_HOST}"]

# Append "daemon off;" to the beginning of the configuration
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

# Set the default command to execute
# when creating a new container
CMD service nginx start