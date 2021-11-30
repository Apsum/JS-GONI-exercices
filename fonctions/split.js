function split(str, sep){
    let present = true ;
    let [...strTab] = str;
    let [...sepTab] = sep;
   
    const Isep = str.indexOf(sep);
    let string1 =[];
    let string2 = [];
    
    
    for ( let i= 0; i < Isep; i++){
        string1.push(strTab[i]);
    }
    for ( let y = Isep + sep.length; y< str.length;y++){
        string2.push(strTab[y]);
    }
    let tabResult = [string1.join(''),string2.join('')]
    let j = 1 ;
    while (tabResult[j].indexOf(sep) !== -1){
        tabResult[j] = split(tabResult[j],sep);
    }
    if ( tabResult[1].indexOf(sep) !== -1 ){
        
    }else{
        return [...log] = tabResult;
    }
   
    

}
 result = split("I'm reading a wooden book et booked encore took.", "oo")
 console.log(result);