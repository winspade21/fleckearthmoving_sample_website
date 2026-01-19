const header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    if(window.scrollY > 90){
        header.classList.add('scrolled');
    } else{
        header.classList.remove('scrolled');
    }
});

const navbar = document.querySelector('.navbar')


window.addEventListener('scroll', ()=>{
  if(window.scrollY > 90){
    navbar.classList.add('scrolled');
  } else{
    navbar.classList.remove('scrolled');
  }
});


const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = '<div></div><div></div><div></div>';
document.querySelector('.navbar').prepend(hamburger);

const navLinks = document.querySelector('nav ul');
hamburger.addEventListener('click', ()=> {
    navLinks.classList.toggle('active');
})


const dropdown = document.querySelector('.dropdown');
const dropdownLink = dropdown.querySelector('a');

dropdownLink.addEventListener('click',(e)=>{
    e.preventDefault();
    dropdown.classList.toggle('active');
})


// Scroll animation observer

const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1 
  }
);
animatedElements.forEach(el => observer.observe(el));


const reveals = document.querySelectorAll('.reveal-left, .reveal-right');

function reveal(){
  reveals.forEach(el =>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight -100){
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', reveal);
reveal();

