//get all sections
const sections= document.querySelectorAll('main section')

//get navigation links from the page
const navLinks = document.querySelector(".mobLinks");

function toggleNav() {
  navLinks.classList.toggle("show");
}

//setting active links:
function setActiveLink() {
  // Get the current scroll position
  const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

  // Loop through each section to check if it's in view
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (currentScrollPos >= sectionTop && currentScrollPos <= sectionBottom) {
      // Get the corresponding link
      const link = document.querySelector(`nav ul li a[href="#${section.id}"]`);

      // Remove the active class from all links
      navLinks.querySelectorAll("a").forEach((navLink) => {
        navLink.classList.remove("active");
      });

      // Add the active class to the current link
      link.classList.add("active");
    }
  });
}

// Call setActiveLink function when the page is loaded and when it's scrolled
window.addEventListener("load", setActiveLink);
window.addEventListener("scroll", setActiveLink);

//add event listener to toggle navigation menu
const burger = document.querySelector('.burger');
burger.addEventListener('click', toggleNav);

//setting the active link attribute
let activeLink = document.querySelector('nav ul li a.active');

//add event listener to each link
const navlinks = document.querySelectorAll('nav ul li a')
navlinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // prevent default anchor behaviour
    //get id of the target section
    const targetId = link.getAttribute('href');

    //Hide all sections
    sections.forEach(section => {
      section.style.display = 'none';
    });
    //show target section
    const targetSection = document.querySelector(targetId);
    targetSection.style.display = 'flex';

    //scroll to the target section
    targetSection.scrollIntoView({
      behaviour: 'smooth'
    });
    //remove active class from currently active link
    activeLink.classList.remove('active');

    //set active class to clicked link
    link.classList.add('active');

    //set active link to clicked link
    activeLink = link;
  });
});

//add functionality for the eport button
// Scroll to the about section when the "Learn More" link is clicked
const learnMoreLink = document.querySelector('.eport a');
learnMoreLink.addEventListener('click', e => {
  e.preventDefault(); // prevent default anchor behaviour
  const targetSection = document.querySelector('#about-section');
  targetSection.scrollIntoView({
    behavior: 'smooth'
  });
});