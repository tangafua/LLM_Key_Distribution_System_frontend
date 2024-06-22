<template>
  <div class="header">
    <div class="header-left">
      <span class="system-name">API发卡系统</span>
    </div>
    <div class="header-right">
      <span class="type">{{ type }}</span>
      <span class="username">{{ username }}</span>
      <el-button type="primary" @click="handleLogout">登出</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['type', 'username'])
  },
  methods: {
    ...mapActions(['logout']),
    handleLogout() {
      axios.post('http://127.0.0.1:4523/m1/4663854-4314933-default/logout')
        .then(response => {
          if (response.data.status === 1) {
            this.logout();
            this.$message({
              type: 'success',
              message: '登出成功'
            });
            this.$router.push('/');
          } else {
            this.$message.error('登出失败');
          }
        })
        .catch(error => {
          console.error('登出错误', error);
          this.$message.error('登出错误');
        });
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #333;
  color: #fff;
  height: 60px;
}

.header-left {
  display: flex;
  align-items: center;
}

.system-name {
  font-size: 20px;
  font-weight: bold;
}

.header-right {
  display: flex;
  align-items: center;
}

.username {
  margin-right: 20px;
  font-size: 16px;
}

.type {
  margin-right: 20px;
  font-size: 16px;
}

.el-button {
  margin: 0;
}
</style>
