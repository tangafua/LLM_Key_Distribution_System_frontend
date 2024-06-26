<template>
  <div>
    <Header />
    <div class="mainContainer">
      <admin_navigation />
      <div class="content">
        <el-form :model="adminInfo" label-width="120px" class="userForm">
          <el-form-item label="用户名">
            <el-input v-model="adminInfo.admin_name" style="width: 100%;"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="adminInfo.admin_password" style="width: 100%;"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="adminInfo.admin_phone" style="width: 100%;"></el-input>
          </el-form-item>
          <el-form-item label="Email">
            <el-input v-model="adminInfo.admin_email" style="width: 100%;"></el-input>
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
import axios from 'axios';
import Header from '../../components/header.vue';
import admin_navigation from '@/components/admin_navigation.vue';

export default {
  components: {
    Header,
    admin_navigation
  },
  data() {
    return {
      adminInfo: {
        admin_name: '',
        admin_password: '',
        admin_phone: '',
        admin_email: ''
      }
    };
  },
  methods: {
    async fetchAdminInfo() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/admin_info', {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true
        });
        if (response.data.status === 1) {
          this.adminInfo = response.data.data;
        } else {
          this.$message.error(response.data.msg);
        }
      } catch (error) {
        console.error('获取管理员信息失败:', error);
      }
    },
    async submitForm() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post('http://localhost:5000/edit_admin_info', this.adminInfo, {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true
        });
        if (response.data.status === 1) {
          this.$message.success('信息更新成功');
        } else {
          this.$message.error(response.data.msg);
        }
      } catch (error) {
        console.error('提交管理员信息失败:', error);
      }
    },
    resetForm() {
      this.fetchAdminInfo();
    }
  },
  created() {
    this.fetchAdminInfo();
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
