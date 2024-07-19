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
    <button class="nav-button prev" @mousedown="prevTestimonial" @touchstart="prevTestimonial"><i class="fa-solid fa-chevron-left"></i></button>
    <button class="nav-button next" @mousedown="nextTestimonial" @touchstart="nextTestimonial"><i class="fa-solid fa-chevron-right"></i></button>
  </div>
</template>

<style scoped lang="scss">

  @import '/src/style/partials/variables';

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

.quote-icon {
  width: 100px; 
  height: 100px; 
  background-image: url('/src/assets/iconCarouselTestimonial.png');
  background-size: contain; 
  background-repeat: no-repeat; 
}

.quote-text {
  font-size: 1.7rem;
  margin: 10px 20px; 
  max-width: 100%;
  font-weight: bolder; 
}

.author {

  text-align: center;
  margin-top:10px;
  font-weight: bolder;
 
}

.name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
  
}

.position {
  color: $orange;
  font-size: 0.875rem; 
}

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

.carousel-container:hover .nav-button {
  opacity: 1;
}

.prev {
  left: 5px;
  background-color: $orange;
  transition: background-color $time;

  &:hover{
    background-color: $green;
  }
}

.next {
  right: 5px;
  background-color: $orange;
  transition: background-color $time;

  &:hover{
    background-color: $green;
  }
}

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

