let men=document.getElementById("men")
console.log(men);

men.addEventListener("mouseover",()=>{
    // e.preventDefault()
    // console.log("hellooo");
    let listmen=document.getElementById("list-men")
    console.log(listmen);
    let output=listmen.classList.toggle(true)
    if (output) {
        listmen.style.display="block"
    } else {
        listmen.style.display="none"
    }
})
men.addEventListener("mouseleave",()=>{
    let listmen=document.getElementById("list-men")
    console.log(listmen);
    listmen.style.display="none"
})
men.addEventListener("click",()=>{
    let listmen=document.getElementById("list-men")
    console.log(listmen);
    window.open("http://www.youtube.com")
    // window.open("index.html")
})

let women=document.getElementById("women")
console.log(women);
women.addEventListener("mouseover",()=>{
    let listwomen=document.getElementById("list-women")
    console.log(listwomen);
    let output=listwomen.classList.toggle(true)
    if (output) {
        listwomen.style.display="block"
    } else {
        listwomen.style.display="none"
    }
})
women.addEventListener("mouseleave",()=>{
    let listwomen=document.getElementById("list-women")
    console.log(listwomen);
    listwomen.style.display="none"
})
