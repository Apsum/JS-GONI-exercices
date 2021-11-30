class ezArray extends Array {
    
    first() {
        let [first,...rest] = this
        return first
    }
    last() {
        return this[this.length - 1];
        
    }

}

let a = new ezArray();
console.log(a instanceof ezArray)  // => true: instance de EZArray
console.log(a instanceof Array  )  // => true: instance de Array aussi
console.log(a.push(1,2,3,4));      // a.length == 4; méthodes hérités
console.log(a.pop())               // => 4
console.log(a.first())               // => 1: first getter
console.log(a.last())                // => 3: last getter
console.log(a[1] )                 // => 2: syntaxe habituelle d'accès aux élément du tableau
console.log(Array.isArray(a) )     // => true
console.log(ezArray.isArray(a) )   // => true