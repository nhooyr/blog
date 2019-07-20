FROM node:latest

LABEL "com.github.actions.name"="fmt"
LABEL "com.github.actions.description"=""
LABEL "com.github.actions.icon"="code"
LABEL "com.github.actions.color"="blue"

RUN curl -L https://github.com/mvdan/sh/releases/download/v2.6.4/shfmt_v2.6.4_linux_amd64 > /usr/local/bin/shfmt && \
  chmod +x /usr/local/bin/shfmt

CMD yarn --silent fmt
