<template>
    <div>
      <Header />
      <div class="mainContainer">
        <user_navigation />
        <div class="content">
          <div class="intro">
            <h1 class="intro-head">使用说明</h1>
            <span>本平台支持的模型有:llama-3-chat | gpt-3.5-turbo | gpt-4-turbo</span>
          </div>
          <div class="instruction">
            <h1 class="instruction-head">使用教程</h1>
            <span>充值账户--分配卡段--使用模型</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '../../components/header.vue';
  import user_navigation from '../../components/user_navigation.vue';
  
  export default {
    components: {
      Header,
      user_navigation
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
    color: #111;
  }

  </style>
  