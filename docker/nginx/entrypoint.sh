#!/bin/bash

echo "ENV Var Passed in: ${DATA_HOST}, $API_HOST"

sed -e 's/{{ DATA_HOST }}/${DATA_HOST}/; s/{{ API_HOST }}/${API_HOST}/' /etc/nginx/nginx.conf
