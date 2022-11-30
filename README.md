# unplugin-lodash-to-lodashes

<p align="left">
  <a href="https://npmjs.com/package/unplugin-lodash-to-lodashes">
    <img src="https://img.shields.io/npm/v/unplugin-lodash-to-lodashes" alt="npm package">
  </a>
  <img src="https://img.shields.io/npm/dt/unplugin-lodash-to-lodashes" alt="npm downloads">
  <img src="https://img.shields.io/npm/l/unplugin-lodash-to-lodashes" alt="npm downloads">
  <img src="https://img.shields.io/bundlephobia/minzip/unplugin-lodash-to-lodashes" alt="package size">
</p>

**Replace lodash with lodash-es, support use in vite, webpack**

## Installation

```bash
npm i unplugin-lodash-to-lodashes
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import lodashToLodashes from 'unplugin-lodash-to-lodashes/vite';

export default defineConfig({
  plugins: [
    lodashToLodashes({ /* options */ }),
  ],
})
```

<br></details>


<details>
<summary>Webpack</summary><br>

```ts
const lodashToLodashes = require('unplugin-lodash-to-lodashes/webpack');

// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    lodashToLodashes({ /* options */ }),
  ],
}
```

<br></details>


## Usage

It will automatically transform:

```javascript
import isNull from 'lodash/isNull'
const isNumber = require('lodash/isNumber');

//    ↓ ↓ ↓ ↓ ↓ ↓

import isNull from 'lodash-es/isNull'
const isNumber = require('lodash-es/isNumber.js').default;
```

## Options

### `lib`

```ts
type Lib = string
```

default: `lodash-es`

```javascript
// lib: '../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es'
import isNull from 'lodash/isNull'
const isNumber = require('lodash/isNumber');


//    ↓ ↓ ↓ ↓ ↓ ↓

import isNull from '../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNull'
const isNumber = require('../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNumber.js').default;
```
