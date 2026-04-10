let movies = [
    {
        name: "falcon and the winter soldier",
        des: "It is the second television series in the Marvel Cinematic Universe (MCU) produced by Marvel Studios, sharing continuity with the films of the franchise, and is set six months after Sam Wilson was handed the mantle of Captain America in the film Avengers: Endgame (2019).",
        image: "./Images/slider 2.PNG"
    },
    {
        name: "Loki",
        des: "It is the second television series in the Marvel Cinematic Universe (MCU) produced by Marvel Studios, sharing continuity with the films of the franchise, and is set six months after Sam Wilson was handed the mantle of Captain America in the film Avengers: Endgame (2019).",
        image: "./Images/slider 1.PNG"
    },
    {
        name: "wanda vision",
        des: "WandaVision is an American television miniseries created by Jac Schaeffer for the streaming service Disney+, based on Marvel Comics featuring the characters Wanda Maximoff / Scarlet Witch and Vision.",
        image: "./Images/slider 3.PNG"
    },
    {
        name: "Raya and the Last Dragon",
        des: "Raya and the Last Dragon is a 2021 American computer-animated fantasy action-adventure film produced by Walt Disney Animation Studios and distributed by Walt Disney Studios Motion Pictures.",
        image: "./Images/slider 4.PNG"
    },
    {
        name: "Luca",
        des: "Set on the Italian Riviera, the film centers on Luca Paguro (Tremblay), a young sea monster boy with the ability to assume human form while on land, who explores the town of Portorosso with his new best friends, Alberto Scorfano (Grazer) and Giulia Marcovaldo (Berman), experiencing a life-changing summer adventure.",
        image: "./Images/slider 5.PNG"
    }
];

const carousel = document.querySelector('.carousel');
let sliders = [];
let slideIndex = 0; // for tracking the current slide

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    // Create DOM elements
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // Attaching all elements
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement); // Move this line after appending the content div
    carousel.appendChild(slide);

    // Setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // Setting elements classnames
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    // Populate content
    h1.appendChild(document.createTextNode(movies[slideIndex - 1].name));
    p.appendChild(document.createTextNode(movies[slideIndex - 1].des));

    sliders.push(slide);

    if (sliders.length) {
        // Using CSS transitions for smooth sliding
        sliders[0].style.transition = 'margin-left 0.5s ease-in-out';
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}

for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);




//Video Cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
        let video = item.children[1];
        video.play();
    });
    item.addEventListener("mouseend", () => {
        let video = item.children[1];
        video.pause();
    });
});

//card Sliders

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((items, i) => {
    let containerDimensions = items.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        items.scrollLeft += containerWidth - 200;
    });

    preBtns[i].addEventListener('click', () => {
        items.scrollLeft -= containerWidth + 200;
    });
});