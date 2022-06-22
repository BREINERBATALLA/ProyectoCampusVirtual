window.swiper= new Swiper({

    el:'.slider__contenedor', //clase contenedora de los sliders
    slideClass: 'slider__slide', //clase de los slides
    createElements:true, //genera el código html
    autoplay:{
        delay:5000
    },
    loop:true,
    pagination:true,
    navigation:true

});