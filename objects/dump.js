function dump(obj){
    let output = [];
    output.push("{");
    const propertys = Object.keys(obj);
    for (element of propertys){
        output.push(",")
        output.push(element)
        if (Array.isArray(obj[element])){
            output.push(": ["+obj[element]+"] ")
        } else  if ( obj[element] instanceof Object){
            output.push(": {"+obj[element]+"} ")
        } else if  ( typeof obj[element]){
            output.push(": '"+obj[element]+"' ")
        } else {
            output.push(": "+obj[element]+" ")
        }
        
    }
    output.splice(1,1,"")
    output.push("}");
    console.log(output.join(''));
}
let obj = {};
obj.firstname = "Alan";
obj.lastname = "Turing";
obj.birthday = [1921, 6, 23];
dump(obj); 