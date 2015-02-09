var test = require('tape');
var classify = require('./ray-direction-classify');

test('the different combinations (int)', function(t) {
  [
    [-1, -1, -1, classify.MMM],
    [-1, -1,  1, classify.MMP],
    [-1,  1, -1, classify.MPM],
    [-1,  1,  1, classify.MPP],
    [ 1, -1, -1, classify.PMM],
    [ 1, -1,  1, classify.PMP],
    [ 1,  1, -1, classify.PPM],
    [ 1,  1,  1, classify.PPP],
    [ 1,  0,  0, classify.POO],
    [-1,  0,  0, classify.MOO],
    [ 0,  1,  0, classify.OPO],
    [ 0, -1,  0, classify.OMO],
    [ 0,  0,  1, classify.OOP],
    [ 0,  0, -1, classify.OOM],
    [ 0, -1, -1, classify.OMM],
    [ 0, -1,  1, classify.OMP],
    [ 0,  1, -1, classify.OPM],
    [ 0,  1,  1, classify.OPP],
    [-1,  0, -1, classify.MOM],
    [-1,  0,  1, classify.MOP],
    [ 1,  0, -1, classify.POM],
    [ 1,  0,  1, classify.POP],
    [-1, -1,  0, classify.MMO],
    [-1,  1,  0, classify.MPO],
    [ 1, -1,  0, classify.PMO],
    [ 1,  1,  0, classify.PPO]
  ].forEach(function(a) {
    t.equal(classify(a[0], a[1], a[2]), a[3]);
  });

  t.end();
});

test('the different combinations (int)', function(t) {
  var e = [
    [-1, -1, -1, classify.MMM],
    [-1, -1,  1, classify.MMP],
    [-1,  1, -1, classify.MPM],
    [-1,  1,  1, classify.MPP],
    [ 1, -1, -1, classify.PMM],
    [ 1, -1,  1, classify.PMP],
    [ 1,  1, -1, classify.PPM],
    [ 1,  1,  1, classify.PPP],
    [ 1,  0,  0, classify.POO],
    [-1,  0,  0, classify.MOO],
    [ 0,  1,  0, classify.OPO],
    [ 0, -1,  0, classify.OMO],
    [ 0,  0,  1, classify.OOP],
    [ 0,  0, -1, classify.OOM],
    [ 0, -1, -1, classify.OMM],
    [ 0, -1,  1, classify.OMP],
    [ 0,  1, -1, classify.OPM],
    [ 0,  1,  1, classify.OPP],
    [-1,  0, -1, classify.MOM],
    [-1,  0,  1, classify.MOP],
    [ 1,  0, -1, classify.POM],
    [ 1,  0,  1, classify.POP],
    [-1, -1,  0, classify.MMO],
    [-1,  1,  0, classify.MPO],
    [ 1, -1,  0, classify.PMO],
    [ 1,  1,  0, classify.PPO]
  ]

  e.forEach(function(a, i) {
    t.notEqual(classify(a[0], a[1], a[2]), e[(i+1)%e.length][3]);
  });

  t.end();
});

test('the different combinations (int)', function(t) {
  [
    [-0.1, -0.1, -0.1, classify.MMM],
    [-0.1, -0.1,  0.1, classify.MMP],
    [-0.1,  0.1, -0.1, classify.MPM],
    [-0.1,  0.1,  0.1, classify.MPP],
    [ 0.1, -0.1, -0.1, classify.PMM],
    [ 0.1, -0.1,  0.1, classify.PMP],
    [ 0.1,  0.1, -0.1, classify.PPM],
    [ 0.1,  0.1,  0.1, classify.PPP],
    [ 0.1,  0.0,  0.0, classify.POO],
    [-0.1,  0.0,  0.0, classify.MOO],
    [ 0.0,  0.1,  0.0, classify.OPO],
    [ 0.0, -0.1,  0.0, classify.OMO],
    [ 0.0,  0.0,  0.1, classify.OOP],
    [ 0.0,  0.0, -0.1, classify.OOM],
    [ 0.0, -0.1, -0.1, classify.OMM],
    [ 0.0, -0.1,  0.1, classify.OMP],
    [ 0.0,  0.1, -0.1, classify.OPM],
    [ 0.0,  0.1,  0.1, classify.OPP],
    [-0.1,  0.0, -0.1, classify.MOM],
    [-0.1,  0.0,  0.1, classify.MOP],
    [ 0.1,  0.0, -0.1, classify.POM],
    [ 0.1,  0.0,  0.1, classify.POP],
    [-0.1, -0.1,  0.0, classify.MMO],
    [-0.1,  0.1,  0.0, classify.MPO],
    [ 0.1, -0.1,  0.0, classify.PMO],
    [ 0.1,  0.1,  0.0, classify.PPO]
  ].forEach(function(a) {
    t.equal(classify(a[0], a[1], a[2]), a[3]);
  });

  t.end();
});
