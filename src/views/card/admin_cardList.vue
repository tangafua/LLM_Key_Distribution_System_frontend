<template>
<el-table :data="cards" @selection-change="handleCardSelection">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="card_id" label="卡段编号"></el-table-column>
        <el-table-column prop="user_id" label="用户编号"></el-table-column>
        <el-table-column prop="user_name" label="用户名"></el-table-column>
        <el-table-column prop="api_key" label="密钥"></el-table-column>
        <el-table-column prop="balance" label="剩余额度"></el-table-column>
        <el-table-column prop="card_status" label="卡段状态"></el-table-column>
    </el-table>
</template>


<script>
export default {
  props: {
    cards: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleCardSelection(val) {
      if (val.length === 1) {
        this.$emit('selected_card', val[0]); 
      } else if (val.length > 1) {
        this.$emit('selected_card', null);
        this.$message.error('只能选中一个卡段');
      } else {
        this.$emit('selected_card', null);
      }
    }
  }
};
</script>
