# ray-direction-classify

This is the first step in the paper by Eisemann et al. [Fast Ray/Axis-Aligned Bounding Box Overlap Tests using Ray Slopes](http://www.cg.cs.tu-bs.de/publications/Eisemann07FRA/)

## install

`npm install ray-direction-classify`

## use

```javascript
var classifyRay = require('ray-direction-classify');
var rayDirection = [0, 1, 0];

var c = classifyRay(
  rayDirection[0],
  rayDirection[1],
  rayDirection[2]
);

console.log(c); // 4
console.log(c === classify.OPO); // true

```

ok, what is `OPO`?

### constants

there are 25 classes of ray directions which are specified in a human readable format consisting of three character codes: __P__ lus, __M__ inus, and zer __O__

Ok, that might be a bit confusing so let's run through an example.

let's say that the ray in question has a direction of `[1, -1, 0]`. It's resulting 3-character code would be `PMO`

Here are a few more:
 * `[1, 0, 0] === classify.POO`
 * `[-1, -1, -1] === classify.MMM`
 * `[1, 0, 1] === classify.POP`

The full list: `MMM`, `MMP`, `MPM`, `MPP`, `PMM`, `PMP`, `PPM`, `PPP`, `POO`, `MOO`, `OPO`, `OMO`, `OOP`, `OOM`, `OMM`, `OMP`, `OPM`, `OPP`, `MOM`, `MOP`, `POM`, `POP`, `MMO`, `MPO`, `PMO`, `PPO`


## platforms

node, io.js, and evergreen browsers using [browserify](browserify.io)

## license

[MIT](http://tmpvar.mit-license.org/)
