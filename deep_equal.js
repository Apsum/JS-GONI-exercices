function deepEqual(a1,a2){
    let result = true;
    if (a1.length !== a2.length){
        result =  false;
    }
    for ( let i = 0; i <a1.length;i++){
        if (Array.isArray(a1[i]) && Array.isArray(a2[i])){
            result = deepEqual(a1[i],a2[i])
        }else if( a1[i] !== a2[i]){
            result = false
        }       
    }
    return result

}
const a1 = [1, 2, [3, 4], 5];
const a2 = JSON.parse(JSON.stringify(a1)); // Deep copy
console.log(a1);
console.log(a2);
a1 === a2; // => false
console.log(deepEqual(a1, a2)); // => true