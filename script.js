

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

.to("#img1", { 
  marginTop: "-10vh", 
delay: -1,
  duration: 1, 
  ease: "Expo.easeInOut" 
})

.to("#img2", { 
marginTop:"-47vh",
delay: -7,
  duration: 1, 
  ease: "Expo.easeInOut" 
})

.to("#img3", { 
marginTop:"-50vh",
delay: -4,
  duration: 1, 
  ease: "Expo.easeInOut" 
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
var menupageA1 = document.querySelector("#a1");
var menupageA2 = document.querySelector("#a2");
var menupageA3 = document.querySelector("#a3");
var menupageA4 = document.querySelector("#a4");



var flag= 0;
var menu = document.querySelector("#menu");
menu.addEventListener("click",function(){
if(flag == 0){
menupage.style.transition="all ease-in-out 1s";
menupageA1.style.transition="all ease-in-out .5s 1s";
menupage.style.width= "60vw";
menupageA1.style.color= "white";
menupageA2.style.transition="all ease-in-out .7s 1s";
menupageA3.style.transition="all ease-in-out .9s 1s";
menupageA4.style.transition="all ease-in-out 1s 1s";
menupageA2.style.color= "white";
menupageA3.style.color= "white";
menupageA4.style.color= "white";
flag= 1;
} 
else{
menupage.style.width= "0vw";
menupage.style.transition= "all ease-in-out";
menupageA1.style.color= "#111";
menupage.style.transition="all ease-in-out .5s";
menupageA1.style.transition="all ease-in-out .1s";
menupageA2.style.color= "#111";
menupageA3.style.color= "#111";
menupageA4.style.color= "#111";
menupageA2.style.transition="all ease-in-out .1s";
menupageA3.style.transition="all ease-in-out .1s";
menupageA4.style.transition="all ease-in-out .1s";

flag= 0;
}
})




var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");
var img3 = document.querySelector("#img3");

img1.addEventListener(
"touchstart", function(){
img1.style.transition= "all ease-in-out .5s";
img1.style.zIndex = "5";
img1.style.boxShadow = "0px 0px 10px 1px white";
});

img1.addEventListener(
"touchend", function(){
img1.style.zIndex = "0";
img1.style.transition= "0";
img1.style.boxShadow = "0px 0px 0px 0px white";
});


img2.addEventListener(
"touchstart", function(){
img2.style.transition= "all ease-in-out .5s";
img2.style.boxShadow = "0px 0px 10px 1px white";
img2.style.zIndex = "5";
});

img2.addEventListener(
"touchend", function(){
img2.style.zIndex = "0";
img2.style.transition= "0";
img2.style.boxShadow = "0px 0px 0px 0px white";
});


img3.addEventListener(
"touchstart", function(){
img3.style.zIndex = "5";
img3.style.transition= "all ease-in-out .5s";
img3.style.boxShadow = "0px 0px 10px 1px white";
});

img3.addEventListener(
"touchend", function(){
img3.style.zIndex = "0";
img3.style.transition= "0";
img3.style.boxShadow = "0px 0px 0px 0px white";
});

