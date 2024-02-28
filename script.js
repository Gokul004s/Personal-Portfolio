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
