# svg-cubic

> Draw a simple svg shape with a cubic path

## Install

```bash
npm i svg-cubic
```

## API

#### constructor([options])

| Option | Action |
| :------ | :------- |
| **w** | svg width |
| **h** | svg height |
| **d** | direction of the drawing &mdash; top, right, bottom, left |
| **p1** | first point |
| **p1a** | first anchor &mdash; offset from p1 in the same direction |
| **p1b** | first anchor &mdash; offset from p1 in the perpendicular direction |
| **p2** | second point |
| **p2a** | second anchor &mdash; offset from p2 in the same direction |
| **p2b** | second anchor &mdash; offset from p2 in the perpendicular direction |

```js
const Cubic = require('svg-cubic')

var cubic = new Cubic({p1:10, p2:50, p2b:25, w:100, h:200})

// also allowed
var cubic = Cubic({p1:10, p2:50, p2b:25, w:100, h:200})

// all options are also accessible via getter/setter
cubic.d = 'top'
cubic.p1 = 100
```

#### svg()

Return svg node

```js
var cubic = Cubic({p1:10, p2:50, p2b:25, w:100, h:200})

/*
<svg viewBox="0 0 100 200" preserveAspectRatio="none">
  <path d="M0 0 V10 C0 10 25 50 50 50 C75 50 100 10 100 10 V0 z"></path>
</svg>
*/
var svg = cubic.svg()
```

#### path()

Return path value

```js
var cubic = Cubic({p1:10, p2:50, p2b:25, w:100, h:200})

cubic.p1  = 20
cubic.p1b = 30
// M0 0 V20 C30 20 25 50 50 50 C75 50 70 20 100 20 V0 z
var path = cubic.path()
```

## Demo

```bash
npm i && npm start
```

## Related

- <a href="https://github.com/jeromedecoster/svg-line" target="_blank">svg-line</a>
- <a href="https://github.com/jeromedecoster/svg-peak" target="_blank">svg-peak</a>
- <a href="https://github.com/jeromedecoster/svg-quad" target="_blank">svg-quad</a>

## Thanks

Mainly forked / inspired on <a href="http://tympanus.net/codrops/2014/01/07/shape-hover-effect-with-svg" target="_blank">Codrops</a> and <a href="http://cargocollective.com/isaac317" target="_blank">Isaac Montemayor</a>

## License

MIT
