<script>
export default {
  name: 'ImageSmallCarousel',
  data() {
    return {
      images: [
        '/src/assets/fe1.jpg',
        '/src/assets/fe2.jpg',
        '/src/assets/fe3.jpg',
        '/src/assets/fe1.jpg',
        '/src/assets/fe2.jpg',
      ],
      texts: [
        'Fresh Juice',
        'Fresh Fruits',
        'Dairy Items',
        'Vegetable',
        'Organic Orange'
      ],
      currentIndex: 0,
      autoScrollInterval: null,
      userInteracted: false,
    };
  },
  computed: {
    visibleImages() {
      let start = this.currentIndex;
      let end = this.currentIndex + 4;
      if (end > this.images.length) {
        return this.images.slice(start).concat(this.images.slice(0, end - this.images.length));
      } else {
        return this.images.slice(start, end);
      }
    },
    carouselWidth() {
      return this.images.length * 100 + '%';
    }
  },
  methods: {
    startAutoScroll() {
      this.autoScrollInterval = setInterval(this.nextAuto, 3000);
    },
    stopAutoScroll() {
      clearInterval(this.autoScrollInterval);
    },
    nextAuto() {
      if (!this.userInteracted) {
        this.next();
      } else {
        this.userInteracted = false;
      }
    },
    next() {
      this.userInteracted = true;
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prev() {
      this.userInteracted = true;
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    getTextForImage(index) {
      const textsIndex = (this.currentIndex + index) % this.texts.length;
      return this.texts[textsIndex];
    },
  },
  mounted() {
    this.startAutoScroll();
  },
  beforeUnmount() {
    this.stopAutoScroll();
  },
};
</script>

<template>
  <div class="carousel-container">
    <button @click="prev" class="carousel-button prev"><i class="fa-solid fa-chevron-left"></i></button>
    <div class="carousel">
      <div
        class="carousel-inner"
        :style="{ width: carouselWidth, transform: `translateX(-${currentIndex * 25}%)` }"
      >
        <div class="carousel-item" v-for="(image, index) in images.concat(images.slice(0, 4))" :key="index">
          <img :src="image" :alt="'Image ' + index" />
          <div class="overlay"></div>
          <div class="text-overlay">
            {{ getTextForImage(index) }}
          </div>
        </div>
      </div>
    </div>
    <button @click="next" class="carousel-button next"><i class="fa-solid fa-chevron-right"></i></button>
  </div>
</template>

<style scoped lang="scss">
@use '/src/style/general.scss' as *;
@use '/src/style/partials/variables' as *;

// GENERAL CONTAINER
.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
  overflow: hidden;
  &:hover .carousel-button {
    opacity: 1;
  }
}

.carousel {
  overflow: hidden;
  width: 80%;
  display: flex;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  flex: 0 0 25%; 
  padding: 0 10px; 
  box-sizing: border-box;
  position: relative;
  transition: transform 0.3s ease-in-out;

  &:hover img {
    transform: scale(1.05);
  }

  &:hover .overlay {
    width: calc(100% - 10px);
    margin: 0 auto;
    height: 100%;
    top: 50%;
    left: 50%;
  }

}

// .carousel-item:hover {
//   transform: scale(1.05);
  
// }

.carousel img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  
}

// SECTION OVERLAY

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: width 0.3s ease-in-out, height 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out;
  transform: translate(-50%, -50%);
}

.carousel-item:hover .overlay {
  opacity: 1;
}

.text-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: white;
  text-align: left;
  padding: 10px 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  font-size: 2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  opacity: 0;
  cursor: pointer;
  transition: color $time;
}

.carousel-item:hover .text-overlay {
  transform: translateY(0);
  opacity: 1;
}

.carousel-item:hover .text-overlay:hover {
  color: $orange;
}


// SECTION BUTTONS

.carousel-button {
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  transition: opacity 0.3s, padding 0.3s, font-size 0.3s;
  opacity: 0;
}

.carousel-button.prev {
  left: 120px;
  background-color: $orange;
  width: 50px;
  height: 50px;
  transition: background-color $time;

  &:hover {
    background-color: $green;
  }
}

.carousel-button.next {
  right: 120px;
  background-color: $orange;
  width: 50px;
  height: 50px;
  transition: background-color $time;

  &:hover {
    background-color: $green;
  }
}

// Stili responsivi

// media q per schermi desktop
@media (max-width: 1200px) {
  .carousel-item {
    flex: 1 0 33.33%;
  }

  .carousel-button {
    font-size: 20px;
    padding: 15px;
  }
}
// media q per schermi medio piccoli come tablet
@media (max-width: 768px) {
  .carousel {
    width: 90%;
  }

  .carousel-item {
    flex: 1 0 50%; 
  }

  .carousel-button {
    font-size: 18px;
    padding: 10px;
    left: -40px;
    right: -40px;
  }
}
// media query per schermi piccoli
@media (max-width: 480px) {
  .carousel {
    width: 100%;
  }

  .carousel-item {
    flex: 1 0 100%;
  }

  .carousel-button {
    font-size: 16px;
    padding: 8px;
    left: -30px;
    right: -30px;
  }
}
</style>
