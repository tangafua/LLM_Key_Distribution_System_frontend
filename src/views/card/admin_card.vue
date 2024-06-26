<template>
  <div>
    <Header />
    <div class="mainContainer">
      <admin_navigation />
      <div class="content">
        <admin_cardSearch @search-results="handleSearchResults" />
        <div class="function_bar">
          <admin_delCard :card="selectedCard" @deleted="handleCardDeleted" />
          <admin_forbidCard :card="selectedCard"/>
          <admin_activeCard :card="selectedCard"/>
        </div>
        <admin_cardList :cards="cards" @selected_card="setSelectedCard" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from '../../components/header.vue';
import admin_navigation from '@/components/admin_navigation.vue';
import admin_cardList from './admin_cardList.vue';
import admin_cardSearch from '../../components/admin_cardSearch.vue';
import admin_delCard from './admin_delCard.vue';
import admin_forbidCard from './admin_forbidCard.vue';
import admin_activeCard from './admin_activeCard.vue';

export default {
  components: {
    Header,
    admin_delCard,
    admin_forbidCard,
    admin_activeCard,
    admin_cardSearch,
    admin_navigation,
    admin_cardList
  },
  data() {
    return {
      cards: [],
      selectedCard: null
    };
  },
  mounted() {
    this.getAllCard();
  },
  methods: {
    async getAllCard() {
      try {
        const response = await axios.get('http://localhost:5000/admin_allCards');
        if (response.data.status === 1) {
          this.cards = response.data.data;
        } else {
          this.$message.error("读取失败");
        }
      } catch (error) {
        console.error("无法读取", error);
        this.$message.error("无法读取");
      }
    },
    handleSearchResults(results) {
      this.cards = results;
    },
    setSelectedCard(card) {
      this.selectedCard = card;
    },
    handleCardDeleted() {
      this.getAllCard();
    }
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