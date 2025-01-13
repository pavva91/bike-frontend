# Bike Frontend

Front-end of the website.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

Find the development website on: [http://localhost:5173](http://localhost:5173)

### Compile and Hot-Reload for Development on LAN (test on real phone)

```sh
npm run lan
```

Or:

```sh
npm run lan
```

### Compile and minify for production

```sh
npm run build
```

#### To run the build on local (try production on local)

```sh
npm run preview
```

Find the development website on: [http://localhost:4173](http://localhost:4173)

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# Multi-lingual

Guide:

- [https://lokalise.com/blog/vue-i18n/](https://lokalise.com/blog/vue-i18n/)
- [https://techvblogs.com/blog/create-multilingual-vuejs-apps](https://techvblogs.com/blog/create-multilingual-vuejs-apps)

```sh
npm install vue-i18n@9 @intlify/unplugin-vue-i18n
```

## Convert KML to GPX

```sh
gpsbabel -w -i kml -f ./public/gpx/urbino.kml -o gpx -F public/gpx/road/kml2gpx_urbino.gpx
```

# Deploy on debian Apache server

1. Install 'nvm':

   - [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)

2. Install node lts:

```sh
nvm install --lts
```

3. Use node lts:

```sh
nvm use --lts
```

4. Clone repo:

```sh
git clone repo 'https://github.com/pavva91/bike-frontend.git'
```

5. Install npm packages:

```sh
npm i
```

6. Build for production:

```sh
npm run build
```

7. Install apache2:

```sh
apt install apache2
```

8. copy dist into `/var/www/html` (use rsync):

   - On debian:

   ```sh
   rsync -avn dist/ /var/www/html
   ```

   - On arch:

   ```sh
   rsync -avn dist/ /srv/http
   ```

9. Configure apache for redirecting to index.html (by default the refresh will break the app):

   - On arch:

     - `/etc/httpd/conf/httpd.conf`
     - add line:
       - `FallbackResource /index.html`

   - On debian:

     - `/etc/apache2/apache2.conf`
     - add line:
       - `FallbackResource /index.html`

10. Start apache2:

```sh
systemctl start apache2
```

# Deployment cycle on debian server

1. `git pull`
2. `npm run build`
3. `rsync -avn ~/bike-frontend/dist/ /var/www/html`
4. `systemctl restart apache2.service`

# Update project dependencies

1. Check which packages are outdated:

   - `npm outdated`

2. Update to wished:
   - `npm update`
3. Update to latest:
   - `npm i <module>@latest`

## Vite update

https://vite.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated

## Flowbite (Tailwind CSS)

[https://flowbite.com/docs/getting-started/vue/](https://flowbite.com/docs/getting-started/vue/)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).
