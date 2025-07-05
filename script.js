const toTop = document.querySelector('.to-top');

if (toTop) {
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      toTop.classList.add('active');
    } else {
      toTop.classList.remove('active');
    }
  });

  toTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
} else {
  console.error("Error: .to-top button not found!");
}