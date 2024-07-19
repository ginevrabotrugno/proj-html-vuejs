<script>
export default {
  name: 'CarouselTestimonial',
  data() {
    return {
      currentIndex: 0, 
      testimonials: [
        {
          text: '"Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweets muffin pudding tart bear claw sugar plum croissant .". We started as a small legal consultancy. We have proved our competence and had many satisfied clients.',
          name: 'Parvin Khan',
          position: 'Co-Of Officer',
          backgroundImage: "/src/assets/testi-icon.png",
        },
        {
          text: '"Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweets muffin pudding tart bear claw sugar plum croissant .". We started as a small legal consultancy. We have proved our competence and had many satisfied clients.',
          name: 'Martha Alex',
          position: 'Manager'
        }
      ],
      isHovered: false, // Flag per indicare se il carosello è in stato di hover
      isNavigating: false, // Flag per indicare se è in corso una navigazione tra testimonianze
      autoSlideInterval: null, // Intervallo per il cambio automatico delle testimonianze
      hoverTimeout: null, // Timeout per l'hover
      navigateTimeout: null, // Timeout per la navigazione
    };
  },
  mounted() {
    // Avvia il cambio automatico delle testimonianze ogni 6 secondi
    this.startAutoSlide(6000); 
  },
  beforeDestroy() {
    // Pulisce l'intervallo del cambio automatico
    clearInterval(this.autoSlideInterval); 
    // Pulisce il timeout dell'hover
    clearTimeout(this.hoverTimeout); 
     // Pulisce il timeout della navigazione
    clearTimeout(this.navigateTimeout);
  },
  methods: {
    // Avvia il cambio automatico delle testimonianze
    startAutoSlide(interval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = setInterval(() => {
        if (!this.isNavigating) {
          this.nextTestimonial();
        }
      }, interval);
    },
    // Resetta il timer per il cambio automatico delle testimonianze
    resetAutoSlideTimer(interval) {
      clearInterval(this.autoSlideInterval);
      this.startAutoSlide(interval);
    },
    // Gestisce l'evento di mouse over sul carosello
    handleMouseOver() {
      this.isHovered = true;
      this.resetAutoSlideTimer(8000);
    },
    // Gestisce l'evento di mouse leave sul carosello
    handleMouseLeave() {
      this.isHovered = false;
      this.resetAutoSlideTimer(6000);
    },
    // Passa alla testimonianza successiva
    nextTestimonial() {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
      this.handleNavigation();
    },
    // Torna alla testimonianza precedente
    prevTestimonial() {
      this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
      this.handleNavigation();
    },
    // Gestisce la navigazione tra le testimonianze
    handleNavigation() {
      this.isNavigating = true;
      clearTimeout(this.navigateTimeout);
      this.navigateTimeout = setTimeout(() => {
        this.isNavigating = false;
        this.resetAutoSlideTimer(this.isHovered ? 8000 : 6000);
      }, 10000);
    }
  }
};
</script>

<template>
  <div class="carousel-container" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
    <div class="carousel-slide" v-for="(testimonial, index) in testimonials" :key="index" :class="{ 'carousel-slide-active': index === currentIndex, 'carousel-slide-left': index < currentIndex, 'carousel-slide-right': index > currentIndex }">
      <div class="carousel-content">
        <div class="quote-icon"></div>
        <p class="quote-text">{{ testimonial.text }}</p>
        <div class="author">
          <p class="name">{{ testimonial.name }}</p>
          <p class="position">{{ testimonial.position }}</p>
        </div>
      </div>
    </div>
    <button class="nav-button prev" @mousedown="prevTestimonial" @touchstart="prevTestimonial"><i class="fa-solid fa-chevron-left"></i></button>
    <button class="nav-button next" @mousedown="nextTestimonial" @touchstart="nextTestimonial"><i class="fa-solid fa-chevron-right"></i></button>
  </div>
</template>

