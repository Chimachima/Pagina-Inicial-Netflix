$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:6
        },
        1000:{
            items:7
        }
    }
})

function newHeader(){
    let titleBar = document.getElementsByTagName("header")[0]
    if (window.pageYOffset >200){
        titleBar.style.backgroundColor = "black"
        titleBar.style.transition = "all 0.5s"
    }
    if(window.pageYOffset <200){
        titleBar.style.backgroundColor = "rgba(255,255,255,0)"
    }
}

document.addEventListener("scroll", newHeader);

