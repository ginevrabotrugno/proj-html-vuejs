<script>
export default {
  name: 'Counter',
  props: {
    backgroundClass: {
      type: String,
      default: ''
    },
    labelTextColor: {
      type: String,
      default: '#000'
    }
  },
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
            increment = (target * 1000) / speeds[counter.id] / 100; // Dividere per 1000 per contatore K
          } else if (counter.id === 'counter2') {
            increment = (target / speeds[counter.id]) * 100;
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

        // Reset contatore a 0 prima di iniziare l'aggiornamento
        counter.innerText = '0' + (counter.id === 'counter3' ? 'K' : '+');
        updateCount();
      });
    }
  }
};
</script>

<template>
  <div class="banner" :class="backgroundClass">
    <div class="counter-container">
      <div class="counter" id="counter1" data-target="29" :style="{ color: '$orange' }">0+</div>
      <div class="label" :style="{ color: labelTextColor }">Years of Experienced</div>
    </div>
      <img class="separator" src="/src/assets/counter-shap1.png" alt="separator">
    <div class="counter-container">
      <div class="counter" id="counter2" data-target="200" :style="{ color: '$orange' }">0+</div>
      <div class="label" :style="{ color: labelTextColor }">Everyday Online Delivery</div>
    </div>
    <img class="separator" src="/src/assets/counter-shap1.png" alt="separator">
    <div class="counter-container">
      <div class="counter" id="counter3" data-target="20" :style="{ color: '$orange' }">0k</div>
      <div class="label" :style="{ color: labelTextColor }">Client Satisfaction</div>
    </div>
    <img class="separator" src="/src/assets/counter-shap1.png" alt="separator">
    <div class="counter-container">
      <div class="counter" id="counter4" data-target="30" :style="{ color: '$orange' }">0+</div>
      <div class="label" :style="{ color: labelTextColor }">Award Winning</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
}

.home-counter {
  background-image: url('src/assets/milesim-bg.jpg');
  color: $orange;
}

.about-counter {
  background-color: #fff;
  color: $orange; 
}

.counter-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 25px 30px;
}

.counter {
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
}

.label {
  margin-top: 10px;
  font-size: 1.5rem;
  font-weight: 600;
}

.separator {
  height: 200px;
  width: 20px;
  margin: 0 10px;
}
</style>
