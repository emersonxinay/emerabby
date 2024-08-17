document.addEventListener('DOMContentLoaded', function () {
  const galleryData = [
    {
      src: 'assets/img/1.JPG',
      title: 'Celebración',
      description: 'El día 17 de agosto, celebramos con gran emoción nuestro aniversario mensual. Apreciamos profundamente la dedicación y el amor que compartimos en esta ocasión especial.'
    },
    {
      src: 'assets/img/2.JPG',
      title: 'Momento Especial',
      description: 'Un momento memorable que capturamos durante nuestro tiempo juntos, lleno de alegría y cariño.'
    },
    {
      src: 'assets/img/3.JPG',
      title: 'Amor y Fuerza',
      description: 'Nuestros viajes juntos no solo han sido aventuras, sino también pruebas de nuestra fuerza y amor. Cada desafío enfrentado nos ha hecho más fuertes y ha reafirmado nuestro compromiso de salir adelante juntos.'
    },
    {
      src: 'assets/img/4.jpg',
      title: 'Motivación y Crecimiento',
      description: 'Cada experiencia compartida ha sido una fuente de inspiración y motivación. Juntos, hemos aprendido a superar obstáculos y a enfrentar el futuro con optimismo y amor, siempre mirando hacia adelante con esperanza.'
    }
  ];

  const gallerySection = document.getElementById('gallery');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const caption = document.getElementById('caption');
  const close = document.querySelector('.close');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  let currentIndex = 0;

  function updateLightbox(index) {
    const data = galleryData[index];
    lightboxImg.src = data.src;
    caption.textContent = data.title + ': ' + data.description;
    currentIndex = index;
  }

  galleryData.forEach((data, index) => {
    const article = document.createElement('article');
    article.innerHTML = `
          <img src="${data.src}" alt="${data.title}" data-index="${index}">
          <h2>${data.title}</h2>
          <p>${data.description}</p>
      `;
    gallerySection.appendChild(article);
  });

  gallerySection.addEventListener('click', function (e) {
    if (e.target.tagName === 'IMG') {
      const index = e.target.dataset.index;
      updateLightbox(index);
      lightbox.style.display = 'flex';
    }
  });

  close.addEventListener('click', function () {
    lightbox.style.display = 'none';
  });

  prev.addEventListener('click', function () {
    const newIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    updateLightbox(newIndex);
  });

  next.addEventListener('click', function () {
    const newIndex = (currentIndex + 1) % galleryData.length;
    updateLightbox(newIndex);
  });

});

// Muestra el lightbox
function openLightbox() {
  document.querySelector('.lightbox').style.display = 'flex';
}

// Cierra el lightbox
function closeLightbox() {
  document.querySelector('.lightbox').style.display = 'none';
}

// Cerrar al hacer clic fuera de la imagen
document.querySelector('.lightbox').addEventListener('click', function (e) {
  if (e.target === this || e.target.classList.contains('close')) {
    closeLightbox();
  }
});

// Cerrar al hacer clic en el botón cerrar
document.querySelector('.close').addEventListener('click', closeLightbox);

// año actual
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('current-date').textContent = new Date().toLocaleDateString('es-ES');
