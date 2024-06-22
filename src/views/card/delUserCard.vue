<template>
    <el-button type="danger" @click="delete">删除</el-button>
  </template>
  
<script>
export default {
    props: {
        userCard: {
            type: Object,
            required: false
        }
    },
    methods: {
        async delete() {
            try {
                const res = await this.$test.get("/model/delete", {
                    params: {
                        modelId: this.model.id
                    }
                });
                if (res.data.code === 0) {
                    this.$message({
                        type: 'success',
                        message: '删除成功'
                    });
                } else {
                    this.$message.error('删除失败，请重试');
                }
            } catch (error) {
                this.$message.error('删除出错，请重试');
            }
        },
    }
};
</script>
  