# Bike Frontend

frontend of website.

## Flowbite (Tailwind CSS)

[https://flowbite.com/docs/getting-started/vue/](https://flowbite.com/docs/getting-started/vue/)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Hot-Reload for Development on LAN (test on real phone)

```sh
npm run lan
```

Or:

```sh
npm run lan
```

### Compile and Minify for Production

```sh
npm run build
```

#### To run the build on local (http://localhost:4173)

```sh
npm run preview
```

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
