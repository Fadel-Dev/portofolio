let insta = document.getElementById("instagram");
let backInsta = document.getElementById("backInsta");

console.log(backInsta);

insta.addEventListener("mouseover", function () {
    backInsta.classList.add("pink");
});
insta.addEventListener("mouseout", function () {
    backInsta.classList.remove("pink");
})

//YOUTUB
let youtub = document.getElementById("youtub");
let backYoutub = document.getElementById("backYoutub");

youtub.addEventListener("mouseover", () => {
    backYoutub.classList.add("red");
});

youtub.addEventListener("mouseout", () => {
    backYoutub.classList.remove("red");
});

//YOUTUB
let twiter = document.getElementById("twitter");
let backTwitter = document.getElementById("backTwitter");

twiter.addEventListener("mouseover", () => {
    backTwitter.classList.add("blueTwit");
});

twiter.addEventListener("mouseout", () => {
    backTwitter.classList.remove("blueTwit");
})

//FACEBOOK
let facebook = document.getElementById("facebook");
let backFacebook = document.getElementById("backFacebook");

facebook.addEventListener("mouseover", () => {
    backFacebook.classList.add("blueFace");
});

facebook.addEventListener("mouseout", () => {
    backFacebook.classList.remove("blueFace");
});

//GIT
let git = document.getElementById("git");
let backGit = document.getElementById("backGit");

git.addEventListener("mouseover", () => {
    backGit.classList.add("grey");
});

git.addEventListener("mouseout", () => {
    backGit.classList.remove("grey");
})

const TL1 = new TimelineMax({ paused: false });
//HEADER
const header = document.querySelector(".header");
//HOME CONTAINER
const homeAnime = document.querySelectorAll(".homeAnime");
TL1.from(homeAnime, 1, { opacity: 0, x: 300 },);

//SOCIAL
const social = document.querySelector(".social");
TL1.from(social, 1, { opacity: 0, x: -100 },);


// TL1.from(header,1,{opacity:0,x:-100},);
//Menu
const menu = document.querySelectorAll(".menu");
TL1.staggerFrom(menu, 1.5, { scale: 0 }, '-=0.9')


var hamburger = document.querySelector(".hamburger");
var navlist = document.querySelector(".nav-list");
var menuImg = document.querySelector(".menuImg");

hamburger.addEventListener("click", function () {
    navlist.classList.toggle("click");
    var mySrc = document.querySelector(".menuImg");
    changeImage();

});



function changeImage() {
    if (menuImg.src.match("./images/menu-icon-x.svg")) {
        menuImg.src = "./images/menu-icon.svg";
    } else {
        menuImg.src = "./images/menu-icon-x.svg"
    }

}
