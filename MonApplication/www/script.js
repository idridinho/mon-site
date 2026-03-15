


let index = 0;
const slider = document.querySelector(".slider");
const slides = document.querySelector(".slides");
const total = slides.children.length;

function showSlide() {
    slides.style.transform = "translateX(-" + (index * 100) + "%)";
}

function nextSlide(){
    index++;

    if(index >= total){
        index = 0; 
    }

    showSlide();
}

let autoSlide = setInterval(nextSlide, 1500);

slides.addEventListener("mouseenter", function(){
    clearInterval(autoSlide);
});

slides.addEventListener("mouseleave", function(){
    autoSlide = setInterval(nextSlide,1500);
});

slides.addEventListener("touchstart", function(){
    clearInterval(autoSlide);
});

let startX = 0;

slides.addEventListener("touchstart", function(e){
    startX = e.touches[0].clientX;
});

slides.addEventListener("touchend", function(e){
    let endX = e.changedTouches[0].clientX;

    if(startX - endX > 50){
        index++;
    }

    if(endX - startX > 50){
        index--;
    }

    if(index >= total){
        index = 0;
    }

    if(index < 0){
        index = total - 1;
    }

    showSlide();
});

let mouseStartX = 0;

slider.addEventListener("mousedown", function(e){
    mouseStartX = e.clientX;
});

slider.addEventListener("mouseup", function(e){
    let mouseEndX = e.clientX;

    if(mouseStartX - mouseEndX > 50){ 
        index++;
    }

    else if(mouseEndX - mouseStartX > 50){
        index--;
    }

    if(index >= total){
        index = 0;
    }

    if(index < 0){
        index = total - 1;
    }

    showSlide();
});

