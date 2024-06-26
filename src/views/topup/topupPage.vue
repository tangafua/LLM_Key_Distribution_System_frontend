<template>
  <div>
    <Header />
    <div class="mainContainer">
      <user_navigation />
      <div class="content">
        <el-form :model="topup" label-width="120px">
          <el-form-item label="充值金额">
            <el-input v-model.number="topup.money" style="width: 100%;"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleTopup">充值</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/header.vue';
import user_navigation from '../../components/user_navigation.vue';
import axios from 'axios';

export default {
  components: {
    Header,
    user_navigation
  },
  data() {
    return {
      topup: {
        money: ''
      }
    };
  },
  methods: {
    async handleTopup() {
      try {
        const token = localStorage.getItem('token');
        const user_name = localStorage.getItem('user_name');
        console.log(user_name);
        const response = await axios.post('http://localhost:5000/topup', {
            user_name: user_name,
            money: this.topup.money 
        }, {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true
        });
        console.log('充值成功:', response.data);
        this.$message.success('充值成功');
      } catch (error) {
        console.error('充值失败:', error);
        this.$message.error('充值失败');
      }
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

.el-form {
  width: 400px;
}
</style>
