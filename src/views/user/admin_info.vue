<template>
    <div>
      <Header />
      <div class="mainContainer">
        <admin_navigation />
        <div class="content">
          <el-form :model="userInfo" label-width="120px" class="userForm">
            <el-form-item label="用户名">
              <el-input v-model="userInfo.name" style="width: 100%;"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input type="password" v-model="userInfo.password" style="width: 100%;"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input v-model="userInfo.tel" style="width: 100%;"></el-input>
            </el-form-item>
            <el-form-item label="Email">
              <el-input v-model="userInfo.email" style="width: 100%;"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm">提交</el-button>
              <el-button @click="resetForm">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '../../components/header.vue';
  import admin_navigation from '@/components/admin_navigation.vue';
  
  export default {
    components: {
      Header,
      admin_navigation
    },
    data() {
      return {
        userInfo: {
          name: '',
          password: '',
          tel: '',
          email: ''
        }
      };
    },
    methods: {
      submitForm() {
        console.log("用户信息已提交:", this.userInfo);
        // 在这里添加提交表单的逻辑，例如通过API发送数据到服务器
      },
      resetForm() {
        this.userInfo = {
          name: '',
          password: '',
          tel: '',
          email: ''
        };
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
    padding: 40px;
    background-color: #fff;
  }
  
  .userForm {
    max-width: 600px;
    margin: 0 auto;
    background: #fff;
    padding: 20px;
  }
  
  .el-form-item {
    margin-bottom: 25px;
  }
  
  .el-form-item label {
    font-weight: bold;
    color: #333;
  }
  
  .el-input,
  .el-button {
    border-radius: 6px;
  }
  
  .el-button {
    margin-right: 15px;
  }
  
  .el-button:first-child {
    background-color: #409eff;
    color: white;
  }
  </style>
  