gsap.from("#nav img,#nav h3,#nav-part2 h4,#nav-part2 button",{
y:-150,
duration:0.5,
stagger:0.15,
scale:2,
})


gsap.from(".mainback1",{
    x:500,
    opacity:0,
    duration:0.5,
    delay:1,
    border:"50px dotted white",
    rotate:100,
})

gsap.from("#mainh",{
    opacity:0,
    y:50,
    duration:1,
})

gsap.from(".mainback2",{
    x:-500,
    opacity:0,
    duration:0.5,
    delay:1.2,
    border:"30px dotted white",
    rotate:180,
    scale:1.5,
})
gsap.from(".mainback3",{
    opacity:0.3,
    duration:100,
    delay:1.5,
    rotate:3600,
    scale:1.5,
    repeat:-1,
    yoyo:"true",
    x:50,
})

gsap.from(".span",{
    opacity:0.01,
    /*y: -5000,*/
    duration:1,
    delay:1,
    rotate:50,
    scale:0.001,
    border: "0.2px solid white",
})


gsap.from("#logoscrolldown",{
    opacity:0.05,
    duration:2,
    scale:1.002,
    y:10,
    repeat:-1,
    yoyo:true,
})