<template>
    <el-table :data="models">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="id" label="模型编号"></el-table-column>
        <el-table-column prop="name" label="模型名称"></el-table-column>
        <el-table-column prop="status" label="模型状态"></el-table-column>
        <el-table-column prop="price" label="模型价格"></el-table-column>
        <el-table-column prop="description" label="模型描述"></el-table-column>
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
