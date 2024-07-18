
<script>
export default {
  name: 'LogoCarousel',
  data() {
    return {
      images: [
        '/src/assets/brand1.png',
        '/src/assets/brand4.png',
        '/src/assets/brand3.png',
        '/src/assets/brand1.png',
        '/src/assets/brand2.png',
      ],
      currentIndex: 0,
      autoScrollInterval: null,
      userInteracted: false,
    };
  },
  computed: {
    visibleImages() {
      let start = this.currentIndex;
      let end = this.currentIndex + 5;
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
        :style="{ width: carouselWidth, transform: `translateX(-${currentIndex * 20}%)` }"
      >
        <div
          class="carousel-item"
          v-for="(image, index) in images.concat(images.slice(0, 5))" 
          :key="index"
        >
          <img :src="image" :alt="'Image ' + index" />
        </div>
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
  flex: 0 0 20%;
  margin: 0 5px;
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
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  transition: opacity 0.3s;
}

.carousel-button:hover {
  opacity: 1;
}

.carousel-button.prev {
  left: 8rem;
  background-color: #ffa500;
}

.carousel-button.next {
  right: 8rem;
  background-color: #ffa500;
}
</style>