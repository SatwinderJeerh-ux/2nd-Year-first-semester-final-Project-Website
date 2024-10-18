function handleViewportChange() {
  const mobileContent = document.getElementById('mobile');
  const tabletContent = document.getElementById('tablet');
  const desktopContent = document.getElementById('desktop');

  const width = window.innerWidth;

  if (mobileContent) mobileContent.style.display = 'none';
  if (tabletContent) tabletContent.style.display = 'none';
  if (desktopContent) desktopContent.style.display = 'none';

  if (width < 768 && mobileContent) {
      mobileContent.style.display = 'block';
      console.log("Showing mobile content");
  } else if (width >= 768 && width < 1024 && tabletContent) {
      tabletContent.style.display = 'block';
      console.log("Showing tablet content");
  } else if (width >= 1024 && desktopContent) {
      desktopContent.style.display = 'block';
      console.log("Showing desktop content");
  }
}

function handlePrint() {
  const mobileContent = document.getElementById('mobile');
  const tabletContent = document.getElementById('tablet');
  const desktopContent = document.getElementById('desktop');

  window.addEventListener('beforeprint', () => {
      const width = window.innerWidth;

      if (mobileContent) mobileContent.style.display = 'none';
      if (tabletContent) tabletContent.style.display = 'none';
      if (desktopContent) desktopContent.style.display = 'none';

      if (width < 768) {
          mobileContent.style.display = 'block';
          console.log("Preparing mobile content for print");
      } else if (width >= 768 && width < 1024) {
          tabletContent.style.display = 'block';
          console.log("Preparing tablet content for print");
      } else if (width >= 1024) {
          desktopContent.style.display = 'block';
          console.log("Preparing desktop content for print");
      }
  });

  window.addEventListener('afterprint', handleViewportChange);
}

window.addEventListener('load', () => {
  handleViewportChange();
  handlePrint();
});

window.addEventListener('resize', handleViewportChange);
function handleViewportChange() {
  const mobileContent = document.getElementById('mobile');
  const tabletContent = document.getElementById('tablet');
  const desktopContent = document.getElementById('desktop');

  const width = window.innerWidth;

  if (mobileContent) mobileContent.style.display = 'none';
  if (tabletContent) tabletContent.style.display = 'none';
  if (desktopContent) desktopContent.style.display = 'none';

  if (width < 630 && mobileContent) {
      mobileContent.style.display = 'block';
  } else if (width >= 630 && width <= 1014 && tabletContent) {
      tabletContent.style.display = 'block';
  } else if (width >= 1015 && desktopContent) {
      desktopContent.style.display = 'block';
  }
}


function handlePrint() {
  const mobileContent = document.getElementById('mobile');
  const tabletContent = document.getElementById('tablet');
  const desktopContent = document.getElementById('desktop');

  window.addEventListener('beforeprint', () => {
      const width = window.innerWidth;

      mobileContent.style.display = 'none';
      tabletContent.style.display = 'none';
      desktopContent.style.display = 'none';

      if (width < 630) {
          mobileContent.style.display = 'block';
      } else if (width >= 630 && width <= 1014) {
          tabletContent.style.display = 'block';
      } else if (width >= 1015) {
          desktopContent.style.display = 'block';
      }
  });

  window.addEventListener('afterprint', handleViewportChange);
}

window.addEventListener('load', () => {
  handleViewportChange();
  handlePrint();
});

window.addEventListener('resize', handleViewportChange);

const slider = document.querySelector('.image-slider ul');
const images = document.querySelectorAll('.image-slider li');
const totalImages = images.length;

let currentIndex = 0;

function slideImages(index) {
  const slideWidth = images[index].clientWidth; 
  slider.style.transform = `translateX(${-index * slideWidth}px)`;
}

let lastScrollLeft = 0;

slider.addEventListener('scroll', () => {
  const scrollLeft = slider.scrollLeft;
  if (scrollLeft > lastScrollLeft) {
      currentIndex = (currentIndex + 1) % totalImages; 
  } else if (scrollLeft < lastScrollLeft) {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages; 
  }
  slideImages(currentIndex);
  lastScrollLeft = scrollLeft; 
});

let isDragging = false;
let startY, scrollTop;

const f3 = document.querySelector('.f3');

f3.addEventListener('mousedown', (e) => {
  isDragging = true;
  startY = e.pageY - f3.offsetTop;
  scrollTop = f3.scrollTop;
});

f3.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const y = e.pageY - f3.offsetTop;
  const scroll = (y - startY) * 2; 
  f3.scrollTop = scrollTop - scroll;
});

f3.addEventListener('mouseup', () => {
  isDragging = false;
});

f3.addEventListener('mouseleave', () => {
  isDragging = false;
});

f3.addEventListener('touchstart', (e) => {
  isDragging = true;
  startY = e.touches[0].pageY - f3.offsetTop;
  scrollTop = f3.scrollTop;
});

f3.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const y = e.touches[0].pageY - f3.offsetTop;
  const scroll = (y - startY) * 2; 
  f3.scrollTop = scrollTop - scroll;
});

f3.addEventListener('touchend', () => {
  isDragging = false;
});


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-mobile');
    const overlay = document.getElementById('overlay-mobile');
    const navMenu1 = document.getElementById('navMenu1');

    hamburger.addEventListener('click', () => {
        navMenu1.classList.toggle('open');
        overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
    });

    overlay.addEventListener('click', () => {
        navMenu1.classList.remove('open');
        overlay.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger-tablet');
  const overlay = document.getElementById('overlay-tablet');
  const navMenu2 = document.getElementById('navMenu2');

  hamburger.addEventListener('click', () => {
      navMenu2.classList.toggle('open');
      overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
  });

  overlay.addEventListener('click', () => {
      navMenu2.classList.remove('open');
      overlay.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger-desktop');
  const overlay = document.getElementById('overlay-desktop');
  const navMenu3 = document.getElementById('navMenu3');

  hamburger.addEventListener('click', () => {
      navMenu3.classList.toggle('open');
      overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
  });

  overlay.addEventListener('click', () => {
      navMenu3.classList.remove('open');
      overlay.style.display = 'none';
  });
});