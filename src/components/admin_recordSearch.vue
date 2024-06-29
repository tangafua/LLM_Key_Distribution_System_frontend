<template>
    <div class="recordSearchBar">
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="用户名称">
                <el-input v-model="user_name" placeholder="请输入用户名称"></el-input>
            </el-form-item>
            <el-form-item label="模型名称">
                <el-input v-model="model_name" placeholder="请输入模型名称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="search">查询</el-button>
            </el-form-item>
        </el-form>
	</div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            user_name: '',
            model_name: '',
            cards: []
        };
    },
    methods: {
        async search() {
            try {
                const res = await axios.get("http://localhost:5000/admin_searchRecord", {
                    params: {
                        user_name: this.user_name,
                        model_name: this.model_name
                    }
                });
                console.log(res);
                if (res.data.status === 1) {
                    this.$emit('search-results', res.data.data);
                    this.$message.success('搜索成功');
                } else {
                    this.$message.error('没有找到符合条件的模型');
                }
            } catch (error) {
                this.$message.error('搜索错误');
            }
        }
    }
}
</script>
