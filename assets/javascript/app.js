$("#contactMe").hide()
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
        name: "unWrapped",
        image: "assets/images/unwrapped.jpg",
        aos: "fade-right"
    },
    {
        name: "PokeMasters PokeDex",
        image: "assets/images/pokedex.jpg",
        aos: "fade-up"
    },
    {
        name: "Assemble the Avengers",
        image: "assets/images/avengers.jpg",
        aos: "fade-left"
    },
    {
        name: "LIRI",
        image: "assets/images/liri.jpg",
        aos: "fade-right"
    },
    {
        name: "Save the Pokemon",
        image: "assets/images/pokemon_game.jpg",
        aos: "fade-up"
    }, 
    {
        name: "Grey's Anatomy Trivia",
        image: "assets/images/greys.jpg",
        aos: "fade-left"
    }, 
    {
        name: "Train Time",
        image: "assets/images/train.jpg",
        aos: "fade-right"
    }, 
    // {
    //     name: "TV Show Hangman Game",
    //     image: "assets/images/hangman_photo.jpg",
    //     aos: "fade-right"
    // }, 
    // {
    //     name: "The Psychic Game",
    //     image: "assets/images/psychic.jpg",
    //     aos: "fade-up"
    // },
    {
        name: "The Pro-Bending Championship",
        image: "assets/images/korra_RPG.jpg",
        aos: "fade-up"
    },
    {
        name: "TvMaze",
        image: "assets/images/tvmaze.jpg",
        aos: "fade-left"
    },
    {
        name: "Bamazon",
        image: "assets/images/bamazon.jpg",
        aos: "fade-right"
    },
    {
        name: "Magnet - A Dating App",
        image: "assets/images/magnet.jpg",
        aos: "fade-up"
    },
    {
        name: "King Burger",
        image: "assets/images/kingburger.jpg",
        aos: "fade-left"
    }
]

let technicalSKills = [
    {
        name: "HTML",
        image: "assets/images/html5.png",
        aos: "fade-right"
    },    
    {
        name: "CSS",
        image: "assets/images/css3.png",
        aos: "fade-up"
    },    
    {
        name: "Bootstrap",
        image: "assets/images/bootstrap.png",
        aos: "fade-left"
    },    
    {
        name: "JavaScript",
        image: "assets/images/js.png",
        aos: "fade-right"
    },    
    {
        name: "jQuery",
        image: "assets/images/jquery.png",
        aos: "fade-up"
    },    
    {
        name: "Node.js",
        image: "assets/images/nodejs.png",
        aos: "fade-left"
    },    
    {
        name: "Express",
        image: "assets/images/express.png",
        aos: "fade-right"
    },    
    {
        name: "Express-Handlebars",
        image: "assets/images/handlebars.png",
        aos: "fade-up"
    },    
    {
        name: "MySQL",
        image: "assets/images/mysql.png",
        aos: "fade-left"
    },    
    {
        name: "MongoDB",
        image: "assets/images/mongo.png",
        aos: "fade-right"
    },
    {
        name: "React.js",
        image: "assets/images/react.png",
        aos: "fade-left"
    }
]


