

//get navigation links from the page
const navLinks = document.querySelector(".mobileLinks");

const burgerMenuBtn = document.querySelector(".burger");


burgerMenuBtn.addEventListener("click", () =>{
  navLinks.classList.toggle("show");
})




// handler for the CV download button
function downloadPdf() {
  const pdfUrl = 'assets/pdfs/Resume_Francis_Ssemwanga.pdf';
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'Resume_Francis_ssemwanga.pdf';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

//skills group accordion
//get all skills group elements
const skillGroups = document.querySelectorAll('#skills-section .skill-group')

//loop through each skills group element
skillGroups.forEach((skillGroup) =>{
  //get the heading element of the skills group
  const heading = skillGroup.querySelector('h3');
  //add the event listener to the heading
  heading.addEventListener('click', () =>{
    //toggle visibility
    skillGroup.classList.toggle('active')
  })
})