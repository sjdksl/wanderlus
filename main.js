//menu animation
const menulista=document.querySelector(".navmenu");
const menu=document.querySelector(".menuicon");
const close=document.querySelector(".closeicon")
if(menu){
    menu.addEventListener("click",()=>{
        menulista.classList.add("showmenu");
    })
}
if(close){
    close.addEventListener("click",()=>{
        menulista.classList.remove("showmenu");
    })
}
//removing on clicking home etc
const navlink=document.querySelectorAll("nvalink");
const f=()=>{
    menulista.classList.remove("showmenu");
}
navlink.forEach(n=>n.addEventListener("click",f));
//adding blur to header
const scrollhead=()=>{
    const header=document.querySelector(".header");
    this.scrollY>50? header.classList.add('scroll_header'):header.classList.remove('scroll_header')
}
window.addEventListener("scroll",scrollhead);
//when to show scroll up
const scrollup=()=>{
    const scrollup=document.querySelector(".scroll_up");
    //when scoll is at height 350px
    this.scrollY>=350? scrollup.classList.add('show-scroll'):scrollup.classList.remove('show-scroll');
}
  window.addEventListener("scroll",scrollup);
  //moving in that section
    //linking home to home div footer to footer div and so on
    //window.scrollY==how much u scroll
    //windowoffsettop==how much section is away from top
    const sections=document.querySelectorAll('.section');
    const navlinks=document.querySelectorAll('.navlink');
    let currentsection='home';
    window.addEventListener('scroll',()=>{
    sections.forEach(sectionel=>{
        //changing currentsection id if in range
        if(window.scrollY>=sectionel.offsetTop){
            currentsection=sectionel.id;
        }
    });
navlinks.forEach(navlinkel=>{
    //if href vlaue match add class
    if(navlinkel.href.includes(currentsection)){
        //removing previous active link class
        document.querySelector('.active_link').classList.remove('active_link');
        navlinkel.classList.add('active_link');
    }
})
})

//scroll animation
const s=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:3000,
    delay:400,
   // reset:true, animation repeat

})
s.reveal('.homedata, .explore_data, .section_title , .footer_content, .explore_user, .join_desc,.footer_social');
s.reveal('.homecards',{delay:600, distance:'100px',interval:100});
s.reveal('.aboutdata,.join_image',{origin:'right'});
s.reveal('.about_image',{origin:'left'});
s.reveal('.popular_cards',{delay:600, distance:'100px',interval:100, origin:'bottom'});