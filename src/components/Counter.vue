<script>

export default {
    name: 'Counter',
    mounted() {
    this.startCounters();
  },
  methods: {
    startCounters() {
        const counters = this.$el.querySelectorAll('.counter');
        const speed = 5000;

        counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText.replace(/[+K]/g, '');
          const increment = target / speed;

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
}   
</script>

<template>
    <div class="banner">
        <div class="counter" id="counter1" data-target="29">0+</div>
        <div class="counter" id="counter2" data-target="200">0+</div>
        <div class="counter" id="counter3" data-target="20">0K</div>
        <div class="counter" id="counter4" data-target="30">0+</div>
    </div>
    
   
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.banner{
    background-image: url('src/assets/milesim-bg.jpg');
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
}



</style>