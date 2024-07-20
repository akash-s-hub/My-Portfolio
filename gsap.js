let timeline = gsap.timeline().pause()
let scrollTriggerPg2 = gsap.timeline({
    scrollTrigger: {
        scroller: "body",
        trigger: ".page2",
        // markers: true,
        start: "top 70%",
        end: "top 40%",
        scrub: 2,
    }
})
let scrollTriggerPg3 = gsap.timeline({
    scrollTrigger: {
        scroller: "body",
        trigger: ".page3",
        // markers: true,
        start: "top 70%",
        end: "top 40%",
        scrub: 2,
    }
})
let scrollTriggerPg4 = gsap.timeline({
    scrollTrigger: {
        scroller: "body",
        trigger: ".page4",
        // markers: true,
        start: "top 70%",
        end: "top 40%",
        scrub: 2,
    }
})







//page1 animation website khulte hi
function landingPageAnimation() {
    gsap.from(".left", {
        y: -100,
        duration: 0.4,
        opacity: 0,
        ease: "slow(0.9,0.3,false)"
    })

    gsap.from(".left h1", {
        x: -50,
        duration: 0.4,
        opacity: 0,
        ease: "slow(0.9,0.3,false)"
    })
    gsap.from(".left p", {
        x: 50,
        duration: 0.4,
        opacity: 0,
        ease: "slow(0.9,0.3,false)"
    })

    gsap.from(".right .imgContainer", {
        y: 100,
        duration: 0.4,
        opacity: 0,
        ease: "slow(0.9,0.3,false)",
        onComplete: () => { timeline.play() }
    })
}
timeline.to("button", {
    background: "linear-gradient(220deg, #09edfb, #0072ff)",
    boxShadow: "0 0 5px 5px rgba(0, 114, 255, 0.5)",
    transition: "all 0.3s ease",
    duration: 0.5
})
landingPageAnimation();

//page2 animation as it reach page1
function page1Exit() {
    scrollTriggerPg2.to(".left", {
        y: 100,
        duration: 0.25,
        opacity: 0,
        ease: "slow(0.9,0.3,false)"
    }, "page2enter")
    scrollTriggerPg2.to(".left h1", {
        x: 50,
        duration: 0.25,
        opacity: 0,
        ease: "slow(0.9,0.3,false)"
    }, "page2enter")
    scrollTriggerPg2.to(".left p", {
        x: -50,
        duration: 0.25,
        opacity: 0,
        ease: "slow(0.9,0.3,false)"
    }, "page2enter")
    scrollTriggerPg2.to(".right .imgContainer", {
        y: -100,
        duration: 0.25,
        opacity: 0,
        ease: "slow(0.9,0.3,false)"
    }, "page2enter")
}
page1Exit();





//page2 animation as it reach page2
function page2Enter() {
    scrollTriggerPg2.from(".left2", {
        y: 100,
        duration: 0.4,
        opacity: 0,
        ease: "slow(0.9,0.3,false)",
    }, "page2enter")
    scrollTriggerPg2.from(".right2", {
        x: -50,
        duration: 0.25,
        opacity: 0
    }, "page2enter")
}
page2Enter();

// page2 animation as it reach page3
function page2Exit() {
    scrollTriggerPg3.to(".left2", {
        y: -100,
        duration: 0.25,
        opacity: 0,
        ease: "slow(0.9,0.3,false)",
    }, "page3enter")
    scrollTriggerPg3.to(".right2", {
        x: -50,
        duration: 0.25,
        opacity: 0
    }, "page3enter")
}
page2Exit();





// page3 animation as it reach page3
function page3Enter() {
    scrollTriggerPg3.from(".projectHeading", {
        opacity: 0,
        duration: 0.4,
        x: -100
    }, "page3enter")

    scrollTriggerPg3.from(".projectHolder", {
        opacity: 0,
        duration: 0.4,
        x: 100
    }, "page3enter")

    scrollTriggerPg3.from(".projectDescription", {
        opacity: 0,
        duration: 0.4
    }, "page3enter")
}
page3Enter();

// page3 animation as it reach page4
function page3Exit(){
    scrollTriggerPg4.to(".projectHeading",{
        opacity:0,
        x:100,
        duration:0.25
    },"page3exit")
    scrollTriggerPg4.to(".projectHolder",{
        opacity:0,
        x:-100,
        duration:0.25
    },"page3exit")
    scrollTriggerPg4.to(".projectDescription",{
        opacity:0,
        duration:0.25
    },"page3exit")
}
page3Exit();




// function page4Enter(){
//     scrollTriggerPg4.from(".",{
//         opacity:0,

//     })
// }
// page4Enter();