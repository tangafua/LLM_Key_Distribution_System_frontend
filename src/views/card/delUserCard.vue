<template>
    <el-button type="danger" @click="deleteCard" :disabled="!card">删除</el-button>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    props: {
      card: {
        type: Object,
        required: false
      }
    },
    methods: {
      async deleteCard() {
        if (!this.card) {
          this.$message.error('请先选择一个卡段');
          return;
        }
        try {
          const token = localStorage.getItem('token');
          const response = await axios.delete('http://localhost:5000/delCard', {
            params: {
              card_id: this.card.card_id
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
          });
          console.log(response);
          if (response.data.status === 1) {
            this.$message({
              type: 'success',
              message: '删除成功'
            });
            this.$emit('update-cards'); 
          } else {
            this.$message.error('删除失败');
          }
        } catch (error) {
          console.error('删除出错:', error);
          this.$message.error('删除出错，请重试');
        }
      }
    }
  };
  </script>
  