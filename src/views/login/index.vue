<template>
  <div class="index-page">
    <el-card class="index-card">
      <el-form label-width="70px">
        <h1 class="index-title">欢迎使用API发卡系统</h1>
        <el-form-item class="path-btn">
          <el-button type="primary" @click="adminPath">管理员入口</el-button>
          <el-button type="primary" @click="userPath">普通用户入口</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import router from '@/router';

export default {
  methods: {
    adminPath() {
      router.push('admin_login');
    },
    userPath() {
      router.push('user_login');
    }
  }
};
</script>

<style scoped>
.index-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ghostwhite;
}

.index-card {
  width: 400px;
  padding: 20px;
  background-color: #fff;
}

.index-title {
  text-align: center;
  margin-bottom: 20px;
}

.path-btn {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
