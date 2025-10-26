// Menu mobile toggles
document.querySelectorAll('.menu-toggle').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const nav = document.getElementById('nav-links') || document.querySelector('nav');
    if(nav) nav.classList.toggle('show');
  });
});

// Intersection Observer for fade-in
document.addEventListener('DOMContentLoaded', function(){
  const faders = document.querySelectorAll('.fade-in');
  const obs = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.2});
  faders.forEach(f => obs.observe(f));
});
