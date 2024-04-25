let body=document.getElementById("randomContainer")
let couples=[
    {
        boy: "Rama",
        girl:"Sita"
    },
    {
        boy: "Krishna",
        girl:"Radha"
    },
    {
        boy: "Siva",
        girl:"Paru"
    },
    {
        boy: "Vishnu",
        girl:"Lakshmi"
    },
    {
        boy: "Vijay",
        girl:"Yashu"
    },
    {
        boy: "Raghu",
        girl:"Priya"
    }
]


// let randomCouple=Math.floor(Math.random()*couples.length)
// let men=document.getElementById("Male")
// men.innerHTML= couples[randomCouple].boy
// console.log(couples[randomCouple].boy)

// let women=document.getElementById("Female")
// women.innerHTML=couples[randomCouple].girl
// console.log(couples[randomCouple].girl)


function show(){
    let randomCouple=Math.floor(Math.random()*couples.length)
    let men=document.getElementById("Male")
    men.innerHTML= couples[randomCouple].boy
    // console.log(couples[randomCouple].boy)
    
    let women=document.getElementById("Female")
    women.innerHTML=couples[randomCouple].girl
    // console.log(couples[randomCouple].girl)
    
}