<style scoped lang="scss">
@import '/src/style/partials/variables';

// Stile per il container del carosello
.carousel-container {
  position: relative;
  width: 80vw; 
  height: 50vh; 
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff; 
  color: #333; 
  margin: 0 auto; 
}

// Stile per ogni slide del carosello
.carousel-slide {
  position: absolute;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: left 1s ease; 
}

// Slide attiva
.carousel-slide-active {
  left: 0;
}

// Slide precedente
.carousel-slide-left {
  left: -100%;
}

// Slide successiva
.carousel-slide-right {
  left: 100%;
}

// Contenuto del carosello
.carousel-content {
  width: 80%; 
  height: auto; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  background: url('/src/assets/testi-icon.png') no-repeat; 
  background-position: 100% center;
  background-size: 50% contain; 
}

// Icona della citazione
.quote-icon {
  width: 100px; 
  height: 100px; 
  background-image: url('/src/assets/iconCarouselTestimonial.png');
  background-size: contain; 
  background-repeat: no-repeat; 
}

// Testo della citazione
.quote-text {
  font-size: 1.5rem;
  margin: 10px 20px; 
  max-width: 100%;
  font-weight: 600; 
}

// Autore della citazione
.author {
  text-align: center;
  margin-top:10px;
  font-weight: 600;
}

// Nome dell'autore
.name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

// Posizione dell'autore
.position {
  color: $orange;
  font-size: 0.875rem; 
}

// Pulsanti di navigazione
.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5); 
  color: white;
  border: none;
  padding: 10px; 
  cursor: pointer;
  font-size: 2rem; 
  line-height: 1;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s; 
}

// Mostra i pulsanti di navigazione quando il container è in hover
.carousel-container:hover .nav-button {
  opacity: 1;
}

// Pulsante di navigazione precedente
.prev {
  left: 5px;
  width: 60px;
  height: 60px;
  background-color: $orange;
  transition: background-color $time;

  &:hover{
    background-color: $green;
  }
}

// Pulsante di navigazione successivo
.next {
  right: 5px;
  width: 60px;
  height: 60px;
  background-color: $orange;
  transition: background-color $time;

  &:hover{
    background-color: $green;
  }
}

// Stile per schermi più piccoli di 1200px
@media (max-width: 1200px) {
  .carousel-container {
    width: 90vw;
    height: 40vh;
  }

  .carousel-content {
    padding: 15px;
  }

  .quote-icon {
    width: 40px;
    height: 40px;
  }

  .quote-text {
    font-size: 0.875rem;
    margin: 15px 15px;
  }

  .name {
    font-size: 0.875rem;
  }

  .position {
    font-size: 0.75rem;
  }

  .nav-button {
    padding: 10px;
    font-size: 0.875rem;
  }
}

// Stile per schermi più piccoli di 768px
@media (max-width: 768px) {
  .carousel-container {
    width: 100vw;
    height: 30vh;
  }

  .carousel-content {
    padding: 10px;
  }

  .quote-icon {
    width: 30px;
    height: 30px;
  }

  .quote-text {
    font-size: 0.75rem;
    margin: 10px 10px;
  }

  .name {
    font-size: 0.75rem;
  }

  .position {
    font-size: 0.625rem;
  }

  .nav-button {
    padding: 8px;
    font-size: 0.75rem;
  }
}

// Stile per schermi più piccoli di 480px
@media (max-width: 480px) {
  .carousel-container {
    width: 100vw;
    height: 20vh;
  }

  .carousel-content {
    padding: 5px;
  }

  .quote-icon {
    width: 20px;
    height: 20px;
  }

  .quote-text {
    font-size: 0.625rem;
    margin: 5px 5px;
  }

  .name {
    font-size: 0.625rem;
  }

  .position {
    font-size: 0.5rem;
  }

  .nav-button {
    padding: 5px;
    font-size: 0.625rem;
  }
}
</style>