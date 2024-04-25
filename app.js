let main=document.getElementById("vote validation")
// let age=document.getElementById("input-value").value
// if(a<=18){
//     console.log(you are eligible to vote);
// }
// else(a>18){
//     console.log("Your are not eligible to vote");
// }
function show() {
    let error = document.getElementById("para")
    let age = document.getElementById("input-value").value
    if (age >= 18) {
        error.innerHTML="you are eligible to vote"
        para.style.color="green"
    }
    else if (age==""){
        error.innerHTML =  "arey stupid fellow enter the age"
        para.style.color="yellow"
        
    }
    
    else{
        error.innerHTML="Your are not eligible to vote"
        para.style.color="red"
    }
}