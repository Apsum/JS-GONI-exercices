function startsWith(str, start){
    let [...strTab] = str;
    let [...startTab] = start;
    for (let i =0; i<start.length; i++){
        if ( strTab[i] !== startTab[i]){
            return console.log(false);
        }
    }
    return console.log(true)
}
startsWith("Les ogres c'est comme les oignons.","Ca schlingue ?")
startsWith("Et demain matin, j'te fais des gaufres au sucre !!", "Et demain"); // => true