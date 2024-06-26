<template>
    <div>
      <el-form-item>
        <el-button type="danger" @click="forbidCard" :disabled="!card">禁用</el-button>
      </el-form-item>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: ['card'],
    methods: {
      async forbidCard() {
        try {
          const response = await axios.put('http://localhost:5000/admin_forbidCard', { card_id: this.card.card_id });
          if (response.data.status === 1) {
            this.$message.success(response.data.message);
          } else {
            this.$message.error("禁用失败");
          }
        } catch (error) {
          console.error("禁用错误", error);
          this.$message.error("禁用错误");
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
  