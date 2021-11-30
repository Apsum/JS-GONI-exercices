function initWith(size, f){
    let tabResult = [];
    for ( let i = 0; i < size ;i++){
        tabResult.push(f(i));
    }
    console.log(tabResult);
    return tabResult;
}

function initWithZeros(size){
    const withZero = () => 0;
    initWith(size,withZero);

}
function initFrom(size, nb){
    const fromnb = index => nb + index;
    initWith(size,fromnb);
}
const withZero = () => 0;
const fromZero = index => index;
const from42 = index => 42 + index;
initWith(5, withZero); // => [0, 0, 0, 0, 0]
initWith(5, fromZero); // => [0, 1, 2, 3, 4]
initWith(5, from42); // => [42, 43, 44, 45, 46]
initWithZeros(3);
initFrom(3,42);