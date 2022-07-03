gsap.from('.navbar',  {duration:1, opacity:0})
gsap.from('.ltr', { duration:1, opacity:0, x: '-100%'})
gsap.from('.rtl', { duration:1, opacity:0, x: '100%'})
// gsap.from('.fade1', { duration: 1, opacity:0 })


gsap.registerPlugin(ScrollTrigger);
gsap.from('.utd',{
    scrollTrigger:{
        trigger:'.utd',
        toggleActions: "restart pause enone none"
    },
    y:50,
    duration:0.6,
    opacity:0
})



gsap.from('.utd2',{
    scrollTrigger:{
        trigger:'.utd2',
        toggleActions: "restart pause none"
    },
    y:50,
    duration:0.6,
    opacity:0
})

gsap.from('.utd3',{
    scrollTrigger:{
        trigger:'.utd3',
        toggleActions: "restart pause enone none"
    },
    y:50,
    duration:0.6,
    opacity:0
})
gsap.from('.fade1', {
    scrollTrigger:{
        trigger:'.fade1',
        toggleActions: "restart pause none none"
    },
    duration:1.6,
    opacity:0
})

gsap.from('.utd4',{
    scrollTrigger:{
        trigger:'.utd4',
        toggleActions: "restart pause enone none"
    },
    y:50,
    duration:0.6,
    opacity:0
})

gsap.from('.utd5',{
    scrollTrigger:{
        trigger:'.utd5',
        toggleActions: "restart pause enone none"
    },
    y:50,
    duration:0.6,
    opacity:0
})