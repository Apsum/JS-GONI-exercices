function map(iterable, f) {
    const iterator = iterable[Symbol.iterator]();
    let result = iterator.next();
    let tabResult = []

    while (!result.done) {
        tabResult.push(f(result.value))

        result = iterator.next();
    }
    let iteratorResult = tabResult[Symbol.iterator]();
    return iteratorResult;
}

const iterator = map("hello", v => v.toUpperCase());
console.log(iterator.next().value); // => "H"
console.log(iterator.next().value); // => "E"
console.log(iterator.next().value); // => "L"
console.log(iterator.next().value); // => "L"
console.log(iterator.next().value); // => "O"
console.log(iterator.next().done); // => true