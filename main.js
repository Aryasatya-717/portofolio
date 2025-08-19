// Animasi fade-in saat scroll
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in-up");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});

// Tambahkan animasi Tailwind kustom
tailwind.config = {
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      }
    }
  }
};

// Smooth scroll animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('opacity-100', 'translate-y-0');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  fader.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
  appearOnScroll.observe(fader);
});

// Deteksi elemen fade-section
const fadeSections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2 // mulai animasi ketika 20% elemen terlihat
});

fadeSections.forEach((section) => {
  observer.observe(section);
});

// Fade In on Scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Swiper Init
  new Swiper(".mySkillsSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 4 }
    }
  });
});

var swiper = new Swiper(".mySkillsSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true
  });


 var swiper = new Swiper(".mySkillsSwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true, // bikin slide selalu ketengah
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});