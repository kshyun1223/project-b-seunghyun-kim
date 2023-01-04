FROM node:19

LABEL author="https://github.com/kshyun1223"

COPY . /source

WORKDIR /source

VOLUME [ "/source" ]

RUN npm install

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start:prod"]