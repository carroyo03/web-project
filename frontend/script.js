window.addEventListener('DOMContentLoaded', function() {
  const barraSuperior = document.querySelector('.barra-superior');
  const topHeader = document.querySelector('.top-header');
  const categorias = document.querySelector('.categorias');
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  const bandaInferior = document.querySelector('.banda-inferior');
  const contactoLink = document.getElementById('contacto-link');
  const contactoFormulario = document.getElementById('contacto-formulario');
  const cerrarFormulario = document.getElementById('cerrar-formulario');
  const contactForm = document.getElementById('contact-form');
  const agradecimientoModal = document.getElementById('agradecimiento-modal');
  const cerrarModal = document.getElementById('cerrar-modal');
  const privacidadLink = document.querySelector('a[href="privacidad.html"]');
  const privacidadModal = document.getElementById('privacidad-modal');
  const cerrarPrivacidadModal = document.getElementById('cerrar-privacidad-modal');
  const terminosLink = document.querySelector('a[href="terminos.html"]');
  const terminosModal = document.getElementById('terminos-modal');
  const cerrarTerminosModal = document.getElementById('cerrar-terminos-modal');
  const sobreLink = document.querySelector('a[href="sobre.html"]');
  const sobreModal = document.getElementById('sobre-modal');
  const cerrarSobreModal = document.getElementById('cerrar-sobre-modal');

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

      // Mostrar el botón de subir arriba al hacer scroll hacia abajo
      if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }

      // Mostrar la banda inferior al llegar al final de la página
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        bandaInferior.style.bottom = '0';
      } else {
        bandaInferior.style.bottom = '-100px';
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

      // Mostrar el botón de subir arriba al hacer scroll hacia abajo
      if (scrollTop > 200) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }

      // Mostrar la banda inferior al llegar al final de la página
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        bandaInferior.style.bottom = '0';
      } else {
        bandaInferior.style.bottom = '-100px';
      }
    });
  }

  // Añadir evento de clic al botón de subir arriba
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Añadir evento de clic al enlace de contacto para mostrar el formulario
  if (contactoLink) {
    contactoLink.addEventListener('click', function(event) {
      event.preventDefault();
      contactoFormulario.style.display = 'flex';
    });
  }

  // Añadir evento de clic al botón de cerrar para ocultar el formulario
  if (cerrarFormulario) {
    cerrarFormulario.addEventListener('click', function() {
      contactoFormulario.style.display = 'none';
    });
  }

  // Ocultar el formulario si se hace clic fuera de él
  window.addEventListener('click', function(event) {
    if (event.target === contactoFormulario) {
      contactoFormulario.style.display = 'none';
    }
  });

  // Añadir evento de envío al formulario de contacto
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      contactoFormulario.style.display = 'none';
      agradecimientoModal.style.display = 'block';
      contactForm.reset(); // Limpiar los campos del formulario
    });
  }

  // Añadir evento de clic al botón de cerrar del modal de agradecimiento
  if (cerrarModal) {
    cerrarModal.addEventListener('click', function() {
      agradecimientoModal.style.display = 'none';
    });
  }

  // Ocultar el modal de agradecimiento si se hace clic fuera de él
  window.addEventListener('click', function(event) {
    if (event.target === agradecimientoModal) {
      agradecimientoModal.style.display = 'none';
    }
  });

  // Añadir evento de clic al enlace de política de privacidad para mostrar el modal
  if (privacidadLink) {
    privacidadLink.addEventListener('click', function(event) {
      event.preventDefault();
      privacidadModal.style.display = 'block';
    });
  }

  // Añadir evento de clic al botón de cerrar para ocultar el modal de privacidad
  if (cerrarPrivacidadModal) {
    cerrarPrivacidadModal.addEventListener('click', function() {
      privacidadModal.style.display = 'none';
    });
  }

  // Ocultar el modal de privacidad si se hace clic fuera de él
  window.addEventListener('click', function(event) {
    if (event.target === privacidadModal) {
      privacidadModal.style.display = 'none';
    }
  });

  // Añadir evento de clic al enlace de términos y condiciones para mostrar el modal
  if (terminosLink) {
    terminosLink.addEventListener('click', function(event) {
      event.preventDefault();
      terminosModal.style.display = 'block';
    });
  }

  // Añadir evento de clic al botón de cerrar para ocultar el modal de términos y condiciones
  if (cerrarTerminosModal) {
    cerrarTerminosModal.addEventListener('click', function() {
      terminosModal.style.display = 'none';
    });
  }

  // Ocultar el modal de términos y condiciones si se hace clic fuera de él
  window.addEventListener('click', function(event) {
    if (event.target === terminosModal) {
      terminosModal.style.display = 'none';
    }
  });

  // Añadir evento de clic al enlace de sobre nosotros para mostrar el modal
  if (sobreLink) {
    sobreLink.addEventListener('click', function(event) {
      event.preventDefault();
      sobreModal.style.display = 'block';
    });
  }

  // Añadir evento de clic al botón de cerrar para ocultar el modal de sobre nosotros
  if (cerrarSobreModal) {
    cerrarSobreModal.addEventListener('click', function() {
      sobreModal.style.display = 'none';
    });
  }

  // Ocultar el modal de sobre nosotros si se hace clic fuera de él
  window.addEventListener('click', function(event) {
    if (event.target === sobreModal) {
      sobreModal.style.display = 'none';
    }
  });
});