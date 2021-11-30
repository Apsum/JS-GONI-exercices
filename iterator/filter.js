function filter(iterable, f) {
    let iterator = iterable[Symbol.iterator]();
    let result = iterator.next()
    let tabResult = []
    while (!result.done) {
        if (f(result.value)){
            tabResult.push(result.value)
        }
        result = iterator.next();
    }
    let iteratorResult = tabResult[Symbol.iterator]();
    return iteratorResult;
    

}

const iterator = filter("hello", v => "aeiouy".includes(v));
console.log(iterator.next().value); // => "e"
console.log(iterator.next().value); // => "o"
console.log(iterator.next().done); // => true