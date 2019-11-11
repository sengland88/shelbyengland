AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// index on click functions

$(".strengths").on("click", function() {
    $(".strengthsFinder").modal('show')
})

$(".stand").on("click", function() {
    $(".standOut").modal('show')
})

$(".sight").on("click", function() {
    $(".fourSight").modal('show')
})

// portfolio on click functions

$(".pokeDex").on("click", function() {
    console.log("this works")
    $(".thePokeDex").modal('show')
})

$(".avengers").on("click", function() {
    console.log("this works")
    $(".theAvengers").modal('show')
})

$(".pokemon").on("click", function() {
    console.log("this works")
    $(".thePokemon").modal('show')
})

$(".korra").on("click", function() {
    console.log("this works")
    $(".theKorra").modal('show')
})

$(".greys").on("click", function() {
    console.log("this works")
    $(".theGreys").modal('show')
})

$(".train").on("click", function() {
    console.log("this works")
    $(".theTrain").modal('show')
})

$(".hangman").on("click", function() {
    console.log("this works")
    $(".theHangman").modal('show')
})

$(".psychic").on("click", function() {
    console.log("this works")
    $(".thePsychic").modal('show')
})
