<script>
export default {
  name: 'CarouselTestimonial',
  data() {
    return {
      currentIndex: 0,
      testimonials: [
        {
          text: 'Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweets muffin pudding tart bear claw sugar plum croissant. We started as a small legal consultancy. We have proved our competence and had many satisfied clients.',
          name: 'parvin Khan',
          position: 'Co-Of Officer',
          backgroundImage: "/src/assets/testi-icon.png",
        },

        {
          text: 'Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweets muffin pudding tart bear claw sugar plum croissant. We started as a small legal consultancy. We have proved our competence and had many satisfied clients.',
          name: 'Martha Alex',
          position: 'Manager'
        },
        
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
    <div class="carousel-slide" v-for="(testimonial, index) in testimonials" :key="index" :style="{ opacity: index === currentIndex ? 1 : 0 }">
      <div class="carousel-content">
        <div class="quote-icon">“</div>
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

  // general carousel container
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
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 1s;
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
  background-position:  90% center;
  background-size: 70% contain;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
// icons

.quote-icon {
  font-size: 15rem;
  color: #008744;
 
}
// txt
.quote-text {
  font-size: 2rem;
  margin: 20px 80px 200px;
  max-width: 80%;
}
// author
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

// section nav buttons

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
  left: 30px;
  background-color: #ffa500;
}

.next {
  right: 30px;
  background-color: #008744;
}
</style>
