document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
    .from('.section_1_01', 4, {
        y: -100,
        x: -150,
        ease: Power3.easeInOut
    })
    .from('.section_1_02', 4, {
        y: -150,
        x: -250,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_03', 4, {
        y: -80,
        x: -100,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_04', 4, {
        y: -100,
        x: -150,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_05', 4, {
        y: -80,
        x: -200,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_06', 4, {
        y: -100,
        x: -350,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_07', 4, {
        y: -50,
        x: -150,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_08', 4, {
        y: 50,
        x: -350,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_09', 4, {
        y: 100,
        x: -200,
        ease: Power3.easeInOut
    }, '-=4')

    let scene = new ScrollMagic.Scene({
        triggerElement: '.first-section',
        duration: '100%',
        triggerHook: 0,
        offset: '300'
    })
    .setTween(timeline)
    .setPin('.first-section')
    .addTo(controller);

    let timeline2 = new TimelineMax();
    timeline2
    .to('.top .image-container', 4, {
        height: 0
    });

    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.second-section',
        duration: '100%',
        triggerHook: 0,
        offset: '100'
    })
    .setTween(timeline2)
    .setPin('.second-section')
    .addTo(controller);

    let timeline3 = new TimelineMax();
    timeline3
    .to('.section_3_01', 2, {
        y: -250,
        ease: Power3.easeInOut
    })
    .to('.section_3_02', 2, {
        y: -200,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_03', 2, {
        y: 100,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_04', 2, {
        y: 0,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_05', 2, {
        y: -150,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_06', 2, {
        y: 250,
        ease: Power3.easeInOut
    }, '-=4')

    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.third-section',
        duration: '100%',
        triggerHook: 0,
        offset: '200'
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
    let xAxis = (window.innerWidth / 2 - e.pageY) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageX) / 30;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";

    title.style.transform = "perspective(100px) translateZ(25px)";
    poke.style.trnaform = "rotate(-45deg)";
    description.style.transform = "perspective(100px) translateZ(25px)";
    extrat.style.transform = "perspective(100px) translateZ(10px)";
    play.style.transform = "perspective(100px) translateZ(15px)";
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