FROM node AS build
RUN mkdir -p /NodeApp
WORKDIR /NodeApp
COPY ./ ./
RUN npm install
EXPOSE 8080
CMD ["node", "server.js"]

#ENTRYPOINT ["/usr/local/bin/otel-poc-web"]