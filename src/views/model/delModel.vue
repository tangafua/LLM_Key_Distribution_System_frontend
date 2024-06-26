<template>
	<el-button type="danger" @click="deleteModel" :disabled="!model">删除</el-button>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
	props: {
	  model: {
		type: Object,
		required: false
	  }
	},
	methods: {
	  deleteModel() {
		if (!this.model) {
		  this.$message.error('请先选择一个模型');
		  return;
		}
  
		axios.delete('http://localhost:5000/admin_delModel', {
		  params: {
			model_id: this.model.model_id
		  }
		})
		.then((res) => {
		  console.log(res);
		  if (res.data.code === 1) {
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
  