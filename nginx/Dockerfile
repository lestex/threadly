FROM nginx
MAINTAINER Andrey Larin <lestex@gmail.com>

COPY nginx.conf /etc/nginx/nginx.conf
RUN rm /etc/nginx/conf.d/*
COPY site.conf /etc/nginx/conf.d/site.conf