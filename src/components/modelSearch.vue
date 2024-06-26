<template>
    <div class="modelSearchBar">
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="模型名称">
                <el-input v-model="name" placeholder="请输入模型名称"></el-input>
            </el-form-item>
            <el-form-item label="状态">
                <el-select v-model="state" placeholder="请选择模型状态" style="width: 200px;">
                    <el-option label="启用" value="1"></el-option>
                    <el-option label="禁用" value="0"></el-option>
                </el-select>
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
            name: '',
            state: '',
            models: []
        };
    },
    methods: {
        async search() {
            try {
                const res = await axios.get('http://localhost:5000/searchModel', {
                    params: {
                        model_name: this.name,
                        model_status: this.state
                    }
                });
                if (res.data.status === 1) {
                    this.$emit('search-results', res.data.data);
                    this.models = res.data.data;
                    console.log(this.models);
                    this.$message.success('搜索成功');
                } else {
                    this.$message.error('搜索失败');
                }
            } catch (error) {
                this.$message.error('搜索错误');
            }
        },
        reset() {
            this.name = '';
            this.state = '';
        }
    }
}
</script>
