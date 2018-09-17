# eternal-web

> A front side of eternal

> @author taiki0304

## フロント開発ルール
### コンポーネント化する
- 単一ファイルコンポーネントとして`*.vue`ファイルを作成してコンポーネント指向で作る。
- `/pages`配下にはメインとなるページを作成する
- `/components`配下には各ページでのコンポーネント作成する
  - **TODO:`/components/global`や`/components/ranking`のようにディレクトリを作成して作ったほうがいい**

### デザイン
- Bootstrap-vueを使用し極力生のCSSは記述しない。
- レスポンシブデザインを意識する。スマホ対応です。
- cssを記述する際はLESSで記述する。モダン開発の勉強と保守性の高いコーディング。
- Bootstrapのタグを拡張する場合は新しくクラスを定義してBootstrapのCSSを上書きする。

### ルーティング
- `/router/index.js`にルーティングを記述する
- 画面遷移は`<router-link to="/{遷移先}"></router-link>`のタグを使用する

### 開発Tips
- 参考となるページを随時記載する
  - [Qiita - 2018年Vue.jsとVuexを使ってる人には必ず知っていてほしいドキュメントに書かれていないコンポーネントやストア、メンテナンスの際に役立つTips](https://qiita.com/k-okina/items/512b9e502f8db49981f3)
- **TODO:ここがいっぱいになってきたらWikiへの移行を検討する**

## 使用する技術要素
- [vue.js](https://jp.vuejs.org/)
- [vue-rooter](https://router.vuejs.org/ja/)
  - SPAぞ実現するためのルーティングに利用する
- [axios](https://github.com/axios/axios)
  - サーバーとのAPIに利用する
- webpack
- [bootstrap-vue](https://bootstrap-vue.js.org/)
- [LESS](http://lesscss.org/)
  - **TODO:SassはScssを使うかLessを使うか要検討。bootstrapがLessで親和性が良さそうなのでLessを現段階では使用する**

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
