<template>
  <div>
    <Header />
    <div class="mainContainer">
      <user_navigation />
      <div class="content">
        <div class="function_bar">
          <modelSearch />
        </div>
        <user_modelList :models="models" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import user_modelList from './user_modelList.vue';
import Header from '../../components/header.vue';
import user_navigation from '../../components/user_navigation.vue';
import modelSearch from '@/components/modelSearch.vue';

export default {
  components: {
    user_modelList,
    Header,
    user_navigation,
    modelSearch
  },
  data() {
    return {
      models: []
    };
  },
  methods: {
    async getAllModels() {
      try {
        const response = await axios.get('http://127.0.0.1:4523/m1/4663854-4314933-default/allModels');
        if (response.data.status === 1) {
          this.models = response.data.data;
        } else {
          this.$message.error("读取失败");
        }
      } catch (error) {
        console.error("无法读取", error);
        this.$message.error("无法读取");
      }
    }
  },
  mounted() {
    this.getAllModels();
  }
};
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

.function_bar {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 20px;
}
</style>
