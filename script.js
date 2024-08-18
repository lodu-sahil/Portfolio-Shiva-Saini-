

var tl = gsap.timeline();

tl
.to("#fs h1",{
bottom: 0,
duration: 2,
ease: Expo.easeInOut,
})

.to("#fs div",{
height: 0,
duration: 2,
ease: Expo.easeInOut,
})

.to("#fs",{
height: 0,
delay: -2,
duration: 2,
ease: Expo.easeInOut,
})


.to("#elem",{
height: 0,
delay: -2,
duration: 2,
ease: Expo.easeInOut,

})


.to("#white div",{
delay: 0,
top: 0,
duration: 1,
ease: Expo.easeInOut,
})

.to(".wd",{
delay: -1,
bottom: 0,
duration: 1,
})

.to("#nyro",{
delay: -1,
top: 0,
duration: 1,
})


var myName = document.querySelectorAll("#nav a")

myName.forEach(function (elem){

elem.addEventListener("touchstart", function(){
elem.style.backgroundColor = "green";
elem.style.color = "black";
elem.style.fontWeight = "bold";
})


elem.addEventListener("touchend", function(){
elem.style.backgroundColor = "black";
elem.style.color = "white";
elem.style.fontWeight = "normal";

;})

})

var menupage = document.querySelector("#menupage");

var flag= 0;
var menu = document.querySelector("#menu");
menu.addEventListener("click",function(){
if(flag == 0){
menupage.style.width= "100vw";
flag= 1;
} 
else{
menupage.style.width= "0vw";
flag= 0;
}

})