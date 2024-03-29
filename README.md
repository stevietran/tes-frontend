# TesFrontend

## Test the container in local

- Switch context (The aws context was installed for a mock deployment there):

`docker context use default`

- Build the image using `Dockerfile_local` file : 48 s

`docker build -f Dockerfile_local -t tes-frontend_dev .`

```bash
--tag , -t		Name and optionally a tag in the 'name:tag' format
--file , -f		Name of the Dockerfile (Default is 'PATH/Dockerfile')
```

- Run a container, bind the current host port 80 to port 80 of the container:

`docker run --add-host=host.docker.internal:host-gateway -p 8080:80 --name=tes-frontend-local tes-frontend_dev`

### Production configuration

When add `npm run build --configuration=production`, npm will read `angular.json` file and replace config file `src/environments/environment.ts` to the repective file set in it.

`window.location` is an object that carries information about the page being shown. We can simply refer to it using location alone. `window.location.href` gives the `url` of the current page. It is one of the member fields that the location object carry. Other fields are location.hostname, location.pathname, location.protocol etc.

# Development

## Install packages
- Install node packages:

`npm install`

- Running

`npm start`

The equally command which defined in `package.json`:

`ng serve --proxy-config src/proxy.conf.json`

## Install angular

- `sudo npm install -g @angular/cli`

- Install app template:

`ng new my-app`

- Add components to the specified folder:

`ng generate component components/<component-name> --module app`

# Tracked issues and workarounds
## Proxy config

- Error: `\src\proxy.conf.json does not exist`

Change to `./src/proxy.conf.json` in `angular.json`

## Docker network

Imagine an application with a web front-end and a database back-end. If you call your containers `web` and `db`, the `web container` can connect to the `db container` at `db`, no matter which Docker host the application stack is running on.

## A cross-origin resource sharing (CORS)

Error: `Access to XMLHttpRequest at 'http://localhost:8001/api/v1/auth/login' from origin 'http://localhost' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.`

## NGINX proxy

Get the config file:

`cat /etc/nginx/conf.d/default.conf`

``` bash
server {
    listen       80;
    listen  [::]:80;
    server_name  tes-frontend;

    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }
    
    location /api {
        proxy_pass http://tes-backend:8001/api/v1;
        proxy_http_version 1.1;
    }
    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```

Change the config for correct direction to `/api` endpoint. This is done in `startup.sh`.


