FROM node:latest

LABEL "com.github.actions.name"="lint"
LABEL "com.github.actions.description"=""
LABEL "com.github.actions.icon"="code"
LABEL "com.github.actions.color"="purple"

RUN apt-get update && apt install -y shellcheck

CMD yarn --silent lint

