var swiper = new Swiper(".mySwiper", {
 
  loop:true,
  pagination: {
    el: '.swiper-pagination',
      clickable:true,
  },
    autoplay: {
    delay: 3500,
    
  },
    
});
let nav=document.querySelector('.navbar');
window.onscroll=function(){
    if(document.documentElement.scrollTop>50){
        nav.classList.add('header-scrolled');
    }else{
        nav.classList.remove('header-scrolled');
    }
}
//navBar
let navBar=document.querySelectorAll('.nav-link');
let navCollapse=document.querySelectorAll('.navbar-collapse .collapse');
navBar.forEach(function(a){
    a.addEventListener('click',function(){
        navCollapse.classList.remove('show');
    });
});
document.addEventListener('DOMContentLoaded',()=>{
    function counter(id,start,end,duration){
        let obj=document.getElementById(id),
            current =start,
            range=end-start,
            increment=end>start ?1 :-1,
            step=Math.abs(Math.floor(duration/range)),
            timer=setInterval(()=>{
                current+=increment;
                obj.textContent=current;
                if(current == end){
                    clearInterval(timer);
                }
            },step);
    }
    counter("count1",0,1284,3000);
    counter("count2",0,1284,3000);
    counter("count3",0,1284,3000);
    counter("count4",0,1284,3000);
})
