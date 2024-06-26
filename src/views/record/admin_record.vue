<template>
    <div>
        <Header />
        <div class="mainContainer">
            <admin_navigation />
            <div class="content">
                <admin_recordSearch @search-results="handleSearchResults" />
                <el-table :data="records">
                    <el-table-column prop="record_id" label="记录编号"></el-table-column>
                    <el-table-column prop="user_id" label="用户编号"></el-table-column>
                    <el-table-column prop="user_name" label="用户名"></el-table-column>
                    <el-table-column prop="model_id" label="模型编号"></el-table-column>
                    <el-table-column prop="model_name" label="模型名称"></el-table-column>
                    <el-table-column prop="card_id" label="卡段编号"></el-table-column>
                    <el-table-column prop="card_name" label="卡段名称"></el-table-column>
                    <el-table-column prop="token_cost" label="花费token数"></el-table-column>
                    <el-table-column prop="price_cost" label="花费金额"></el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Header from '../../components/header.vue';
import admin_navigation from '@/components/admin_navigation.vue';
import admin_recordSearch from '@/components/admin_recordSearch.vue';

export default {
    components: {
      Header,
      admin_navigation,
      admin_recordSearch
    },
    data() {
        return {
            records: [

            ]
        }
    },
    mounted() {
        this.getAllRecords();
    },
    methods: {
        async getAllRecords() {
            try {
                const response = await axios.get('http://localhost:5000/admin_allRecords');
                console.log(response);
                if (response.data.status === 1) {
                    this.records = response.data.data;
                } else {
                    this.$message.error("读取失败");
                }
            } catch (error) {
                console.error("无法读取", error);
                this.$message.error("无法读取");
            }
        },
        handleSearchResults(results) {
            this.records = results;
        }
    }
}
</script>

<style scoped>
.mainContainer {
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
  background-color: #fff;
}

.functionBar {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 20px;
}
</style>
