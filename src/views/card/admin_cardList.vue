<template>
    <el-table :data="cards">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="card_id" label="卡段编号"></el-table-column>
        <el-table-column prop="user_id" label="用户编号"></el-table-column>
        <el-table-column prop="user_name" label="用户名"></el-table-column>
        <el-table-column prop="api_key" label="密钥"></el-table-column>
        <el-table-column prop="left" label="剩余额度"></el-table-column>
        <el-table-column prop="status" label="卡段状态"></el-table-column>
    </el-table>
</template>
  
<script>
export default {
    props: {
        models: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            cards: [
                {
                    card_id: '1',
                    user_id:'1',
                    user_name:'testuser',
                    api_key: 'test_api',
                    left: '20',
                    status: '可用'
                },
                {
                    card_id: '2',
                    user_id:'1',
                    user_name:'testuser',
                    api_key: 'test_API',
                    left: '0',
                    status: '不可用'
                }
            ]
        };
    },
    methods: {
        
    }
};
</script>
