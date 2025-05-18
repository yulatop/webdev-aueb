
  function toggleButtonHandler() {
      const navList = document.querySelector('.center-nav');
      navList.classList.toggle('active');  // Show/hide menu on mobile
  }

  //Fade in όταν σκρολάρεις
document.addEventListener('DOMContentLoaded', () => {
  const posts = document.querySelectorAll('.post, .post.small');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  posts.forEach(post => {
    observer.observe(post);
  });
});

// Modal control
const modal = document.getElementById('auth-modal');
const authBtn = document.querySelector('.auth-button');
authBtn?.addEventListener('click', e => {
  e.preventDefault();
  modal.style.display = 'flex';
});

function closeModal() {
  modal.style.display = 'none';
}

function switchTab(tab) {
  document.querySelectorAll('.tab-content').forEach(div => div.classList.add('hidden'));
  document.getElementById(tab).classList.remove('hidden');
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.tab-btn[onclick*="${tab}"]`).classList.add('active');
}

// Validation
function validateRegister() {
  const username = document.getElementById('register-username').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  const latinRegex = /^[A-Za-z0-9]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{1,10}$/;

  if (!latinRegex.test(username)) {
    alert('Username must use only Latin characters and numbers.');
    return;
  }

  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!passRegex.test(password)) {
    alert('Password must be max 10 characters, contain at least one capital letter and one number.');
    return;
  }

  alert('Registration successful!');
}

function validateLogin() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  const latinRegex = /^[A-Za-z0-9]+$/;
  const passRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{1,10}$/;

  if (!latinRegex.test(username)) {
    alert('Username must use only Latin characters and numbers.');
    return;
  }

  if (!passRegex.test(password)) {
    alert('Password must be max 10 characters, contain at least one capital letter and one number.');
    return;
  }

  alert('Login successful!');
}

// Forgot Password Modal
const forgotModal = document.getElementById('forgot-password-modal');
const forgotClose = document.getElementById('forgot-close');
const forgotForm = document.getElementById('forgot-password-form');
const forgotMessage = document.getElementById('forgot-message');

// Trigger modal from "Forgot your password?" link
document.querySelectorAll('.forgot-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    forgotModal.style.display = 'block';
  });
});

// Close modal
forgotClose.onclick = () => forgotModal.style.display = 'none';
window.onclick = (e) => {
  if (e.target === forgotModal) {
    forgotModal.style.display = 'none';
  }
};

// Validate email και δείξε το success μήνυμα
forgotForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('forgot-email').value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email)) {
    forgotMessage.classList.remove('hidden');
  } else {
    alert('Please enter a valid email address.');
  }
});

// Shrink header όταν σκρολάρεις
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 100) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});
// Mobile Auth Trigger
document.querySelectorAll('.mobile-auth a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    modal.style.display = 'flex';
  });
});

