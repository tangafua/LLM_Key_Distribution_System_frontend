<template>
    <div>
        <Header />
        <div class="mainContainer">
            <admin_navigation />
            <div class="content">
                <admin_cardSearch />
                <div class="function_bar">
                  <delUserCard />
                  <forbidUserCard />
                </div>
                <admin_cardList/>
            </div>
        </div>
    </div>
</template>


<script>
import Header from '../../components/header.vue';
import admin_navigation from '@/components/admin_navigation.vue';
import admin_cardList from './admin_cardList.vue';
import delUserCard from './delUserCard.vue';
import forbidUserCard from './forbidUserCard.vue';
import admin_cardSearch from '../../components/admin_cardSearch.vue';


  export default {
    components: {
      Header,
      delUserCard,
      forbidUserCard,
      admin_cardSearch,
      admin_navigation,
      admin_cardList
    },
    data() {
        return {

        };
    },
    methods: {
      
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
}

</style>