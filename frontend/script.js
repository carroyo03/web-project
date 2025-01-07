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
        } else {
          barraSuperior.style.display = 'none';
          topHeader.style.display = 'block';
        }
      });
    } else {
      barraSuperior.style.display = 'flex';
    }
  });