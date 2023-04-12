

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