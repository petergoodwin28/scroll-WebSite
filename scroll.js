$(document).ready(function(){

    /*  
    Init ScrollMagic - tells browser to use scroll bar to
    trigger animation
    */
    var controller = new ScrollMagic.Controller();

    /* Build  a scene - Scene houses animation */ 
    var myScene = new ScrollMagic.Scene({
        triggerElement: '#slide2'
    })
    .setClassToggle('#slide2', 'fade-in')
    .addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
        indent: 200,
        colorStart: 'orange'
    })
    .addTo(controller);

});