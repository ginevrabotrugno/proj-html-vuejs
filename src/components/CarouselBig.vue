<script>
export default {
  name: 'CarouselBig',
  data() {
    return {
        // creazione data arrai img carosello
      images: [
        new URL('/src/assets/slider.jpg', import.meta.url).href,
      ],
      currentImageIndex: 0
    };
  },
    //   metodo per iterare attraverso l array le img next e prev
  methods: {
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    }
  }
}

</script>

<!-- CAROUSELBIG -->
<template>
    <div class="carousel-container">
        <div class="carousel-slide">
            <img :src="images[currentImageIndex]" :alt="'Carousel Image ' + (currentImageIndex + 1)">
            <div class="carousel-caption">
                <h1>Mangiare naturale e biologico è sempre salutare.</h1>
                <div class="button-group">
                    <button>Chi Siamo</button>
                    <button>La Nostra Storia</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '/src/style/general.scss' as *;

.carousel-container {
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

.carousel-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.carousel-slide img {
  width: 100%;
  height: auto;
}

.carousel-caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
}

.carousel-caption h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.button-group {
  display: flex;
  gap: 1rem;
}

.button-group button {
  background-color: #ffc107; 
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button-group button:last-child {
  background-color: #4caf50; 
}

.button-group button:hover {
  opacity: 0.8;
}

</style>