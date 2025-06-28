# build stage
FROM node:20.15.0 as build-stage
WORKDIR /var/www/html
COPY package*.json ./
RUN npm install
COPY . .
#ENV NODE_OPTIONS = "--max_old_space_size=4096"
RUN npm run build

# production stage
FROM nginx as production-stage
COPY --from=build-stage /var/www/html/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]