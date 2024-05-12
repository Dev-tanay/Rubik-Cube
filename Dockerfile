# Official Nginx runtime as the base image
FROM nginx:alpine

WORKDIR /usr/share/nginx/html


# Copy the static files to the Nginx web directory
COPY . .

# Expose port 80 for the app
EXPOSE 8080

