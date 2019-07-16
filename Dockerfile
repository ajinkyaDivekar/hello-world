FROM node:11.3.0
# confirm installation
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
#RUN npm install  && npm cache clean
RUN npm install 
COPY . /usr/src/app
EXPOSE 3000
RUN ["chmod", "+x", "/usr/src/app/docker-entrypoint.sh"] 
CMD sh docker-entrypoint.sh && npm start