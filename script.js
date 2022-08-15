let insta = document.getElementById("instagram");
let backInsta = document.getElementById("backInsta");

console.log(backInsta);

insta.addEventListener("mouseover",function () {
    backInsta.classList.add("pink");
});
insta.addEventListener("mouseout",function () {
    backInsta.classList.remove("pink");
})

//YOUTUB
let youtub = document.getElementById("youtub");
let backYoutub = document.getElementById("backYoutub");

youtub.addEventListener("mouseover",()=>{
    backYoutub.classList.add("red");
});

youtub.addEventListener("mouseout",()=>{
    backYoutub.classList.remove("red");
});

//YOUTUB
let twiter = document.getElementById("twitter");
let backTwitter = document.getElementById("backTwitter");

twiter.addEventListener("mouseover",()=>{
    backTwitter.classList.add("blueTwit");
});

twiter.addEventListener("mouseout",()=>{
    backTwitter.classList.remove("blueTwit");
})

//FACEBOOK
let facebook = document.getElementById("facebook");
let backFacebook = document.getElementById("backFacebook");

facebook.addEventListener("mouseover",()=>{
    backFacebook.classList.add("blueFace");
});

facebook.addEventListener("mouseout",()=>{
    backFacebook.classList.remove("blueFace");
});

//GIT
let git = document.getElementById("git");
let backGit = document.getElementById("backGit");

git.addEventListener("mouseover",()=>{
    backGit.classList.add("grey");
});

git.addEventListener("mouseout",()=>{
    backGit.classList.remove("grey");
})