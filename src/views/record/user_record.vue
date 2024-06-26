<template>
  <div>
    <Header />
    <div class="mainContainer">
      <user_navigation />
      <div class="content">
        <div class="functionBar">
          <recordSearch @search-results="updateRecords" @reset-search="getUserRecords" />
        </div>
        <el-table :data="records">
          <el-table-column prop="record_id" label="记录编号"></el-table-column>
          <el-table-column prop="model_name" label="模型名称"></el-table-column>
          <el-table-column prop="card_name" label="卡段名称"></el-table-column>
          <el-table-column prop="token_cost" label="花费token数"></el-table-column>
          <el-table-column prop="price_cost" label="花费金额"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
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
      records: []
    };
  },
  mounted() {
    this.getUserRecords();
  },
  methods: {
    async getUserRecords() {
      try {
        const token = localStorage.getItem('token'); 
        const response = await axios.get('http://localhost:5000/user_allRecords', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.data.status === 1) {
          this.records = response.data.data;
        } else {
          this.$message.error("读取失败");
        }
      } catch (error) {
        console.error("无法读取", error);
        this.$message.error("无法读取");
      }
    },
    updateRecords(records) {
      this.records = records;
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

.functionBar {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 20px;
}
</style>
