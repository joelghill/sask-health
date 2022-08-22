FROM node:18 as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install
RUN npm install -g @angular/cli

COPY . /app

ENV GOOGLE_API_KEY=$GOOGLE_API_KEY
ENV DISRUPTIONS_HOST=$DISRUPTIONS_HOST

RUN npm run build

FROM nginx:1.23-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/sk-health /usr/share/nginx/html

EXPOSE 80