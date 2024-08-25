


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
img1.style.zIndex = "1";
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
img2.style.zIndex = "1";
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
img3.style.zIndex = "1";
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



var a = document.querySelectorAll(".chacha");

a.forEach(function(e){

e.addEventListener("touchstart",function(){
e.style.boxShadow="0px 0px 10px 1px white";
})

e.addEventListener("touchend",function(){
e.style.boxShadow="0px 0px 0px 0px white";
});

});


var msg = document.querySelectorAll(".msg");

msg.forEach(function(e){

e.addEventListener("touchstart",function(){
e.style.boxShadow="0px 0px 10px 1px white";
})

e.addEventListener("touchend",function(){
e.style.boxShadow="0px 0px 0px 0px white";
});

});



var chachi = document.querySelector(".chachi");
var themeicon = document.querySelector("#menupage i");
var lets = document.querySelector("#lets");
var connect = document.querySelector("#connect");
var hh2 = document.querySelector(".hh2");
var hh1 = document.querySelector(".hh1");
var navh1 = document.querySelector("#nav h1");
var animatedbox1 = document.querySelector("#animatedbox1");
var animatedbox2 = document.querySelector("#animatedbox2");
var animatedbox3 = document.querySelector("#animatedbox3");
var animatedbox4 = document.querySelector("#animatedbox4");
var themee = document.querySelector("#theme");
var des = document.querySelector("#des");
var dev = document.querySelector("#dev");
var nyro = document.querySelector("#nyro");
var page1 = document.querySelector("#page1");
var page2 = document.querySelector("#page2");
var page4 = document.querySelector("#page4");
var body = document.body
var flagg = 0;

document.querySelector("#theme").addEventListener("click", function(){

if (flagg == 0){

document.querySelectorAll(".highlight").forEach(function(highlight) {
highlight.style.color="red";
});
document.querySelectorAll(".name").forEach(function(name) {
name.style.color="black";
});
document.querySelectorAll(".container h1").forEach(function(h1) {
h1.style.color="#333";
});
document.querySelectorAll(".container p").forEach(function(p) {
p.style.color="black";
});

chachi.style.borderTop="2px solid red";
themeicon.style.color="white";

themee.style.backgroundColor="#333";
themee.style.color="white";

document.querySelectorAll(".chacha i").forEach(function(i) {
i.style.color="purple"
});



document.querySelectorAll(".chacha h5").forEach(function(h1) {
h1.style.color="black"
});


document.querySelectorAll(".chacha h1").forEach(function(h1) {
h1.style.color="black"
});

document.querySelectorAll("#menupage a").forEach(function(anchor) {
anchor.style.color="black";
});

document.querySelectorAll(".chacha").forEach(function(elem) {
elem.style.borderBottom="2px solid red";


});

document.querySelectorAll(".msg").forEach(function(elem) {
elem.style.color="black";
});
menupage.style.backgroundColor="#ddd";
menupage.style.boxShadow="0px 0px 100px 1px #111";
connect.style.color="black";
lets.style.color="black";
hh1.style.color="black";
hh2.style.color="black";
menubtn.style.color="black";
menubtn.style.border="2px solid red";
navh1.style.color="black";
navh1.style.border="2px solid red";
animatedbox1.style.backgroundColor="red";
animatedbox2.style.backgroundColor="red";
animatedbox3.style.backgroundColor="red";
animatedbox4.style.backgroundColor="red";
  nyro.style.color = "red";
  des.style.color = "#000";
  dev.style.color = "#000";
  page1.style.backgroundColor = "#ddd";
  page2.style.backgroundColor = "#ddd";
    page4.style.backgroundColor = "#fff";
    body.style.color = "#000";
    body.style.backgroundColor = "#ddd";
  flagg = 1;
}
else{

document.querySelectorAll(".highlight").forEach(function(highlight) {
highlight.style.color="#3AB7A4";
});

document.querySelectorAll(".name").forEach(function(name) {
name.style.color="white";
});
document.querySelectorAll(".container h1").forEach(function(h1) {
h1.style.color="#ddd";
});
document.querySelectorAll(".container p").forEach(function(p) {
p.style.color="white";
});


chachi.style.borderTop="1px solid lightgreen";

themeicon.style.color="black";

themee.style.backgroundColor="#ddd";
themee.style.color="black";

document.querySelectorAll(".chacha i").forEach(function(i) {
i.style.color="aqua"
});




document.querySelectorAll(".chacha h1").forEach(function(h1) {
h1.style.color="white"
});


document.querySelectorAll(".chacha h5").forEach(function(h1) {
h1.style.color="white"
});


document.querySelectorAll("#menupage a").forEach(function(anchor) {
anchor.style.color="white";
});

menupage.style.boxShadow="0px 0px 100px 1px aqua";
menupage.style.backgroundColor="#222";






document.querySelectorAll(".chacha").forEach(function(elem) {
elem.style.borderBottom="2px solid green";


});

document.querySelectorAll(".msg").forEach(function(elem) {
elem.style.color="white";
});

connect.style.color="white";
lets.style.color="white";
hh1.style.color="white";
hh2.style.color="white";
navh1.style.color="white";
menubtn.style.color="white";
menubtn.style.border="2px solid aqua";
navh1.style.border="2px solid aqua";
animatedbox1.style.backgroundColor="aqua";
animatedbox2.style.backgroundColor="aqua";
animatedbox3.style.backgroundColor="aqua";
animatedbox4.style.backgroundColor="aqua";

nyro.style.color = "aqua";
des.style.color = "#fff";
dev.style.color = "#fff";
body.style.backgroundColor = "#222";
page2.style.backgroundColor = "#222";
page4.style.backgroundColor = "#111";
page1.style.backgroundColor = "#222";
body.style.color = "#fff";
flagg = 0;
}

})




const elements = [
"#lets",
"#connect",
".msgg1",
".msgg2",
".chacha1",
".chacha2",
".chacha3",
".container",
".ht0",
".ht1",
".ht2",
".ht3",
".ht4",
".currentwork"

];

elements.forEach(el => {
  gsap.from(el, {
    y: 50,
    duration: 0.5,
    scrollTrigger: { 
      trigger: el,
      toggleActions: "play none none reset"
    }
  });
});