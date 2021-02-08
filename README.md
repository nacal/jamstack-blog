# JAMstack Blog Project

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/19488001-8686-4d68-a766-d763098a8aed/deploy-status)](https://app.netlify.com/sites/quizzical-pare-e9bb41/deploys)

![NKTech](https://user-images.githubusercontent.com/55532835/107258358-0ad42c00-6a7f-11eb-9d6f-17a3b0d2f909.jpg)

> [NKTech](https://nktech.jp/)

## Overview

Nuxt.jsでSSGを利用し、静的ページを事前に生成。CDNにHTMLファイルのキャッシュを用意しておき配信することで高速なWebページの表示を実現できる技術"JAMstack"でブログサイトを作成。

静的ホスティングサービスであるNetlifyを利用してビルドからホスティングを行い、Webhook機能を用いてヘッドレスCMSであるContentfulからのフックを受け付けて更新時に自動でデプロイする。

## Assets
- [Vue.js](https://vuejs.org/)
  - [Nuxt.js](https://nuxtjs.org/)
  - [Vuetify](https://vuetifyjs.com/)
- [Contentful](https://app.contentful.com/)
- [Netlify](https://app.netlify.com/)
- [GitHub](https://github.com/)


## Architecture
![nuxt-blog](https://user-images.githubusercontent.com/55532835/107258813-951c9000-6a7f-11eb-9ab4-2fb770817796.png)
