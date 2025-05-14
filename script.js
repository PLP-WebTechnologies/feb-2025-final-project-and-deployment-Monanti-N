// Image slider on homepage
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('sliderImage');
  const images = ['images/banner.jpg', 'images/banner2.jpg', 'images/banner3.jpg'];
  let index = 0;

  if (slider) {
    setInterval(() => {
      index = (index + 1) % images.length;
      slider.src = images[index];
    }, 3000);
  }

  // Form validation
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value.trim();

      if (!name || !email.includes('@') || !message) {
        e.preventDefault();
        alert('Please fill out all fields correctly.');
      }
    });
  }
});
