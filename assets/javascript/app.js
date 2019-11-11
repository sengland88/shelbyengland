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

let portfolio = [
    {
        name: "PokeMasters PokeDex",
        image: "assets/images/pika.jpg",
        description: "The PokeDex is a Pokemon Trainer's best resource and most important tool. It's time to go exploring.",
        github: "https://github.com/sengland88/pokedex",
        url: "https://sengland88.github.io/pokedex/"
    }, 
    {
        name: "Assemble the Avengers",
        image: "assets/images/the avengers.jpg",
        description: "Help the Avengers remember who they are by loading GIFs into a special webpage built to help recover their memories.", 
        github: "https://github.com/sengland88/GIPHY",
        url: "https://sengland88.github.io/GIPHY/"
    },
    {
        name: "Save the Pokemon!",
        image: "assets/images/the pokemon.png",
        description: "Team Rocket is at it again! This time, our heroes cant do it alone. They need your help!",
        github: "https://github.com/sengland88/unit-4-game",
        url: "https://sengland88.github.io/unit-4-game/"
    },
    {
        name: "The Pro-Bending Championship",
        image: "assets/images/the avatar.jpg",
        description: "Fight your way to the top and become the 2019 Pro-Bending Champion!",
        github: "https://github.com/sengland88/unit-4-game_RPG",
        url: "https://sengland88.github.io/unit-4-game_RPG/"
    },
    {
        name: "Grey's Anatomy — A Trivia Game!",
        image: "assets/images/the greys.jpg",
        description: "Think you know Grey's Anatomy? Test your knowledge by taking this quiz!",
        github: "https://github.com/sengland88/TriviaGame", 
        url: "https://sengland88.github.io/TriviaGame/"
    },
    {
        name: "Train Time",
        image: "assets/images/train tracks.jpg",
        description: "It's first day of training as the next Train Station Manager. Get to know your Train Scheduler.",
        github: "https://github.com/sengland88/Train-Time",
        url: "https://sengland88.github.io/Train-Time/"
    },
    {
        name: "TV Show Hangman Game",
        image: "assets/images/the hangman.jpg",
        description: "We all have our favorite TV shows. Go ahead and try to guess the TV show before time runs out.",
        github: "https://github.com/sengland88/Word-Guess-Game",
        url: "https://sengland88.github.io/unit-4-game/"
    },
    {
        name: "The Psychic Game",
        image: "assets/images/the psychic.jpg",
        description: "Consider yourself lucky or intuitive? Let's see find out. Try to guess the random letter of the alphabet.",
        github: "https://github.com/sengland88/Psychic-Game",
        url: "https://sengland88.github.io/Psychic-Game/"
    }
]

for (let i = 0 ; i < portfolio.length ; i++ ) {
    console.log(portfolio[i])
}

// index on click functions

$(".strengths").on("click", function() {    
    $(".my-modal").modal('show')
})

$(".stand").on("click", function() {
    $(".standOut").modal('show')
})

$(".sight").on("click", function() {
    $(".fourSight").modal('show')
})


// portfolio on click functions

$(".theProject").on("click", function() {
    
    let project = $(this).attr("value")
    console.log(project)
    createModal(project)
})

$(".avengers").on("click", function() {

})

$(".pokemon").on("click", function() {

})

$(".korra").on("click", function() {

})

$(".greys").on("click", function() {

})

$(".train").on("click", function() {

})

$(".hangman").on("click", function() {

})

$(".psychic").on("click", function() {

})


function createModal(project) {

     for (let i = 0; i < portfolio.length; i++) {
        let modal = $("<div>").addClass("modal fade")
            .attr("id" , `${project}`)
            .attr("tabindex", "-1")
            .attr("role", "dialog")
            .attr("aria-labelledby", "exampleModalCenterTitle")
            .attr("aria-hidden", "true")
        let modalDialog = $("<div>").addClass("modal-dialog modal-dialog-centered")
            .attr("role", "document")
        let modalContent = $("<div>").addClass("modal-content")
        let modalHeader = $("<div>").addClass("modal-header")
            .html(`<h5 class="modal-title" id="exampleModalLongTitle"></h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>`)
        let modalBody = $("<div>").addClass("modal-body")
        let modalFooter = $("<div>").addClass("modal-footer")
            .html(`<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary"`)
        modalContent.append(modalHeader)
        modalContent.append(modalBody)
        modalContent.append(modalFooter)
        modalDialog.append(modalContent)
        modal.append(modalDialog)
        $(".myProjects").append(modal)
        $("body").modal('show')
        console.log("this is the end")
    }
}