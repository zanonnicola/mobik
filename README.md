# Mobik

Fast tiny `Array` utility for merging an array of objects by a given key.

## :package: Installation

```bash
npm install pmobik --save
```

## :rocket: Load

```js
// using es modules
import mobik from 'mobik'

// common.js
const mobik = require('mobik')

```

Or use script tags and globals.

```html
<script src="https://unpkg.com/mobik"></script>
```

And then grab it off the global like so:

```js
const mobik = mobik.default;
```

## :bulb: Usage

Let's assume you want to group a set of objects in an array by key 

```javascript
const newArray = mobik('a', [{a: 1, b: 2}, {c: 3, a: 1}]);

/*
[
  {
    a: 1,
    b: 2,
    c: 3
  }
]
*/
```

> It works with nested objects too!

```javascript
const newArray = mobik(['a', {a: 1, b: 2}, {c: {d: 4}, a: 1}]);

/*
[
  {
    a: 1,
    b: 2,
    c: {
      d: 4
    }
  }
]
*/
```

## API

#### `mobik(key: String, array: Array)` [required]

Returns an `Array` with a merged `Object`

OR `[]` when no key is found.

## Tests

`npm test`

## Legal

Released under MIT license.