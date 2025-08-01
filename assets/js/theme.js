document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('site-header');
  const inner = document.getElementById('header-inner');
  const logo = document.getElementById('site-logo');

  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const bar1 = document.getElementById('bar1');
  const bar2 = document.getElementById('bar2');
  const bar3 = document.getElementById('bar3');

  const sections = document.querySelectorAll('section'); // Select all sections

  // Shrinking sticky header and animate on scroll
  const handleScroll = () => {
    const scrolled = window.scrollY > 50;

    // Shrinking header logic
    if (header && inner) {
      header.classList.toggle('bg-black', scrolled);
      header.classList.toggle('bg-transparent', !scrolled);
      header.classList.toggle('shadow-md', scrolled);

      inner.classList.toggle('py-3', scrolled);
      inner.classList.toggle('p-6', !scrolled);
    }

    if (logo) {
      if (scrolled) {
        logo.classList.remove('max-w-[120px]', 'sm:max-w-[160px]', 'lg:max-w-[200px]');
        logo.classList.add('max-w-[50px]');
      } else {
        logo.classList.remove('max-w-[50px]');
        logo.classList.add('max-w-[120px]', 'sm:max-w-[160px]', 'lg:max-w-[200px]');
      }
    }
    // Home Animation fade out
  const homeAnimation = document.querySelector('.home-animation');
  if (homeAnimation) {
    setTimeout(() => {
      homeAnimation.classList.add('fade-out');
    }, 1000);
  }

    // Animate sections in/out on scroll
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.1;

      if (isVisible) {
        section.classList.add('animate-in');
        section.classList.remove('animate-out');
      } else {
        section.classList.add('animate-out');
        section.classList.remove('animate-in');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger on load

  // Mobile menu toggle + animation
  if (toggle && menu && bar1 && bar2 && bar3) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('translate-x-0');
      menu.classList.toggle('-translate-x-full', !isOpen);

      // Animate bars into X
      bar1.classList.toggle('rotate-45', isOpen);
      bar1.classList.toggle('translate-y-[14px]', isOpen);

      bar2.classList.toggle('opacity-0', isOpen);

      bar3.classList.toggle('-rotate-45', isOpen);
      bar3.classList.toggle('-translate-y-[6px]', isOpen);

      document.body.classList.toggle('menu-open', isOpen);
    });
  }
});
