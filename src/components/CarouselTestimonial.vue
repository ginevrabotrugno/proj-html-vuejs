<script>
export default {
  name: 'CarouselTestimonial',
  data() {
    return {
      currentIndex: 0,
      testimonials: [
        {
          text: 'Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweets muffin pudding tart bear claw sugar plum croissant. We started as a small legal consultancy. We have proved our competence and had many satisfied clients.',
          name: 'Parvin Khan',
          position: 'Co-Of Officer',
          backgroundImage: "/src/assets/testi-icon.png",
        },
        {
          text: 'Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweets muffin pudding tart bear claw sugar plum croissant. We started as a small legal consultancy. We have proved our competence and had many satisfied clients.',
          name: 'Martha Alex',
          position: 'Manager'
        }
      ],
      isHovered: false,
      isNavigating: false,
      autoSlideInterval: null,
      hoverTimeout: null,
      navigateTimeout: null,
    };
  },
  mounted() {
    this.startAutoSlide(6000);
  },
  beforeDestroy() {
    clearInterval(this.autoSlideInterval);
    clearTimeout(this.hoverTimeout);
    clearTimeout(this.navigateTimeout);
  },
  methods: {
    startAutoSlide(interval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = setInterval(() => {
        if (!this.isNavigating) {
          this.nextTestimonial();
        }
      }, interval);
    },
    resetAutoSlideTimer(interval) {
      clearInterval(this.autoSlideInterval);
      this.startAutoSlide(interval);
    },
    handleMouseOver() {
      this.isHovered = true;
      this.resetAutoSlideTimer(8000);
    },
    handleMouseLeave() {
      this.isHovered = false;
      this.resetAutoSlideTimer(6000);
    },
    nextTestimonial() {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
      this.handleNavigation();
    },
    prevTestimonial() {
      this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
      this.handleNavigation();
    },
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
    <button class="nav-button prev" @mousedown="prevTestimonial" @touchstart="prevTestimonial">&#9664;</button>
    <button class="nav-button next" @mousedown="nextTestimonial" @touchstart="nextTestimonial">&#9654;</button>
  </div>
</template>

<style scoped lang="scss">

  @import '/src/style/partials/variables';

 .carousel-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #333;
}

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

.carousel-slide-active {
  left: 0;
}

.carousel-slide-left {
  left: -100%;
}

.carousel-slide-right {
  left: 100%;
}

.carousel-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  background: url('/src/assets/testi-icon.png') no-repeat;
  background-position: 90% center;
  background-size: 70% contain;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.quote-icon {
  width: 200px; 
  height: 200px; 
  background-image: url('/src/assets/iconCarouselTestimonial.png');
  background-size: contain; 
  background-repeat: no-repeat; 
}

.quote-text {
  font-size: 2rem;
  margin: 20px 80px 200px;
  max-width: 80%;
}

.author {
  text-align: center;
}

.name {
  font-weight: bold;
  color: #333;
  font-size: 1.5rem;
}

.position {
  color: #ffa500;
  font-size: 1.2rem;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 20px;
  cursor: pointer;
  font-size: 2rem;
  line-height: 1;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s;
}

.carousel-container:hover .nav-button {
  opacity: 1;
}

.prev {
  left: 5px;
  background-color: #ffa500;
}

.next {
  right: 30px;
  background-color: #008744;
}

@media (max-width: 1200px) {
  .carousel-content {
    padding: 15px;
  }

  .quote-icon {
    width: 150px;
    height: 150px;
  }

  .quote-text {
    font-size: 1.5rem;
    margin: 15px 60px 150px;
  }

  .name {
    font-size: 1.25rem;
  }

  .position {
    font-size: 1rem;
  }

  .nav-button {
    padding: 15px;
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .carousel-content {
    padding: 10px;
  }

  .quote-icon {
    width: 100px;
    height: 100px;
  }

  .quote-text {
    font-size: 1.25rem;
    margin: 10px 40px 100px;
  }

  .name {
    font-size: 1rem;
  }

  .position {
    font-size: 0.875rem;
  }

  .nav-button {
    padding: 10px;
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .carousel-content {
    padding: 5px;
  }

  .quote-icon {
    width: 75px;
    height: 75px;
  }

  .quote-text {
    font-size: 1rem;
    margin: 5px 20px 75px;
  }

  .name {
    font-size: 0.875rem;
  }

  .position {
    font-size: 0.75rem;
  }

  .nav-button {
    padding: 8px;
    font-size: 1rem;
  }
}
</style>

