<template>
  <div>
    <Header />
    <div class="mainContainer">
      <user_navigation />
      <div class="content">
        <h1 class="headText">我的卡段</h1>
        <div class="balanceField">
          <span>账户余额： </span><span>{{ leftBalance }}</span>  
        </div> 
        <user_cardSearch @search-results="handleSearchResults" />
        <div class="function_bar">
          <addUserCard />
          <editUserCard :card="selectedCard" />
          <delUserCard :card="selectedCard" @update-cards="getUserCards"/>
        </div>
        <userCardList :userCards="userCards" @selected_card="setSelectedCard"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/header.vue';
import user_navigation from '../../components/user_navigation.vue';
import userCardList from './userCardList.vue';
import addUserCard from './addUserCard.vue';
import editUserCard from './editUserCard.vue';
import delUserCard from './delUserCard.vue';
import user_cardSearch from '@/components/user_cardSearch.vue';
import axios from 'axios';

export default {
  components: {
    Header,
    user_navigation,
    addUserCard,
    editUserCard,
    delUserCard,
    userCardList,
    user_cardSearch
  },
  data() {
    return {
      leftBalance: 0,
      userCards: [],
      selectedCard: null
    };
  },
  mounted() {
    this.fetchBalance();
    this.getUserCards();
  },
  methods: {
    async fetchBalance() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/money', {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (response.data.status === 1) {
          this.leftBalance = response.data.data.balance;
        } else {
          this.$message.error('获取余额失败');
        }
      } catch (error) {
        console.error('获取余额失败:', error);
        this.$message.error('获取余额失败');
      }
    },
    async getUserCards() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/user_allCards', {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (response.data.status === 1) {
          this.userCards = response.data.data;
        } else {
          this.$message.error('读取失败');
        }
      } catch (error) {
        console.error('无法读取', error);
        this.$message.error('无法读取');
      }
    },
    handleSearchResults(cards) {
      this.userCards = cards;
    },
    setSelectedCard(card) {
      this.selectedCard = card;
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

.headText {
  color: #111;
}

.balanceField {
  color: #111;
  font-size: 20px;
}

.function_bar {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 20px;
}
</style>
