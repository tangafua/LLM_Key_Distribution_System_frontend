<template>
    <div>
      <el-form-item>
        <el-button type="primary" @click="activeCard" :disabled="!card">启用</el-button>
      </el-form-item>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: ['card'],
    methods: {
      async activeCard() {
        try {
          const response = await axios.put('http://localhost:5000/admin_activeCard', { card_id: this.card.card_id });
          if (response.data.status === 1) {
            this.$message.success(response.data.message);
          } else {
            this.$message.error("启用失败");
          }
        } catch (error) {
          console.error("启用错误", error);
          this.$message.error("启用错误");
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .dialog-footer {
      text-align: center;
  }
  </style>
  