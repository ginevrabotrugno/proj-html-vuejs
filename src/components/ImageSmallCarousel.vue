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
}

.carousel {
  display: flex;
  overflow: hidden;
  width: 80%; 
}

.carousel-item {
  flex: 1 0 25%; 
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
  padding: 20px;
  cursor: pointer;
  font-size: 24px;
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
  left: 9rem;
  background-color: #ffa500;
}

.carousel-button.next {
  right: 9rem;
  background-color: #ffa500;
}
</style>