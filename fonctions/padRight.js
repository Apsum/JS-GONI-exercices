function padRight(char,str,quantity){
    let [...tabStr] = str;
    let len = str.length ;
    while ( quantity > len){
        tabStr.push(char)
        len++;
    }
    
    tabStr.splice(quantity,0,char)
    return tabStr.join('');

}
result = padRight("i","45",8)
console.log(result);