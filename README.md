# esbuild Liquid Plugin

[Liquid](https://shopify.github.io/liquid/basics/introduction/) HTML code loader so you can import `.liquid` files as strings into JS files with  [esbuild](https://esbuild.github.io/).

**Does not render the liquid code presently.** Perhaps we can add that in the future?

## Installation

```sh
$ npm i -D esbuild-plugin-liquid
```
or with yarn

```sh
$ yarn add esbuild-plugin-liquid --save-dev
```

## Installation Example

```js
const esbuild = require('esbuild')
const liquidPlugin = require('esbuild-plugin-liquid')

esbuild.build({
  entryPoints: ['src/app.js'],
  outdir: 'dist',
  write: false, // write must be false
  plugins: [liquidPlugin()],
})
```

## Usage
Just import the liquid file as a string and use it as you would any other string.

For example, given a file called `hello_world_component.liquid`:
```html
    <h1>Hello JavaScript World From Liquid!</h1>
```

```js
import tpl from './hello_world_component.liquid';

console.log("Liquid template for this component is: ", tpl); // Outputs `<h1>Hello JavaScript World From Liquid!</h1>`
```

## License

[MIT](https://opensource.org/license/mit/)
