var assert = require('assert');
function* zip(...iterables){
    console.log(iterables)
    for (let iterable of iterables) {
        console.log(iterable);
		yield* iterable;
        console.log(yield* iterable)
	}
    
}
assert.deepEqual([...zip("abc", [1, 2, 3])], ['a', 1, 'b', 2, 'c', 3])
