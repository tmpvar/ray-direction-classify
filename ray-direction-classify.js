module.exports = classify;

function classify(i, j, k) {
  // sign
  i = typeof i === 'number' ? i ? i < 0 ? -1 : 1 : i === i ? 0 : NaN : NaN;;
  j = typeof j === 'number' ? j ? j < 0 ? -1 : 1 : j === j ? 0 : NaN : NaN;;
  k = typeof k === 'number' ? k ? k < 0 ? -1 : 1 : k === k ? 0 : NaN : NaN;;

  // b00110100 === MPO
  //    ||||||_ k non-zero (false)
  //    |||||_ k negative (false)
  //    ||||_ j non-zero (true)
  //    |||_ j negative (false)
  //    ||_ i non-zero (true)
  //    |_ i negative (true)
  return (i>>>-1) << 5 | ((i>>>0)&1) << 4 |
         (j>>>-1) << 3 | ((j>>>0)&1) << 2 |
         (k>>>-1) << 1 | (k>>>0)&1;
}

classify.MMM = 63; // b00111111
classify.MMP = 61; // b00111101
classify.MPM = 55; // b00110111
classify.MPP = 53; // b00110101
classify.PMM = 31; // b00011111
classify.PMP = 29; // b00011101
classify.PPM = 23; // b00010111
classify.PPP = 21; // b00010101
classify.POO = 16; // b00010000
classify.MOO = 48; // b00110000
classify.OPO =  4; // b00000100
classify.OMO = 12; // b00001100
classify.OOP =  1; // b00000001
classify.OOM =  3; // b00000011
classify.OMM = 15; // b00001111
classify.OMP = 13; // b00001101
classify.OPM =  7; // b00000111
classify.OPP =  5; // b00000101
classify.MOM = 51; // b00110011
classify.MOP = 49; // b00110001
classify.POM = 19; // b00010011
classify.POP = 17; // b00010001
classify.MMO = 60; // b00111100
classify.MPO = 52; // b00110100
classify.PMO = 28; // b00011100
classify.PPO = 20; // b00010100
