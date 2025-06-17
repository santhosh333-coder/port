// Toggle navigation menu on small screens
const toggleBtn = document.querySelector('.toggle-btn');
const header = document.querySelector('header');

toggleBtn.addEventListener('click', () => {
  header.classList.toggle('open');
});

// Fade-in on scroll using IntersectionObserver
const fadeEls = document.querySelectorAll('.fade-in');
const options = {
  threshold: 0.3,
  rootMargin: "0px 0px -80px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}, options);

fadeEls.forEach(el => appearOnScroll.observe(el));

// Smooth scroll for internal anchors (if added)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const targetID = anchor.getAttribute('href');
    const targetEl = document.querySelector(targetID);
    if(targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Marquee pause on hover
const marquee = document.querySelector('.scroll-text');
if(marquee) {
  marquee.addEventListener('mouseover', () => marquee.stop());
  marquee.addEventListener('mouseout', () => marquee.start());
}

// Scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scrollTopBtn';
scrollTopBtn.title = 'Scroll to Top';
scrollTopBtn.innerHTML = '↑';
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if(window.scrollY > 400) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

// Simple testimonial slider (auto + manual)
// const testimonials = document.querySelectorAll('.testimonials blockquote');
// let currentTestimonial = 0;

// function showTestimonial(index) {
//   testimonials.forEach((t, i) => {
//     t.style.display = i === index ? 'block' : 'none';
//   });
// }

// function nextTestimonial() {
//   currentTestimonial = (currentTestimonial + 1) % testimonials.length;
//   showTestimonial(currentTestimonial);
// }

// // Initialize slider
// if(testimonials.length > 0) {
//   showTestimonial(currentTestimonial);
//   setInterval(nextTestimonial, 7000); // Change every 7 seconds
// }






// Testimonials slider
const testimonialSlider = document.querySelector('.testimonial-slider');
const testimonials = testimonialSlider ? testimonialSlider.querySelectorAll('blockquote') : [];
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');
let currentTestimonialIndex = 0;
let testimonialInterval;

function showTestimonial(index) {
  testimonials.forEach((block, i) => {
    block.classList.toggle('appear', i === index);
  });
}

function nextTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  showTestimonial(currentTestimonialIndex);
}

function prevTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonialIndex);
}

if (testimonials.length > 0) {
  showTestimonial(currentTestimonialIndex);

  // Auto-slide every 8 seconds
  testimonialInterval = setInterval(nextTestimonial, 3000);

  // Manual controls
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextTestimonial();
      resetInterval();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevTestimonial();
      resetInterval();
    });
  }
}

function resetInterval() {
  clearInterval(testimonialInterval);
  testimonialInterval = setInterval(nextTestimonial, 8000);
}



type();
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#name').classList.add('visible');
    document.querySelector('#role').classList.add('visible');
  });