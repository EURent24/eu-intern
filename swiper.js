window.addEventListener("load", function (){
    const wrapper = document.querySelector("#swiper-wrapper-7fae4c55efac823b")
    const swipe = 799

    document.querySelector("#button-next").addEventListener('click',function (){
        const length = wrapper.style.transform.replace('translate3d(', '').split(',')[0].replace('px', '')
        wrapper.style.transform = `translate3d(${parseInt(length) - swipe} ,0,0)`
    })
    
    document.querySelector("#button-prev").addEventListener('click',function (){
        const length = wrapper.style.transform.replace('translate3d(', '').split(',')[0].replace('px', '')
        wrapper.style.transform = `translate3d(${parseInt(length) + swipe} ,0,0)`
    })
})