function toUpper (){
    if (this.textContent){
        this.textContent = this.textContent.toUpperCase();  
    }
    //if (this.querySelectorAll("*")){
        this.querySelectorAll("*").forEach(el =>{
            el.toUpper();
        })
   // }
}
document.querySelector("body").toUpper
let body = document.querySelector("body")
body.querySelectorAll("*").forEach(el=>{
    el.textContent = el.textContent.toUpperCase()
})