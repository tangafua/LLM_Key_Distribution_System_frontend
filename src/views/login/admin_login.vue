<template>
  <div class="login-page">
    <el-card class="login-card">
      <el-form :model="loginForm" ref="loginForm" :rules="rules" label-width="80px">
        <h3 class="login-title">管理员登录</h3>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="OnLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import router from '@/router';

export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    };
  },
  methods: {
    ...mapActions(['login']),
    OnLogin() {
      axios.post('http://127.0.0.1:4523/m1/4663854-4314933-default/admin_login', {
        username: this.loginForm.username,
        password: this.loginForm.password
      })
      .then((res) => {
        if(res.data.status === 1){
          this.$message.success("登录成功");
          this.login({
            type: '管理员',
            username: this.loginForm.username
          });
          router.push('admin_model');
        } else {
          this.$message.error("登录失败");
        }    
      })
      .catch((error) => {
        console.log("登录错误", error);
        this.$message.error("登录错误");
      })
    }
  }
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ghostwhite;
}

.login-card {
  width: 400px;
  padding: 20px;
  background-color: #fff;
}

.login-title {
  text-align: center;
  margin-bottom: 20px;
}
</style>
