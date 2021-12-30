const tl = gsap.timeline({defaults: {duration:0.75, ease:"Power4.out"}});
const tlunderline = gsap.timeline({defaults: {duration:1, ease: Elastic.easeOut.config(1,0.3)}});
gsap.registerPlugin(ScrollTrigger);
// Logic for Preloader
// const tl = gsap.timeline({defaults: {duration:0.75, ease:"Power3.out"}});

// tlunderline.fromTo(".h1_underline",  {opacity:0, width:"0%"}, {opacity:1,scrollTrigger:".h1_underline", width:"70%", duration:3});
 let loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    
    gsap.set(loader, {transformOrigin:"top"});
    tl.fromTo(loader, {display:"fixed",opacity:1}, {opacity:0,scale:100, display:"none" ,duration:1,delay: 1});
    heroAnimation();
    
    // loader.style.display = "none";
});


const heroAnimation = () => {
    // tl.fromTo('.nav', {y:"-100%", opacity:1}, {y:"0%",ease:"Power0.easeNone" ,opacity:1});
    tl.fromTo('.cta1', {x:"100%", opacity: 0},{x:0,opacity:1});
    tl.fromTo('.cta3', {x:"-100%", opacity: 0},{x:0,opacity:1},"<20%")
    tl.fromTo('.cta2', {y:"100%", opacity: 0},{y:0,opacity:1},"<20%")
    tl.fromTo('.cta4', {x:"100%", opacity: 0},{x:0,opacity:1}, "<20%");
}

gsap.to(".h1_underline", 1,{ ease: Elastic.easeOut.config(1,0.3), scrollTrigger:".h1_underline", width:"50%"});
gsap.to(".h1_products_underline", 1,{ ease: Elastic.easeOut.config(1,0.3), scrollTrigger:".h1_products_underline", width:"30%"});
gsap.to(".h1_gallary_underline", 1,{ ease: Elastic.easeOut.config(1,0.3), scrollTrigger:".h1_gallary_underline", width:"30%"})

