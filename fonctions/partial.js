const { assert } = require("chai");
function partial(f, ...args){
    return function(...innerArgs){
        return f(...args,...innerArgs);
    }
}
const f = (x,y,z) => x * (y - z);

const pf1 = partial(f,2);
assert.strictEqual(pf1(3,4),-2);
assert.strictEqual(pf1(6,4),)