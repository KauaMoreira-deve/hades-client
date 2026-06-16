/* ==========================================
   HADESCLIENT HERO
   GSAP + INTERAÇÕES
========================================== */

/*
==========================================
CARREGA GSAP
==========================================

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>

ANTES DO SCRIPT.
*/


document.addEventListener("DOMContentLoaded", () => {

    /*
    ==========================================
    ELEMENTOS
    ==========================================
    */

    const hero = document.querySelector(".hero");

    const marquee = document.querySelector(".marquee-track");

    const helmet = document.querySelector(".helmet");

    const glow = document.querySelector(".helmet-glow");

    const eyes = document.querySelectorAll(".eye");

    const argosCard = document.querySelector(".argos-card");

    const title = document.querySelector(".hero-title");

    const description = document.querySelector(".hero-description");

    const buttons = document.querySelectorAll(".btn");

    const badge = document.querySelector(".hero-badge");


    /*
    ==========================================
    ANIMAÇÃO DE ENTRADA
    ==========================================
    */

    const tl = gsap.timeline();

    tl.from(".navbar", {
        y: -40,
        opacity: 0,
        duration: .8,
        ease: "power3.out"
    })

    .from(badge, {
        y: 30,
        opacity: 0,
        duration: .6
    }, "-=.4")

    .from(title, {
        y: 50,
        opacity: 0,
        duration: .8,
        ease: "power3.out"
    }, "-=.2")

    .from(description, {
        y: 25,
        opacity: 0,
        duration: .6
    }, "-=.4")

    .from(buttons, {
        y: 20,
        opacity: 0,
        stagger: .12,
        duration: .5
    }, "-=.4")

    .from(helmet, {
        scale: .7,
        opacity: 0,
        rotate: -5,
        duration: 1,
        ease: "back.out(1.6)"
    }, "-=.5")

    .from(argosCard, {
        y: 25,
        opacity: 0,
        duration: .7
    }, "-=.5");


    /*
    ==========================================
    MARQUEE INFINITO
    ==========================================
    */

    gsap.to(marquee, {
        x: "-50%",
        duration: 20,
        ease: "none",
        repeat: -1
    });


    /*
    ==========================================
    CAPACETE FLUTUANDO
    ==========================================
    */

    gsap.to(helmet, {
        y: -12,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });


    /*
    ==========================================
    GLOW FLUTUANDO
    ==========================================
    */

    gsap.to(glow, {
        scale: 1.12,
        opacity: .8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });


    /*
    ==========================================
    OLHOS PULSANDO
    ==========================================
    */

    eyes.forEach((eye) => {

        gsap.to(eye, {
            opacity: .45,
            duration: .8,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

    });


    /*
    ==========================================
    MOUSE PARALLAX
    ==========================================
    */

    hero.addEventListener("mousemove", (e) => {

        const x = (e.clientX / window.innerWidth - .5);

        const y = (e.clientY / window.innerHeight - .5);


        gsap.to(helmet, {

            x: x * 20,

            y: y * 20,

            rotate: x * 8,

            duration: .8,

            ease: "power3.out"

        });


        gsap.to(glow, {

            x: x * 30,

            y: y * 30,

            duration: .9

        });

    });


    /*
    ==========================================
    MOUSE LEAVE
    ==========================================
    */

    hero.addEventListener("mouseleave", () => {

        gsap.to(helmet, {

            x: 0,

            y: 0,

            rotate: 0,

            duration: 1

        });


        gsap.to(glow, {

            x: 0,

            y: 0,

            duration: 1

        });

    });


    /*
    ==========================================
    EFEITO ARGOS
    ==========================================
    */

    const messages = [

        "Detectei oportunidades invisíveis na sua operação.",

        "43% das objeções estão ligadas ao preço.",

        "Você pode estar perdendo clientes por demora.",

        "Leads respondidos em 15 minutos convertem mais.",

        "Encontrei gargalos escondidos no atendimento."

    ];


    const argosText = document.querySelector(".argos-info strong");


    let index = 0;


    setInterval(() => {

        index++;

        if(index >= messages.length){

            index = 0;

        }


        gsap.to(argosText, {

            opacity: 0,

            y: 8,

            duration: .25,

            onComplete: () => {

                argosText.textContent = messages[index];


                gsap.to(argosText, {

                    opacity: 1,

                    y: 0,

                    duration: .35

                });

            }

        });

    }, 5000);


    /*
    ==========================================
    CTA HOVER
    ==========================================
    */

    buttons.forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            gsap.to(glow, {

                scale: 1.25,

                opacity: 1,

                duration: .35

            });

        });


        btn.addEventListener("mouseleave", () => {

            gsap.to(glow, {

                scale: 1,

                opacity: .8,

                duration: .35

            });

        });

    });


    /*
    ==========================================
    PARTÍCULAS SIMPLES
    ==========================================
    */

    for(let i = 0; i < 15; i++){

        const particle = document.createElement("div");

        particle.classList.add("particle");

        hero.appendChild(particle);


        gsap.set(particle, {

            x: Math.random() * window.innerWidth,

            y: window.innerHeight + 50,

            opacity: Math.random(),

            scale: Math.random() * 1.5

        });


        animateParticle(particle);

    }


    function animateParticle(el){

        gsap.to(el, {

            y: -150,

            x: "+=" + (Math.random() * 120 - 60),

            opacity: 0,

            duration: Math.random() * 10 + 8,

            ease: "none",

            onComplete: () => {

                gsap.set(el, {

                    y: window.innerHeight + 50,

                    x: Math.random() * window.innerWidth,

                    opacity: Math.random()

                });

                animateParticle(el);

            }

        });

    }

});