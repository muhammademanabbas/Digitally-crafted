const box =  document.querySelectorAll(".page-5 .box")  ; 
const crsr =  document.querySelector(".cursor")  ;  
const body  =  document.querySelector("body");
const page2   =  document.querySelector(".page-2")  ;  
const page1_video   =  document.querySelector(".page-1 video")  ;  
const purple_page   =  document.querySelector(".purple")  ;  
const purple_page_h1   =  document.querySelector(".purple h1")  ;
const purple_page_h2   =  document.querySelector(".purple #p2")  ;
const navH4   =  document.querySelectorAll(".navpart2 .h4")  ;
const navHome   =  document.querySelector(".navpart2 #home")  ;  
const navContact   =  document.querySelector(".navpart2 #contact")  ;  
const navWork   =  document.querySelector(".navpart2 #work")  ;  
const navStudio   =  document.querySelector(".navpart2 #studio")  ;  

console.log(box)

function locoWithScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locoWithScroll() ;

var tl1 =   gsap.timeline() ; 
tl1.from(document.querySelectorAll(".page-1 #digital-head , .page-1 #brand-head"),{
  y:-100 ,  
  duration:  1.2 ,  
},"h1")
tl1.to(".page-1 #digital-head",{
    x:-90 ,  
    scrollTrigger:{
        scroller  : ".main" ,  
        trigger :  ".page-1" , 
        // markers :  true   ,  
        start:"top 0%",
        end:"top -80% ",
        scrub:4 , 
        duration:0.05
    }
},"animh1") ;  
tl1.to(".page-1 #brand-head",{
    x:90 , 
    scrollTrigger:{
        scroller  : ".main" ,  
        trigger :  ".page-1" , 
        // markers :  true   ,  
        start:"top 0%",
        end:"top -80%" , 
        scrub:4 , 
        duration:0.05
    }
} ,"animh1"); 
tl1.to(".page-1 video" , {
    width:"95%"  , 
    scrollTrigger:{
        scroller  : ".main" ,  
        trigger :  ".page-1" , 
        // markers :  true   ,  
        start:"top 0%",
        end:"top -80%",
        scrub:4 , 
    }
},"animh1");
tl1.to(".main", {
  backgroundColor: "#fff",
  duration:1 , 
  scrollTrigger: {
    trigger: ".page1 .vid",
    scroller: ".main",
    // markers:true,
    start: "top -125%",
    end: "top -220%",
    scrub: 3 , 
}
})

var tl1 = gsap.timeline() ;
tl1.to(".main", {
  backgroundColor: "#000",
  duration:1 , 
  scrollTrigger: {
    trigger: ".page1 .vid",
    scroller: ".main",
    // markers:true,
    start: "top -280%",
    end: "top -500%",
    scrub: 3 , 
}
})

function imgCursor(){
  box.forEach(function(elem){
    elem.addEventListener("mousemove", function(details){
       elem.childNodes[3].style.display="block" ;  
       elem.childNodes[3].style.left=details.x+"px"  ; 
       elem.childNodes[3].style.top=details.y+"px"  ; 
       crsr.style.height =  "100px" ;
       
    })
    elem.addEventListener("mouseleave", function(){
      elem.childNodes[3].style.display="none";
      crsr.style.width  =  "16px" ;  
       crsr.style.height =  "16px" ;
   })
  })
}
imgCursor()  ;


function cursorFollower (){
  body.addEventListener("mousemove",function(details){
    crsr.style.left  = details.x+"px";
    crsr.style.top = details.y+"px";
    crsr.style.opacity= "1" ; 
    })
    body.addEventListener("mouseleave",function(details){
      crsr.style.opacity= "0" ; 
      })
}
cursorFollower ();  
function page1_video_cursor_function(){
  page1_video.addEventListener("mouseenter",function(){
    crsr.style.width  =  "70px" ;  
    crsr.style.height =  "20px" ;  
    crsr.style.borderRadius =  "50px" ; 
    crsr.innerHTML =  "view" ;
    crsr.style.display=  "flex" ; 
    crsr.style.alignItems=  "center" ; 
    crsr.style.justifyContent=  "center" ; 
    crsr.style.backgroundColor = `green`;
  })
  page1_video.addEventListener("mouseleave",function(){
    crsr.style.width  =  "16px" ;  
    crsr.style.height =  "16px" ;  
    crsr.style.borderRadius =  "50%" ; 
    crsr.innerHTML =  "" ;
    crsr.style.backgroundColor = `#EDBFFF`;
  })
}
page1_video_cursor_function() ; 

function navPageAnim (){
  var array =   ["Home" , "WORK" , "STUDIO" , "CONTACT"]  ; 
 navH4.forEach(function(elem){
  elem.addEventListener("mouseenter", function(){
    purple_page.style.display="block";  
  })
 })
 navH4.forEach(function(elem){
  elem.addEventListener("mouseleave", function(){
    purple_page.style.display="none";  
  })
 })
}
navPageAnim() ;

function printNavHeading  (str ,  num){
  var clutter =" "  ; 
  for(let i  =1  ;  i< num ;   i++){
    clutter+=" "+str ;  
  }
  return clutter;  
}
 function navContinuosAnim(){
  navWork.addEventListener("mouseenter" ,function(){
    purple_page_h2.innerHTML= `${printNavHeading("WORK",20)}` ;
    purple_page_h1.innerHTML= `${printNavHeading("WORK",20)}` ;
  }) ;
  navWork.addEventListener("mouseleave" ,function(){
    purple_page.childNodes[1].innerHTML=""; 
  }) ;
  navHome.addEventListener("mouseenter" ,function(){
    purple_page_h1.innerHTML= `${printNavHeading("HOME",20)}` ; 
  }) ;
  navHome.addEventListener("mouseleave" ,function(){
    purple_page.childNodes[1].innerHTML=""; 
  }) ;
  navStudio.addEventListener("mouseenter" ,function(){
    purple_page_h1.innerHTML= `${printNavHeading("STUDIO",20)}`  ;
  }) ;
  navStudio.addEventListener("mouseleave" ,function(){
    purple_page.childNodes[1].innerHTML=""; 
  }) ;
  navContact.addEventListener("mouseenter" ,function(){
    purple_page_h1.innerHTML= `${printNavHeading("CONTACT",20)}` ;
  }) ;
  navContact.addEventListener("mouseleave" ,function(){
    purple_page.childNodes[1].innerHTML=""; 
  }) ;
  
 }
 navContinuosAnim()   ;
 function h4anim(){
  navH4.forEach(function(elem){
     elem.addEventListener("mouseenter" ,  function(){
      gsap.to(document.querySelector(".purple h1"),  {
        transform:"translateX(-100%)" ,   
        duration:20,
      }) 
     })
  })
 }
 h4anim() ; 
