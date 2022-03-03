FROM node:16.14.0 as build

WORKDIR /app
COPY . .
RUN npm cache clean --force
RUN npm install
RUN npm run build --prod

FROM nginx:1.21.6 AS ngi

COPY --from=build /app/dist/pomagamukrainie /usr/share/nginx/html

COPY /nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80
