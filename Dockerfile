FROM node:8-alpine as builder
RUN apk update
RUN npm install -g @angular/cli

WORKDIR /app

# Cache package.json and install deps
COPY package.json .
RUN npm install

# Copy rest of app and build
COPY . .
RUN ng build -prod

FROM nginx
# Configure for angular fallback routes
# COPY nginx.conf /etc/nginx/nginx.conf

# Copy built app to wwwroot
COPY --from=builder /app/dist /usr/share/nginx/html