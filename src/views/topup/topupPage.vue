<template>
    <div>
        <Header />
        <div class="mainContainer">
            <user_navigation />
            <div class="content">
              <el-form :model="topup" label-width="120px">
                  <el-form-item label="充值金额">
                      <el-input v-model="topup.money" style="width: 100%;"></el-input>
                  </el-form-item>
                  <el-form-item>
                      <el-button type="primary" @click="handleTopup">充值</el-button>
                  </el-form-item>
              </el-form>
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
    },
    data() {
      return {
        topup: {
          money: ''
        }
      };
    },
    methods: {
      handleTopup() {
        console.log("充值金额:", this.topup.money);
      }
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
  
.el-form {
  width: 400px;
}
</style>
  