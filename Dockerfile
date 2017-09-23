FROM nginx

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Copy built app to wwwroot
COPY ./build /usr/share/nginx/html