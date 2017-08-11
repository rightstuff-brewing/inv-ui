FROM node:8 as builder
RUN apt-get update

WORKDIR /app

# Cache package.json and install deps
COPY package.json .
RUN npm install

# Copy rest of app and build
COPY . .
RUN npm run build
RUN npm run test-single
RUN npm run build-prod


FROM nginx
# Configure for angular fallback routes
# COPY nginx.conf /etc/nginx/nginx.conf

# Copy built app to wwwroot
COPY --from=builder /app/dist /usr/share/nginx/html