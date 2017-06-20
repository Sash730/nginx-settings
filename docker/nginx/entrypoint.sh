#!/bin/bash

sed -e 's/{{ DATA_HOST }}/${DATA_HOST}/; s/{{ API_HOST }}/${API_HOST}/' /etc/nginx/nginx.conf
