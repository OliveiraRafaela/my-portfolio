// Function to format the footer message. 
function setFooterMsg() {
  let now = new Date;  
  const footerMsg = ' '+now.getFullYear()+ ' Rafaela Oliveira';
  document.getElementById('footer').textContent = footerMsg;
  }

 setFooterMsg();


/***********************************************************/
// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('menu');

hamburger.addEventListener('click', () => {  
  navMenu.classList.toggle('active');
  console.log(navMenu);
});



