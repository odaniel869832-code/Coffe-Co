// const scroller = document.querySelector(".scroll-inner")
// console.log(scroller)
// const scrollerContent = Array.from(scroller.children);
// console.log(scrollerContent)
// scrollerContent.forEach((item)=>{
//     const duplicatedItem = item.cloneNode(true);
//     duplicatedItem.setAttribute("aria-hidden", true);
//     scroller.appendChild(duplicatedItem)
// })



const hamburger = document.getElementById("hamburger")
const hamburgerBtn = document.getElementById("hamburger-btn")
const navbar = document.getElementById("navbar")
const leftBtn = document.querySelector(".left")
const rightBtn = document.querySelector(".right")
const cards = document.querySelector(".cards")
const card = document.querySelectorAll(".card")
const overlay = document.querySelector(".overlay")
let index = 0;

console.log(overlay)


rightBtn.addEventListener("click", ()=>{
    


    index++;
    if(index >= (card.length/4)){
        index = 0;
    }
    cards.style.transform = `translateX(-${index * 100}%)`;
})
leftBtn.addEventListener("click", ()=>{
    


    index--;
    if(index < 0){
        index = (card.length/4)-1;
    }
    cards.style.transform = `translateX(-${index * 100}%)`;
})


hamburger.addEventListener("click", ()=>{
    hamburgerBtn.classList.toggle("hamburger-active");
    navbar.classList.toggle("nav-ease");
    overlay.classList.toggle("nav-ease");
    

   
    

})
navbar.addEventListener("click", ()=>{
    hamburgerBtn.classList.toggle("hamburger-active");
    navbar.classList.toggle("nav-ease");
    overlay.classList.toggle("nav-ease");
    

   
    

})
overlay.addEventListener("click", ()=>{
    hamburgerBtn.classList.toggle("hamburger-active");
    navbar.classList.toggle("nav-ease");
    overlay.classList.toggle("nav-ease");

    console.log("clicked")
   
    

})
