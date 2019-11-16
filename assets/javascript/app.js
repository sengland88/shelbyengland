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
  duration: 1500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

let projects = [
    {
        name: "PokeMasters PokeDex",
        image: "assets/images/pokedex.jpg",
        aos: "fade-right"
    },
    {
        name: "Assemble the Avengers",
        image: "assets/images/avengers.jpg",
        aos: "fade-up"
    },
    {
        name: "Save the Pokemon",
        image: "assets/images/pokemon_game.jpg",
        aos: "fade-left"
    },
    {
        name: "The Pro-Bending Championship",
        image: "assets/images/korra_RPG.jpg",
        aos: "fade-right"
    }, 
    {
        name: "Grey's Anatomy Trivia",
        image: "assets/images/greys.jpg",
        aos: "fade-up"
    }, 
    {
        name: "Train Time",
        image: "assets/images/train.jpg",
        aos: "fade-left"
    }, 
    {
        name: "TV Show Hangman Game",
        image: "assets/images/hangman_photo.jpg",
        aos: "fade-right"
    }, 
    {
        name: "The Psychic Game",
        image: "assets/images/psychic.jpg",
        aos: "fade-left"
    },

]

let portfolio = {
    "PokeMasters PokeDex" : {
        image: "assets/images/pika.jpg",
        description: "The PokeDex is a Pokemon Trainer's best resource and most important tool. It's time to go exploring.",
        skills: "HTML, CSS, Bootstrap, JavaScript, JQuery, Two APIs (PokeAPI and WeatherBit), Geolocation, Local Storage and User Validation",
        github: "https://github.com/sengland88/pokedex",
        url: "https://sengland88.github.io/pokedex/", 
        cta: "Let's Go!"

    }, 
    "Assemble the Avengers": {
        image: "assets/images/the avengers.jpg",
        description: "Help the Avengers remember who they are by loading GIFs into a special webpage built to help recover their memories.",
        skills: "HTML, CSS, Bootstrap, JavaScript, JQuery, API (GIPHY) and User Validation",
        github: "https://github.com/sengland88/GIPHY",
        url: "https://sengland88.github.io/GIPHY/",
        cta: "Save the Avengers!"
    },
    "Save the Pokemon": {
        image: "assets/images/the pokemon.png",
        description: "Team Rocket is at it again! This time, our heroes cant do it alone. They need your help!",
        skills: "HTML, CSS, Bootstrap, JavaScript and JQuery",
        github: "https://github.com/sengland88/unit-4-game",
        url: "https://sengland88.github.io/unit-4-game/",
        cta: "Save the Pokemon!"
    }, 
    "The Pro-Bending Championship": {
        image: "assets/images/the avatar.jpg",
        description: "Fight your way to the top and become the 2019 Pro-Bending Champion!",
        skills: "HTML, CSS, Bootstrap, JavaScript and JQuery",
        github: "https://github.com/sengland88/unit-4-game_RPG",
        url: "https://sengland88.github.io/unit-4-game_RPG/",
        cta: "Step into the Arena"
    },
    "Grey's Anatomy Trivia": {
        image: "assets/images/the greys.jpg",
        description: "Think you know Grey's Anatomy? Test your knowledge by taking this quiz!",
        skills: "HTML, CSS, Bootstrap, JavaScript and JQuery",
        github: "https://github.com/sengland88/TriviaGame", 
        url: "https://sengland88.github.io/TriviaGame/",
        cta: "Test Your Knowledge"
    },
    "Train Time" : {
        image: "assets/images/train tracks.jpg",
        description: "It's first day of training as the next Train Station Manager. Get to know your Train Scheduler.",
        skills: "HTML, CSS, Bootstrap, JavaScript, JQuery, Server-side Storage (Firebase)",
        github: "https://github.com/sengland88/Train-Time",
        url: "https://sengland88.github.io/Train-Time/",
        cta: "Begin Your Training"
    },
    "TV Show Hangman Game" : {
        image: "assets/images/the hangman.jpg",
        description: "We all have our favorite TV shows. Go ahead and try to guess the TV show before time runs out.",
        skills: "HTML, CSS and JavaScript",
        github: "https://github.com/sengland88/Word-Guess-Game",
        url: "https://sengland88.github.io/unit-4-game/",
        cta: "Play the Game"

    },
    "The Psychic Game" : {
        image: "assets/images/the psychic.jpg",
        description: "Consider yourself lucky or intuitive? Let's see find out. Try to guess the random letter of the alphabet.",
        skills: "HTML, CSS and JavaScript",
        github: "https://github.com/sengland88/Psychic-Game",
        url: "https://sengland88.github.io/Psychic-Game/",
        cta: "Play the Game"
    }
} // object end bracket


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



$(document).on("click", ".theProject" , function(){

    let project = $(this).attr("value")
    console.log(project)
    createModal(project)
    
})

createProjects()


function createProjects() {

    for (let i = 0; i < projects.length ; i++ ) {

        console.log(projects[i].name)

            let theDiv = $("<div>").addClass("col-sm-4 mb-4 pb-4 text-center")
                        .attr("data-aos", projects[i].aos)
            let theImage = $("<img>").addClass("img-fluid theProject")
                            .attr("alt" , "Responsive image")
                            .attr("value", projects[i].name)
                            .attr("src" , projects[i].image)
            let theName = $("<h3>").text(projects[i].name)
            let theButton = $("<button>").addClass("btn btn-outline-dark theProject buttonColor")
                            .attr("type" , "button")
                            .attr("value" , projects[i].name)
                            .text("Learn More")
            theDiv.append(theImage)
            theDiv.append(theName)
            theDiv.append(theButton)
            $("#projectsDiv").append(theDiv)
    }
    
}

function createModal(project) {

    $("#project-modal").remove()

        let modal = $("<div>").addClass("modal fade")
            .attr("id" , "project-modal")
            .attr("tabindex", "-1")
            .attr("role", "dialog")
            .attr("aria-labelledby", "exampleModalCenterTitle")
            .attr("aria-hidden", "true")
        let modalDialog = $("<div>").addClass("modal-dialog modal-dialog-centered")
            .attr("role", "document")
        let modalContent = $("<div>").addClass("modal-content")
        let modalHeader = $("<div>").addClass("modal-header theModal")
            .html(`<h5 class="modal-title" id="exampleModalLongTitle">${project}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>`)
        let modalBody = $("<div>").addClass("modal-body")

        let modalImage = $("<img>")
                        .attr("src", portfolio[project].image)
                        .addClass("img-fluid")
                        .attr("alt", "Responsive image")
                        .appendTo(modalBody)

        let modalText = $("<div>").html(`<br>${portfolio[project].description}<br><br>
                        Skilled Used: ${portfolio[project].skills}<br><br>
                        To view the code on GitHub, <a href="${portfolio[project].github}" target="blank">click here</a>. `)
                        .appendTo(modalBody)
                        
        let modalFooter = $("<div>").addClass("modal-footer theModal")
            .html(`<a href="${portfolio[project].url}" target="blank" class="btn btn-primary">${portfolio[project].cta}</a>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                               `)
        modalContent.append(modalHeader)
        modalContent.append(modalBody)
        modalContent.append(modalFooter)
        modalDialog.append(modalContent)
        modal.append(modalDialog)
        $("body").append(modal)
        $("#project-modal").modal('show')
        console.log(portfolio[project])
        console.log(portfolio[project].image)
}

// function to handle scroll
$(function(){
    $('a[href*="#"]:not([href="#"])').click(function(){
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if(target.length){
                $("html, body").animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }

        }
    })
})