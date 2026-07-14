/* ===========================
   LEY.ZIP
=========================== */

/* LOADER */

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if(loader){

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

},1000);

}

});

/* FADE ANIMATION */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(

".card,.pin,.artist-card,.library-card,.scrap-card,.favorite-card,.about-box,.player-box,.status-box,.letter-paper"

).forEach(el=>{

observer.observe(el);

});