var togglebtn=document.querySelector(".togglebtn");
var nav=document.querySelector(".navlinks");
var links=document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

var typed=new Typed(".input",{
    strings:["Frontend Developer","Web Developer"],
    typedSpeed:50,
    backSpeed:50,
    loop:true
})

window.addEventListener("scroll",function()
{
    var header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0 )
})
function showSidebar(){
    const sidebar=document.querySelector('.side-bar')
    sidebar.style.display='flex'
    
    const navitems=document.querySelector('.navlink')
    navitems.style.display='none'
}

function hideSidebar(){
    const hidebar=document.querySelector('.side-bar')
    hidebar.style.display='none'
    const navitems=document.querySelector('.navlink')
    navitems.style.display='flex'
}
