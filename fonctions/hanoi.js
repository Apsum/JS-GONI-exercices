function initWith(size, f){
    let tabResult = [];
    for ( let i = 1; i < size +1 ;i++){
        tabResult.push(f(i));
    }
    console.log(tabResult);
    return tabResult;
}
function initFromZero(size){
    const fromnb = index => index;
    initWith(size,fromnb);
}
function initWithZeros(size){
    const withZero = () => 0;
    initWith(size,withZero);

}
function hanoi(nbDisques,depart,arrivé){
    
    return tour1;
}

 let res = hanoi(3,1,3);
 console.log(res);

 function Hanoi2(n, from, to)
{
    if (1 !== from && 1 !==to){
        via = 1
    }
    if (2 !== from && 2 !== to) {
        via = 2
    }
    if (3 !== from && 3 !== to){
        via = 3
    }
    if (n==0) return;

    Hanoi(n-1, from, via , to);

    moveDisk(from,to);
    console.log(from+"->"+to);

    
    Hanoi2(n-1, via, to , from);
}
function moveDisk(from, to ){
    to.push(from[0])
}
let tour1 = initFromZero(nbDisques);
let tour2 = initWithZeros(3);
let tour3 = initWithZeros(3);

