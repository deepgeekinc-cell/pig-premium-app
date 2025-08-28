# Production static file server for Vite build
FROM nginx:alpine
COPY ./ /usr/share/nginx/html
# Provide a basic SPA fallback
RUN printf 'server {\n  listen 80;\n  server_name _;\n  root /usr/share/nginx/html;\n  index index.html;\n  location / {\n    try_files $uri /index.html;\n  }\n}\n' > /etc/nginx/conf.d/default.conf
