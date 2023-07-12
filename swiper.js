window.addEventListener("load", function (){
    const wrapper = document.querySelector("#swiper-wrapper")
    const swipe = 799

    document.querySelector("#button-next").addEventListener('click',function (){
        document.querySelectorAll(".swiper-slide").forEach(slide =>{
            const length = slide.style.transform.replace('translate3d(', '').split(',')[0].replace('px', '')
            slide.style.transform = `translate3d(${parseInt(length) - swipe}px ,0,0)`
        })
        const length = wrapper.style.transform.replace('translate3d(', '').split(',')[0].replace('px', '')
        wrapper.style.transform = `translate3d(${parseInt(length) - swipe}px ,0,0)`
    })
    
    document.querySelector("#button-prev").addEventListener('click',function (){
        document.querySelectorAll(".swiper-slide").forEach(slide =>{
            const length = slide.style.transform.replace('translate3d(', '').split(',')[0].replace('px', '')
            slide.style.transform = `translate3d(${parseInt(length) + swipe}px ,0,0)`
        })
        const length = wrapper.style.transform.replace('translate3d(', '').split(',')[0].replace('px', '')
        wrapper.style.transform = `translate3d(${parseInt(length) + swipe}px ,0,0)`
    })
})
