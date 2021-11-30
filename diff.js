function diff(source, propertyNames){
    let Nobject = source;
    let nameee = Object.keys(propertyNames);
    if ( Nobject.hasOwnProperty(nameee)){
        delete Nobject[nameee];
    }
    return Nobject;
}
let o1 = { r: 0, g: 0, b: 0, a: 0 };
let withoutOpacity = { a: null };
let objectWithoutOpacity = diff(o1, withoutOpacity); 
console.log(objectWithoutOpacity)
