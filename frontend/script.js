window.addEventListener('DOMContentLoaded', function() {
    const barraSuperior = document.querySelector('.barra-superior');
    const topHeader = document.querySelector('.top-header');
    const categorias = document.querySelector('.categorias');
  
    if (topHeader && categorias) {
      // Mostrar la barra superior y ocultar el top-header inmediatamente si la página se carga desde otra página
      if (document.referrer && !document.referrer.includes(window.location.hostname)) {
        barraSuperior.style.display = 'flex';
        topHeader.style.display = 'none';
      } else {
        barraSuperior.style.display = 'none';
      }
  
      window.addEventListener('scroll', function() {
        if (window.scrollY > topHeader.offsetHeight + categorias.offsetHeight) {
          barraSuperior.style.display = 'flex';
          topHeader.style.display = 'none';
        } else {
          barraSuperior.style.display = 'none';
          topHeader.style.display = 'block';
        }
      });
    } else {
      barraSuperior.style.display = 'flex';
  
      // Ocultar parcialmente la barra superior al hacer scroll
      let lastScrollTop = 0;
      window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
          // Scroll hacia abajo
          barraSuperior.classList.add('hidden');
        } else {
          // Scroll hacia arriba
          barraSuperior.classList.remove('hidden');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
      });
    }
  });