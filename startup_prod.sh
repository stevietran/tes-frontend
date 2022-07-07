#!/bin/bash
NGINX_CONF=/etc/nginx/conf.d/default.conf

# this adds the reverse proxy configuration to nginx 
# everything that hits /api is proxied to the app server     
if ! grep -q "location /api" "$NGINX_CONF"; then
    eval "cat <<EOF
    location /api {
        proxy_pass http://tes-backend:8001/api/v1;
        proxy_http_version 1.1;
    }
    gzip on;
    gzip_types text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript;
    gunzip on;
EOF
" > /proxycfg.txt
    # echo "        proxy_set_header Host $host;" >> /proxycfg.txt
    sed --in-place '/server_name  localhost;/ r /proxycfg.txt' $NGINX_CONF
fi

nginx -g "daemon off;"