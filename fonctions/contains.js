function contains(haystack,needle,startIndex = 0){
    if (needle.length > haystack.length || needle.length > haystack.length - startIndex){
        return console.log("bha non c'est plus grand ")
    }
    let indice = -1 ;
    let [...haystackTab] = haystack;
    let [...needleTab] = needle;
    for (let i = startIndex; i < haystack.length ; i++){
        if ( needleTab[0] === haystackTab[i]){
            let k = i;
            present = true;
            indice = i;
            for (let j=0 ; j < needle.length; j++){
                if( needleTab[j] !== haystackTab[k]){
                    present = false;
                    indice = -1;
                    console.log("oui");
                }
                k++;
            }
            if(present){
                return indice;
            }
        }
    }
    return indice;
}
let index = contains("Ce code fonctionne","code",1)
console.log(index);