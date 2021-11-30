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
initWithZeros(3);
initFrom(3,42);
 