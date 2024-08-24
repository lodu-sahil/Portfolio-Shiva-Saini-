


var tl = gsap.timeline();


tl.to("#title h1",{
bottom:0,
duration:2,
ease: Expo.easeInOut,
})

tl.to("#title h1",{
bottom:"100%",
duration:1,
ease: Expo.easeInOut,
})

tl.to("#loader",{
height:0,
duration:2,
delay: -1,
ease: Expo.easeInOut,
})

tl.to("#loader2",{
height:"100%",
bottom:"100%",
duration:2,
delay: -2,
ease: Expo.easeInOut,
})

tl.to("#nav h1",{
duration:2,
delay: -2,
top:"2vh",
ease: Expo.easeInOut,
})
tl.to("#nav i",{
position:"fixed",
top:"2vh",
duration:2,
delay: -2,
ease: Expo.easeInOut,
})

tl.to("#nyro",{
bottom:0,
duration:2,
delay: -1,
ease: Expo.easeInOut,
});
tl.to(".wd",{
bottom:0,
duration:2,
delay: -1.8,
ease: Expo.easeInOut,
});
tl.to("#img1",{
top:0,
duration:2,
delay: -2,
ease: Expo.easeInOut,
});
tl.to("#img3",{
bottom:"0vh",
duration:2,
delay: -2,
ease: Expo.easeInOut,
});
tl.to("#img2",{
top:"8vh",
duration:2,
delay: -2,
ease: Expo.easeInOut,
});

tl.to("#currentposition",{
opacity:.5,
duration:2,
delay: -1.8,
ease: Expo.easeInOut,
});



var menubtn = document.querySelector("#nav i");
var menupage = document.querySelector("#menupage");
var flag = 1;

menubtn.addEventListener("click",function(){
if(flag == 1){

menupage.style.width="60vw";

flag = 0;}
else{
menupage.style.width="0vw";

flag = 1;}
})

var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");
var img3 = document.querySelector("#img3");

img1.addEventListener(
"touchstart", function(){
img1.style.transition= "all ease-in-out .5s";
img1.style.zIndex = "5";
img2.style.opacity=".5";
img3.style.opacity=".5";
img1.style.boxShadow = "0px 0px 10px 1px white";
});

img1.addEventListener(
"touchend", function(){
img3.style.opacity="1";
img2.style.opacity="1";
img1.style.zIndex = "0";
img1.style.transition= "0";
img1.style.boxShadow = "0px 0px 0px 0px white";
});


img2.addEventListener(
"touchstart", function(){
img2.style.transition= "all ease-in-out .5s";
img2.style.boxShadow = "0px 0px 10px 1px white";
img2.style.zIndex = "5";
img3.style.opacity=".5";
img1.style.opacity=".5";
});

img2.addEventListener(
"touchend", function(){
img2.style.zIndex = "0";
img2.style.transition= "0";
img3.style.opacity="1";
img1.style.opacity="1";
img2.style.boxShadow = "0px 0px 0px 0px white";
});


img3.addEventListener(
"touchstart", function(){
img3.style.zIndex = "5";
img2.style.opacity=".5";
img1.style.opacity=".5";
img3.style.transition= "all ease-in-out .5s";
img3.style.boxShadow = "0px 0px 10px 1px white";
});

img3.addEventListener(
"touchend", function(){
img3.style.zIndex = "0";
img2.style.opacity="1";
img1.style.opacity="1";
img3.style.transition= "0";
img3.style.boxShadow = "0px 0px 0px 0px white";
});

const parent = document.getElementById('page2');
const children = parent.children;

window.addEventListener('scroll', () => {
  const top = parent.getBoundingClientRect().top;
  const scrollY = window.scrollY;

  if (top < window.innerHeight / 2) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      child.style.transform = `translateY(${scrollY / 20}px)`;
      child.style.transition = 'transform 0.5s ease-out';
    }
  } else {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      child.style.transform = '';
      child.style.transition = 'transform 0.5s ease-in';
    }
  }
});