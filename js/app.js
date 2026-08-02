/* =========================================================
SECTION 08
DARK / LIGHT MODE
========================================================= */

const themeToggle = document.getElementById("themeToggle");

const body = document.body;

if(localStorage.getItem("theme") === "light"){

body.classList.add("light-mode");

themeToggle.innerHTML='<i class="fa-solid fa-sun"></i>';

}

themeToggle.addEventListener("click",()=>{

body.classList.toggle("light-mode");

if(body.classList.contains("light-mode")){

localStorage.setItem("theme","light");

themeToggle.innerHTML='<i class="fa-solid fa-sun"></i>';

}else{

localStorage.setItem("theme","dark");

themeToggle.innerHTML='<i class="fa-solid fa-moon"></i>';

}

});


/* =========================================================
SECTION 09
SCROLL ANIMATIONS
========================================================= */

const observer=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.2

});

document.querySelectorAll(

'.fade-up,.slide-left,.slide-right'

).forEach((el)=>{

observer.observe(el);

});

