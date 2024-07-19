<script>
import ListitemIcon1 from '../assets/H2-fe1.png';
import Icon2 from '../assets/H2-fe2.png';
import Icon3 from '../assets/H2-fe3.png';
import Icon4 from '../assets/H2-fe4.png';

export default {
  name: 'FeatureLists',
  data() {
    return {
      features: [
        {
          icon: ListitemIcon1,
          title: 'Natural Farming',
          description: 'We have a need to make these<br>connections literal.',
        },
        {
          icon: Icon2,
          title: 'Quality Product',
          description: 'We have a need to make these<br>connections literal.',
        },
        {
          icon: Icon3,
          title: 'Free Delivery',
          description: 'We have a need to make these<br>connections literal.',
        },
        {
          icon: Icon4,
          title: 'Always Fresh',
          description: 'We have a need to make these<br>connections literal.',
        },
      ],
    };
  },
};
</script>

<template>
    <div class="feature-list-container">
    <div class="feature-list">
      <div class="feature-item" v-for="feature in features" :key="feature.title">
        <img :src="feature.icon" :alt="feature.title" class="feature-icon" />
        <div class="feature-text">
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description" v-html="feature.description"></p>
        </div>
      </div>
    </div>
  </div>
  </template>

<style scoped lang="scss">
@use'/src/style/general.scss'as*;

.feature-list-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 300px;
  background-color: #FBF4E6;
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto;
}

.feature-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.feature-item {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  flex: 1;
  padding: 20px;
}

.feature-icon {
  width: 70px;
  height: 70px;
  margin-right: 20px;
}

.feature-text {
  display: flex;
  flex-direction: column;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.feature-description {
  font-size: 1rem;
  color: #666;
}
</style>