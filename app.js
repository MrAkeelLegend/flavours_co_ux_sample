const tl = gsap.timeline({
  default: {
    ease: 'power1.out'
  }
});

tl.to('.text', {
  y: '0%',
  duration: 1,
  stagger: 0.25
});

tl.to('.slider', {
  y: "-100%",
  duration: 1.5,
  delay: 1
});

tl.to('.intro', {
  y: "-100%",
  duration: 1
}, "-=1.1");

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
    console.log(link.innerHTML);
  });
});