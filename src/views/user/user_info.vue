<template>
  <div>
    <Header />
    <div class="mainContainer">
      <user_navigation />
      <div class="content">
        <el-form :model="userInfo" label-width="120px" class="userForm">
          <el-form-item label="用户名">
            <el-input v-model="userInfo.user_name" style="width: 100%;"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="userInfo.user_password" style="width: 100%;"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="userInfo.user_phone" style="width: 100%;"></el-input>
          </el-form-item>
          <el-form-item label="Email">
            <el-input v-model="userInfo.user_email" style="width: 100%;"></el-input>
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
import user_navigation from '../../components/user_navigation.vue';
import axios from 'axios';

export default {
  components: {
    Header,
    user_navigation
  },
  data() {
    return {
      userInfo: {
        user_name: '',
        user_password: '',
        user_phone: '',
        user_email: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post('http://localhost:5000/edit_user_info', this.userInfo, {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log('用户信息已提交:', response.data);
        if (response.data.status === 1) {
          this.$message.success(response.data.msg);
        } else {
          this.$message.error(response.data.msg);
        }
      } catch (error) {
        console.error('提交用户信息时发生错误:', error);
        this.$message.error('提交用户信息时发生错误');
      }
    },
    resetForm() {
      this.userInfo = {
        user_name: '',
        user_password: '',
        user_phone: '',
        user_email: ''
      };
    }
  },
  created() {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:5000/user_info', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        if (response.data.status === 1) {
          this.userInfo = response.data.data;
        } else {
          this.$message.error(response.data.msg);
        }
      })
      .catch(error => {
        console.log('获取用户信息错误', error);
        this.$message.error('获取用户信息错误');
      });
    } else {
      this.$message.error('未登录或登录已过期');
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
