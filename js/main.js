var overlayloader = document.getElementById("loader");
window.addEventListener("load", function(){
    $("#loader").fadeOut();
});

document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();
    let timeline3 = new TimelineMax();
    timeline3
    .to('.section_3_01', 1, {
        y: -250,
        ease: Power3.easeInOut
    })
    .to('.section_3_02', 1, {
        y: -200,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_03', 1, {
        y: 100,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_04', 1, {
        y: 0,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_05', 1, {
        y: -200,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_06', 1, {
        y: 250,
        ease: Power3.easeInOut
    }, '-=4')

    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.third-section',
        duration: '100%',
        triggerHook: 0,
        offset: '100'
    })
    .setTween(timeline3)
    .setPin('.third-section')
    .addTo(controller);

});

//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");


const title = document.querySelector('.title');
const poke = document.querySelector('.poke img');
const description = document.querySelector('.info h3');
const extrat = document.querySelector('.extrat')
const play = document.querySelector('.play');

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 185;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  container.addEventListener("mouseenter", (e) => {
    title.style.transform = "translateZ(28px)";
    poke.style.transform = "translateZ(200px) rotateZ(45deg)";
    description.style.transform = "translateZ(125px)";
    extrat.style.transform = "translateZ(100px)";
    play.style.transform = "translateZ(75px)";
});

container.addEventListener("mouseleave", (e) => {
    //card.style.transition = "all 0.75s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    poke.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    extrat.style.transform = "translateZ(0px)";
    play.style.transform = "translateZ(0px)";
  });