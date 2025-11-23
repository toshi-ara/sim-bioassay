import * as elem from "./elements";


const moviesYes = [
    "001-animation.webm",
    "002-animation.webm",
    "003-animation.webm",
    "004-animation.webm",
    "005-animation.webm",
    "006-animation.webm",
    "007-animation.webm",
    "008-animation.webm",
    "009-animation.webm",
    "010-animation.webm",
];

const moviesNo = [
    "101-animation.webm",
    "102-animation.webm",
    "103-animation.webm",
    "104-animation.webm",
    "105-animation.webm",
    "106-animation.webm",
    "107-animation.webm",
    "108-animation.webm",
    "109-animation.webm",
    "110-animation.webm",
];

const playlist1 = "./movie/injection-animation.webm";
let playlist2: string;


export function playMovie(reaction: number) {
    let movies: string[];

    if (reaction == 0) {
        movies = moviesNo; // no response
    } else {
        movies = moviesYes; // toxic and/or death
    }

    const index = Math.floor(Math.random() * movies.length);
    playlist2 = "./movie/" + movies[index];

    elem.expVideo1.src = playlist1;
    elem.expVideo1.style.display = "block";
    elem.expVideo2.style.display = "none";

    // play next movie
    elem.expVideo1.addEventListener("ended", () => {
        elem.expVideo1.style.display = "none";
        elem.expVideo2.style.display = "block";
        elem.expVideo2.src = playlist2;
        elem.expVideo2.play();
    });
}

