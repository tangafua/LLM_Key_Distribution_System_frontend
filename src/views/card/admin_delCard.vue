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
      deleteCard() {
        if (!this.card) {
          this.$message.error('请先选择一个卡段');
          return;
        }
        axios.delete('http://localhost:5000/admin_delCard', {
          params: {
            card_id: this.card.card_id
          }
        })
        .then((res) => {
          console.log(res);
          if (res.data.status === 1) {
            this.$emit('deleted'); 
            this.$message({
              type: 'success',
              message: '删除成功'
            });
          } else {
            this.$message.error('删除失败');
          }
        })
        .catch((error) => {
          console.error('删除出错:', error);
          this.$message.error('删除出错，请重试');
        });
      }
    }
  };
  </script>
  