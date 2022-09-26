 // MOBILE 

 var hamburger= document.querySelectorAll(".hamburger");
 var navlist= document.querySelectorALL(".nav-list");

 hamburger.addEventListener("click",()=>{
      this.classList.add("click");
     // navlist.classList.toggle("open"); 
     
 });






















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
/*


//ABOUT
const firstTitle=document.querySelector(".firstTitle");
const aboutMe=document.querySelector(".aboutMe");

TL1
.from(firstTitle,1,{opacity:1,x:2000})
TL1
.from(aboutMe,1,{opacity:0,x:2000}, '-=0.4')

TL1
.from(presentation,1,{opacity:0,x:1000})

//SOCIAL NET

const btnSocial= document.querySelectorAll(".button");



const presentationIndex= document.querySelector("#presentationIndex");
const profilIndex= document.querySelector("#profilIndex")



TL1
.from(presentationIndex,1,{opacity:0,x:-100});
TL1
.from(profilIndex,1,{opacity:1,x:-2000}, '-=0.9');

//FOR CONTACT

const mainContact= document.querySelector(".mainContact");

TL1
.from(mainContact,1,{opacity:1,x:100+"%"}, '-=1');

/*NAVIGATION */
/*const navigation =document.querySelector(".navigation");

TL1
.from(navigation,4,{opacity:0,x:1000})*/



//ANIMATION GREENSOCK
//Declaration









    const TL1=new TimelineMax({paused:false});
//HEADER
    const header= document.querySelector(".header");
//HOME CONTAINER
    const homeAnime= document.querySelectorAll(".homeAnime");
        TL1.from(homeAnime,1,{opacity:0,x:300},);

//SOCIAL
const social= document.querySelector(".social");
    TL1.from(social,1,{opacity:0,x:-100},);


  // TL1.from(header,1,{opacity:0,x:-100},);
//Menu
const menu=document.querySelectorAll(".menu");
    TL1.staggerFrom(menu,1.5,{scale:0}, '-=0.9')





















//const presentation=document.querySelector(".presentation")
//const infos=document.querySelector(".infos")

   // TL1.from(presentation,1,{opacity:0,x:-100},)

//H1 ACCEUIL



//    TL1.from(".presentation", 1, {opacity:0, x:100+'%'})
//    .from($(".infos"), 1, {opacity:3, x:100+'%'})
// //H1 ABOUT
//  const profil=document.querySelector(".profilImg");
//     TL1.from("profil", 1, {scale:0})
//  //Photo
//  const profilIndex= document.querySelector("#profilIndex")

//      TL1
//     .from(presentationIndex,1,{opacity:0,x:-100});
//     TL1
//     .from(profilIndex,1,{opacity:0,x:2000}, '-=0.9');
 

    // BIBLIOTHEQUE TYPED JS

   