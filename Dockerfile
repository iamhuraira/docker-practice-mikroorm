FROM node:20.10.0-alpine3.18 AS base


WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]


#For development
#docker build --target dev --tag nest-docker .
FROM base AS dev
RUN npm install --frozen-lockfile 


COPY . .

CMD [ "npm", "run", "start:dev" ]


#For production
#docker build --target prod  --tag nest-docker .
FROM base AS prod

RUN npm install --frozen-lockfile --production

COPY . .
RUN npm install -g @nestjs/cli

RUN npm run build

CMD [ "npm", "run", "start:prod" ]


#Run Docker Through Command Line
#docker run --detach --publish 3000:3000 nest-docker
