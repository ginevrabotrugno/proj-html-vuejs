
<script>
export default {
  name: 'Counter',
  mounted() {
    this.setupIntersectionObserver();
  },
  methods: {
    setupIntersectionObserver() {
      const options = {
        root: null,
        threshold: 0.1
      };
      const observer = new IntersectionObserver(this.handleIntersection, options);
      observer.observe(this.$el);
    },
    handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startCounters();
        }
      });
    },
    startCounters() {
      const counters = this.$el.querySelectorAll('.counter');

      const speeds = {
        counter1: 5000, // Years of Experience
        counter2: 2000, // Everyday Online Delivery (più veloce)
        counter3: 5000, // Client Satisfaction
        counter4: 5000  // Award Winning
      };

      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText.replace(/[+K]/g, '');
          let increment;

          if (counter.id === 'counter3') {
            increment = (target * 1000) / speeds[counter.id]; 
          } else {
            increment = (target / speeds[counter.id]) * 100; 
          }

          if (count < target) {
            counter.innerText = Math.ceil(count + increment) + (counter.id === 'counter3' ? 'K' : '+');
            setTimeout(updateCount, 100);
          } else {
            counter.innerText = target + (counter.id === 'counter3' ? 'K' : '+');
          }
        };

        updateCount();
      });
    }
  }
};
</script>

<template>
 <div class="banner">
    <div class="counter-container">
      <div class="counter" id="counter1" data-target="29">0+</div>
      <div class="label">Years of Experienced</div>
    </div>
    <img class="separator" src="/src/assets/counter-shap1.png" alt="separator">
    <div class="counter-container">
      <div class="counter" id="counter2" data-target="200">0+</div>
      <div class="label">Everyday Online Delivery</div>
    </div>
    <img class="separator" src="/src/assets/counter-shap1.png" alt="separator">
    <div class="counter-container">
      <div class="counter" id="counter3" data-target="20">0k</div>
      <div class="label">Client Satisfaction</div>
    </div>
    <img class="separator" src="/src/assets/counter-shap1.png" alt="separator">
    <div class="counter-container">
      <div class="counter" id="counter4" data-target="30">0+</div>
      <div class="label">Award Winning</div>
    </div>
  </div>
</template>


<style scoped lang="scss">
@use '../style/partials/variables' as *;

.banner {
  background-image: url('src/assets/milesim-bg.jpg');
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 300px;
  margin-left: 10px;
  color: #ef9e03;
}

.counter-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.counter {
  font-size: 6rem;
  font-weight: bolder;
  text-align: center;
}

.label {
  margin-top: 10px;
  font-size: 2.2rem;
  color: #fff;
  font-weight: bold;
}

.separator {
  height: 200px; 
  width: 20px;
  margin: 0 10px;
}
</style>
