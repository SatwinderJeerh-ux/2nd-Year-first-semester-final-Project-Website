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
    const hamburger1 = document.getElementById('hamburger-tablet');
    const overlay1 = document.getElementById('overlay-tablet');
    const navMenu2 = document.getElementById('navMenu2');

    hamburger1.addEventListener('click', () => {
        navMenu2.classList.toggle('open');
        overlay1.style.display = overlay1.style.display === 'block' ? 'none' : 'block';
    });

    overlay1.addEventListener('click', () => {
        navMenu2.classList.remove('open');
        overlay1.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger2 = document.getElementById('hamburger-desktop');
    const overlay2 = document.getElementById('overlay-desktop');
    const navMenu3 = document.getElementById('navMenu3');

    hamburger2.addEventListener('click', () => {
        navMenu3.classList.toggle('open');
        overlay2.style.display = overlay2.style.display === 'block' ? 'none' : 'block';
    });

    overlay2.addEventListener('click', () => {
        navMenu3.classList.remove('open');
        overlay2.style.display = 'none';
    });
});