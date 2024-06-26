<template>
  <div>
    <Header />
    <div class="mainContainer">
      <admin_navigation />
      <div class="content">
        <modelSearch @search-results="handleSearchResults" />
        <div class="function_bar">
          <addModel />
          <editModel :model="selectedModel" />
          <delModel :model="selectedModel"/>
        </div>
        <admin_modelList :models="models" @selected_model="setSelectedModel"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import admin_modelList from './admin_modelList.vue';
import Header from '../../components/header.vue';
import admin_navigation from '@/components/admin_navigation.vue';
import modelSearch from '@/components/modelSearch.vue';
import addModel from './addModel.vue';
import editModel from './editModel.vue';
import delModel from './delModel.vue';

export default {
  components: {
    admin_modelList,
    Header,
    admin_navigation,
    modelSearch,
    addModel,
    editModel,
    delModel
  },
  data() {
    return {
      models: [],
      selectedModel: null
    };
  },
  methods: {
    async getAllModels() {
      try {
        const response = await axios.get('http://localhost:5000/allModels');
        if (response.data.status === 1) {
          this.models = response.data.data;
        } else {
          this.$message.error("读取失败");
        }
      } catch (error) {
        console.error("无法读取", error);
        this.$message.error("无法读取");
      }
    },
    setSelectedModel(model) {
      this.selectedModel = model;
    },
    handleSearchResults(results) {
      this.models = results;
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
}
</style>
