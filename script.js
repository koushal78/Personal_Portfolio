const dynamicText = document.querySelector("h1 span")
const words = ["Web developer","Coder","Programmer","Freelancer"];

var num;
const myskills = document.querySelector('.myskills')
const skills = document.getElementsByClassName('skills')

let home = document.getElementById("Home")
let height = window.innerHeight
console.log(height)

const navbar = document.querySelector("nav")

document.addEventListener('scroll',()=>{
    if(window.scrollY>height){
        navbar.classList.add("nav-color")
    }
    else{
        navbar.classList.remove("nav-color")
    }


}) 

let wordIndex = 0;
let CharIndex = 0;
let isdeleting = false;

const typeEffect = () => {
const cuurentword = words[wordIndex];
const currentChar = cuurentword.substring(0,CharIndex);
dynamicText.textContent = currentChar;
dynamicText.classList.add("stop-blinking");

if(!isdeleting && CharIndex < cuurentword.length){
    CharIndex++;
    setTimeout(typeEffect,100)
}
else if(isdeleting &&CharIndex >0){
    CharIndex--;
    setTimeout(typeEffect,100);
}
else {
    isdeleting = !isdeleting;
    dynamicText.classList.remove("stop-blinking");
    wordIndex = !isdeleting?(wordIndex+1)% words.length:wordIndex;
    setTimeout(typeEffect,1200);
}
}
typeEffect();

var arr= document.querySelectorAll(".mybar")  
var skilsValue = document.querySelectorAll(".value")
var arrValue = Array.from(skilsValue)


const arrelement = Array.from(arr)

function move(num, elements,n){
    var i = 0;

    if(i == 0){
        i = 1;
       
        var elem = elements[n];
       
        
        var width = 1;
        var id = setInterval(frame ,10)
        function frame(){
            if(width>=num){

                clearInterval(id);
                i = 0;
            }
            else{
                width++;
                arrValue.textContent = width;
                elem.style.width = width + "%";
            }
        }
        
    }
}


ScrollReveal({
    distance: '60px',
    delay:0, // it is time before animation start
    reset:true,
    duration:1000,
    viewFactor:0.15 // the element revel after element reach 15% on the viewport on screen

})
ScrollReveal().reveal('.quali-info',{ origin:'top',interval: 300 });
ScrollReveal().reveal('.animation',{ origin:'top'});
ScrollReveal().reveal('.main-about,.animation-left',{ origin:'left' });
ScrollReveal().reveal('.main-image,.animation-right',{ origin:'Right' });
ScrollReveal().reveal('.icon-animation',{origin:'top',interval:200})
ScrollReveal().reveal('.content-left',{origin:'left'})
ScrollReveal().reveal('.content-right',{origin:'right'})
// { afterReveal: function () {} }
// let Option ={
//     threshold: 1.0,
// }
const observer = new IntersectionObserver(function(entries){
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            move(90,arrelement,0);
            move(85,arrelement,1);
            move(60,arrelement,2);
            move(30,arrelement,3);
            move(20,arrelement,4);
            move(10,arrelement,5);
            
        }
        else{
         
            
        }
      })
    })
    
    const target = document.querySelector('#special')
    observer.observe(target)
  
    function sendemail(){
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "kushwahakoushal78@gmail.com",
            Password : "7638F6955951ABFE7AA3F97C6CAA696F6433",
            To : "koushalkumar782751@gmail.com",
            From :"kushwahakoushal78@gmail.com",
            Subject : "portfolio email",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
    }
    function navhide(){
        let active = document.getElementById("hidenav")
          active.classList.toggle("active")
    }