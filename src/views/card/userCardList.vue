<template>
    <el-table :data="userCards">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="card_id" label="卡段编号"></el-table-column>
        <el-table-column prop="card_name" label="卡段名称"></el-table-column>
        <el-table-column prop="card_status" label="卡段状态"></el-table-column>
        <el-table-column prop="usedBalance" label="已用额度"></el-table-column>
        <el-table-column prop="leftBalance" label="剩余额度"></el-table-column>

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
            userCards: [
                {
                    card_id: '1',
                    card_name: 'userCard1',
                    card_status: '启用',
                    usedBalance: '10',
                    leftBalance: '30'
                }
            ]
        };
    },
    methods: {
        handleModelSelection(val) {
            if (val.length > 1) {
                this.$emit('selected_model', null);
                this.$message.error('只能选中一个模型');
            } else {
                this.$emit('selected_model', val[0] || null);
            }
        }
        
    }
};
</script>
