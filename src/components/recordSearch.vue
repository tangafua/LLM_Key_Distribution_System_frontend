<template>
    <div class="recordSearchBar">
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="模型名称">
                <el-input v-model="modelName" placeholder="请输入模型名称"></el-input>
            </el-form-item>
            <el-form-item label="卡段名称">
                <el-input v-model="cardName" placeholder="请输入卡段名称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="search">查询</el-button>
                <el-button @click="reset">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            modelName: '',
            cardName: ''
        };
    },
    methods: {
        async search() {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('http://localhost:5000/user_searchRecord', {
                    headers: { Authorization: `Bearer ${token}` },
                    params: {
                        model_name: this.modelName,
                        card_name: this.cardName
                    }
                });
                if (res.data.status === 1) {
                    this.$emit('search-results', res.data.data);
                    this.$message.success('搜索成功');
                } else {
                    this.$message.error('没有找到符合条件的使用记录');
                }
            } catch (error) {
                this.$message.error('搜索错误');
                console.error('搜索错误:', error);
            }
        },
        reset() {
            this.modelName = '';
            this.cardName = '';
            this.$emit('reset-search');
        }
    }
}
</script>

<style scoped>
.recordSearchBar {
    padding: 20px;
    background-color: #fff;
}
</style>