let portfolio = {
    "unWrapped" : {
        image: "assets/images/unwrapped2.jpg",
        description: "As a party planning application, unWrapped helps users stay organized before, during and after a celebration.",
        skills: "HTML, CSS, Bootstrap, JavaScript, JQuery, MySQL, Sequelize, Randomatic, Express.js, Express-Handlebars, PDFKit, ",
        github: "http://bit.ly/30WarKh",
        url: "http://bit.ly/3aqd0by", 
        cta: "Start Planning"

    },
    "PokeMasters PokeDex" : {
        image: "assets/images/pika.jpg",
        description: "The PokeDex is a Pokemon Trainer's best resource and most important tool. It's time to go exploring.",
        skills: "HTML, CSS, Bootstrap, JavaScript, JQuery, Two APIs (PokeAPI and WeatherBit), Geolocation, Local Storage and User Validation",
        github: "http://bit.ly/35utpYW",
        url: "http://bit.ly/36vidwn", 
        cta: "Let's Go!"

    }, 
    "Assemble the Avengers": {
        image: "assets/images/the avengers.jpg",
        description: "Help the Avengers remember who they are by loading GIFs into a special webpage built to help recover their memories.",
        skills: "HTML, CSS, Bootstrap, JavaScript, JQuery, API (GIPHY) and User Validation",
        github: "http://bit.ly/35szxRp",
        url: "http://bit.ly/2FmSvhR",
        cta: "Save the Avengers!"
    },
    "Save the Pokemon": {
        image: "assets/images/the pokemon.png",
        description: "Team Rocket is at it again! This time, our heroes cant do it alone. They need your help!",
        skills: "HTML, CSS, Bootstrap, JavaScript and JQuery",
        github: "http://bit.ly/2twl9KP",
        url: "http://bit.ly/39Kn52Y",
        cta: "Save the Pokemon!"
    }, 
    "The Pro-Bending Championship": {
        image: "assets/images/the avatar.jpg",
        description: "Fight your way to the top and become the 2019 Pro-Bending Champion!",
        skills: "HTML, CSS, Bootstrap, JavaScript and JQuery",
        github: "http://bit.ly/36sybri",
        url: "http://bit.ly/2ZUhi6a",
        cta: "Step into the Arena"
    },
    "Grey's Anatomy Trivia": {
        image: "assets/images/the greys.jpg",
        description: "Think you know Grey's Anatomy? Test your knowledge by taking this quiz!",
        skills: "HTML, CSS, Bootstrap, JavaScript and JQuery",
        github: "http://bit.ly/35zZBu8", 
        url: "http://bit.ly/35vCtwF",
        cta: "Test Your Knowledge"
    },
    "Train Time" : {
        image: "assets/images/train tracks.jpg",
        description: "It's first day of training as the next Train Station Manager. Get to know your Train Scheduler.",
        skills: "HTML, CSS, Bootstrap, JavaScript, JQuery, Server-side Storage (Firebase)",
        github: "http://bit.ly/39NDzqP",
        url: "http://bit.ly/36w0x3V",
        cta: "Begin Your Training"
    },
    // "TV Show Hangman Game" : {
    //     image: "assets/images/the hangman.jpg",
    //     description: "We all have our favorite TV shows. Go ahead and try to guess the TV show before time runs out.",
    //     skills: "HTML, CSS and JavaScript",
    //     github: "https://github.com/sengland88/Word-Guess-Game",
    //     url: "https://sengland88.github.io/Word-Guess-Game/",
    //     cta: "Play the Game"
    // },
    // "The Psychic Game" : {
    //     image: "assets/images/the psychic.jpg",
    //     description: "Consider yourself lucky or intuitive? Let's see find out. Try to guess the random letter of the alphabet.",
    //     skills: "HTML, CSS and JavaScript",
    //     github: "https://github.com/sengland88/Psychic-Game",
    //     url: "https://sengland88.github.io/Psychic-Game/",
    //     cta: "Play the Game"
    // },
    "LIRI" : {
        image: "assets/images/liri-bot.jpg",
        description: "A node.js application, LIRI will retrieve information on concerts, songs and movies.",
        skills: "node.js",
        github: "http://bit.ly/2FmINfo",
        url: "http://bit.ly/2ZWQP87",
        cta: "View the Demos"
    },
    "TvMaze" :{
        image: "assets/images/tv.png",
        description: "A node.js application that will retrieve actor or show information per user's request.",
        skills: "node.js",
        github: "http://bit.ly/2T0xyBc",
        url: "http://bit.ly/35t7d1e",
        cta: "View the Demos"
    },
    "Bamazon" :{
        image: "assets/images/bamazon.png",
        description: "A node.js application that utilizes MySQL to allow customers and managers to access products.",
        skills: "node.js, MySQL",
        github: "http://bit.ly/39KnSks",
        url: "http://bit.ly/39HinTh",
        cta: "View the Demos"
    },
    "Magnet - A Dating App" :{
        image: "assets/images/dating.jpg",
        description: "A node.js and express application that matches users with their ideal mate. This app is deployed to Heroku.",
        skills: "node.js, express",
        github: "http://bit.ly/2QuG2PC",
        url: "http://bit.ly/2MZeHCE",
        cta: "Find Your Mate"
    },
    "King Burger" :{
        image: "assets/images/bonquiqui.jpg",
        description: "A node.js app that utilizes express, express-handlebars and MySQL to produce a selection of burgers via user input. This app is deployed to Heroku.",
        skills: "node.js, express, express-handlers, MySQL",
        github: "http://bit.ly/2sJ9sjX",
        url: "http://bit.ly/2sGJGg9",
        cta: "Eat at King Burger"
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
    createModal(project)
    
})

$("#contactBtn").on("click", function(){
    $("#aboutMe").hide()
    $("#contactMe").show()    
})


createSkills()
createProjects()


function createSkills() {

    for (let i = 0; i < technicalSKills.length ; i++ ) {

            let theDiv = $("<div>").addClass("col-sm-4 mb-4 pb-4 text-center")
                        .attr("data-aos", technicalSKills[i].aos)
            let theImage = $("<img>").addClass("img-fluid theProject")
                            .attr("alt" , "Responsive image")
                            .attr("value", technicalSKills[i].name)
                            .attr("src" , technicalSKills[i].image)
            let theName = $("<h3>").text(technicalSKills[i].name)
            theDiv.append(theImage)
            theDiv.append(theName)
            $("#skillsDiv").append(theDiv)
    }
    
}

function createProjects() {

    for (let i = 0; i < projects.length ; i++ ) {

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
                        Skill(s) Used: ${portfolio[project].skills}<br><br>
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
