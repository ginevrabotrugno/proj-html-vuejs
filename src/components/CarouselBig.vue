<script>
export default {
  name: 'CarouselBig',
  data() {
    return {
      currentSlide: 0,
      slides: [
        { title: 'Eating naturally & organic is always be healthy.', image: '/src/assets/slider.jpg' },
        { title: 'Eating naturally & organic is always be healthy.', image: '/src/assets/H3-slider3.jpg' },
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
          this.nextSlide();
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
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.handleNavigation();
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      this.handleNavigation();
    },
    handleNavigation() {
      this.isNavigating = true;
      clearTimeout(this.navigateTimeout);
      this.navigateTimeout = setTimeout(() => {
        this.isNavigating = false;
        this.resetAutoSlideTimer(this.isHovered ? 8000 : 6000);
      }, 10000);
    },
    goToAboutUs() {
      this.$router.push({ name: 'AboutUs' });
    },
    goToOurHistory() {
      this.$router.push({ name: 'OurHistory' });
    }
  }
};
</script>

<!-- CAROUSELBIG -->
<template>
    <div class="carousel-container" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
      <div class="carousel-slide" v-for="(slide, index) in slides" :key="index" :style="{ backgroundImage: `url(${slide.image})`, opacity: index === currentSlide ? 1 : 0 }">
        <div class="carousel-content">
          <h2 class="carousel-subtitle">GOGRIN ORGANIC FOOD STORE</h2>
          <h1 class="carousel-title">{{ slide.title }}</h1>
          <div class="buttons">
            <button class="btn-orange" @click="goToAboutUs">About Us</button>
            <button class="btn-green" @click="goToOurHistory">Our History</button>
          </div>
        </div>
      </div>
      <button class="nav-button prev" @mousedown="prevSlide" @touchstart="prevSlide"><i class="fa-solid fa-chevron-left"></i></button>
      <button class="nav-button next" @mousedown="nextSlide" @touchstart="nextSlide"><i class="fa-solid fa-chevron-right"></i></button>
    </div>
</template>


<style scoped lang="scss">
@use '/src/style/general.scss' as *;
@import '/src/style/partials/variables';

// general container
.carousel-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

// Slide styles
.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 1s;
}

.carousel-content {
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.carousel-title {
  font-size: 4rem; 
  margin-bottom: 30px; 
}

.carousel-subtitle { 
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: bold;
}


// SECTION BUTTONS
.buttons {
  display: flex;
  justify-content: center;
  gap: 30px; 
  margin-top: 30px; 
}

.btn-green,
.btn-orange {
  border: none;
  color: white;
  padding: 20px 20px; 
  cursor: pointer;
  font-size: 12px; 
  font-weight: bold;
  transition: background-color 0.3s ease;
  text-transform: uppercase;
}

.btn-green {
  background-color: #067166;
  border-radius: 0 20px 20px 0; /* Angoli arrotondati personalizzati */
}

.btn-green:hover {
  background-color: #04574f;
}

.btn-orange {
  background-color: #ef9e03;
  border-radius: 20px 0 0 20px; /* Angoli arrotondati personalizzati */
}

.btn-orange:hover {
  background-color: #d98702;
}
// Navigation buttons
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
}

.prev {
  left: 30px; /* Aumenta la distanza dal bordo sinistro */
}

.next {
  right: 30px; /* Aumenta la distanza dal bordo destro */
}
</style>

