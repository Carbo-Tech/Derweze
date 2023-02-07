# syntax = docker/dockerfile:1.4

FROM tiangolo/uvicorn-gunicorn-fastapi:python3.9-slim AS builder

WORKDIR /app

COPY requirements.txt ./
RUN --mount=type=cache,target=/root/.cache/pip \
    pip3 install -r requirements.txt


FROM builder as dev-envs

RUN <<EOF
apt-get update
apt-get install -y --no-install-recommends git 
EOF

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF
# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /

#FROM python:3.9
#ARG PORT
## 
#WORKDIR /app
#
## 
#COPY ./requirements.txt /app/requirements.txt
#
## 
#RUN pip install  -r /app/requirements.txt
#RUN pip install  uvicorn
#
## 
#
## 
#CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", PORT, "--reload"]