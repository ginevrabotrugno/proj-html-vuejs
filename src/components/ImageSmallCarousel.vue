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
  },
  methods: {
    startAutoScroll() {
      this.autoScrollInterval = setInterval(this.nextAuto, 6000);
    },
    stopAutoScroll() {
      clearInterval(this.autoScrollInterval);
    },
    nextAuto() {
      if (!this.userInteracted) {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
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
        class="carousel-item"
        v-for="(image, index) in visibleImages"
        :key="index"
      >
        <img :src="image" :alt="'Image ' + index" />
      </div>
    </div>
    <button @click="next" class="carousel-button next"><i class="fa-solid fa-chevron-right"></i></button>
  </div>
</template>

<style scoped lang="scss">
@use '/src/style/general.scss' as *;


.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
  &:hover .carousel-button {
    opacity: 1;
  }
}

.carousel {
  display: flex;
  overflow: hidden;
  width: 80%;
}

.carousel-item {
  flex: 1 0 25%;
  margin: 0 10px; 
}

.carousel img {
  width: 100%;
  height: auto;
  display: block;
}

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
  left: 150px;
  background-color: #ffa500;
  width: 50px;
  height: 50px;
}

.carousel-button.next {
  right: 150px;
  background-color: #ffa500;
  width: 50px;
  height: 50px;
}

// Stili responsivi
@media (max-width: 1200px) {
  .carousel-item {
    flex: 1 0 33.33%;
  }

  .carousel-button {
    font-size: 20px;
    padding: 15px;
  }
}

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
