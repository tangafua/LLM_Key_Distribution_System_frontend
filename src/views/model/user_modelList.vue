<template>
    <el-table :data="models">
        <el-table-column prop="model_id" label="模型编号" width="80"></el-table-column>
        <el-table-column prop="model_name" label="模型名称"></el-table-column>
        <el-table-column prop="model_status" label="模型状态"></el-table-column>
        <el-table-column prop="model_price" label="模型价格"></el-table-column>
        <el-table-column prop="model_description" label="模型描述"></el-table-column>
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

    }
};
</script>
