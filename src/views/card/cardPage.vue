<template>
  <div>
    <Header />
    <div class="mainContainer">
      <Navigation />
      <div class="content">
        <div class="function_bar">
          <forbidCard />
        </div>
        <cardList :cards="cards" />
      </div>
    </div>
  </div>
</template>
  
<script>
import forbidCard from './forbidCard.vue';
import cardList from './cardList.vue';
import Header from '../../components/header.vue';
import user_navigation from '../../components/user_navigation.vue';

  export default {
    components: {
      forbidCard,
      cardList,
      Header,
      user_navigation
    },
    data() {
      return {
        cards: []
      };
    },
    methods: {
      // 你可以在这里添加获取卡片列表的逻辑
    }
  };
</script>
  
<style scoped>
.mainContainer {
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
  background-color: #fff;
}

.function_bar {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 20px;
}
</style>
  