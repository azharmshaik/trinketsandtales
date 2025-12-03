document.addEventListener('DOMContentLoaded', function(){
  // footer year update
  const yrs = document.querySelectorAll('#year, #year2, #year3, #year4');
  yrs.forEach(el => { if(el) el.textContent = new Date().getFullYear(); });

  // mobile menu toggle
  const btn = document.getElementById('mobileMenuBtn');
  const btn2 = document.getElementById('mobileMenuBtn2');
  const menu = document.getElementById('mobileMenu');
  [btn, btn2].forEach(b=>{
    if(!b) return;
    b.addEventListener('click', ()=>menu.classList.toggle('hidden'));
  });

  // swiper
  if(typeof Swiper !== 'undefined'){
    new Swiper('.heroSwiper', {loop:true, autoplay:{delay:5000}, pagination:{el:'.swiper-pagination', clickable:true}});
  }
});
