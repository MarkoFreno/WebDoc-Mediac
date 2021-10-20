const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const big_p = document.querySelector(".big-p");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    big_p.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})

$(".num").counterUp(
    {
    delay:10,time:2000
    }
);

window.onscroll = 
function()
{
    var blooper = document.getElementById("myVideo");
    if (blooper.getBoundingClientRect().bottom < 250 || blooper.getBoundingClientRect().top > 250)
    blooper.pause()
    else
    blooper.play();
    blooper.volume = 0.15;
}

function videopause() {
    
    var pausevid = document.getElementById("myVideo");
    if (pausevid.paused) {
        pausevid.play()
    }
    else {
        pausevid.pause()
    }
}

  AOS.init();

