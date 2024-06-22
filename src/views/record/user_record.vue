<template>
    <div>
      <Header />
      <div class="mainContainer">
        <user_navigation />
        <div class="content">
          <div class="functionBar">
            <recordSearch />
          </div>
          <el-table :data="records">
            <el-table-column prop="record_id" label="记录编号"></el-table-column>
            <el-table-column prop="model_name" label="模型名称"></el-table-column>
            <el-table-column prop="card_name" label="卡段名称"></el-table-column>
            <el-table-column prop="token_num" label="花费token数"></el-table-column>
            <el-table-column prop="taken_price" label="花费金额"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '../../components/header.vue';
  import user_navigation from '../../components/user_navigation.vue';
  import recordSearch from '@/components/recordSearch.vue';
  
  export default {
    components: {
      Header,
      user_navigation,
      recordSearch
    },
    data() {
      return {
        records: [
          {
            record_id: '1',
            model_name: 'test_model1',
            card_name: 'test_card1',
            token_num: '1000',
            taken_price: '30'
          }
        ]
      };
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
  
  .functionBar {
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    margin-bottom: 20px;
  }
  </style>
  