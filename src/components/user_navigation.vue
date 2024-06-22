<template>
  <el-menu
    class="el-menu-vertical-demo"
    background-color="#333"
    text-color="#fff"
    active-text-color="#ffd04b"
    :default-active="activeIndex"
    @select="handleSelect"
  >
    <el-menu-item index="1">
      <span>模型</span>
    </el-menu-item>
    <el-menu-item index="2">
      <span>充值</span>
    </el-menu-item>
    <el-menu-item index="3">
      <span>卡段分配</span>
    </el-menu-item>
    <el-menu-item index="4">
      <span>使用记录</span>
    </el-menu-item>
    <el-menu-item index="5">
      <span>个人中心</span>
    </el-menu-item>
    <el-menu-item index="6">
      <span>使用说明</span>
    </el-menu-item>
  </el-menu>
</template>


<script>
export default {
  data() {
    return {
      activeIndex: '6'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push({ path: this.getPathByIndex(key) });
    },
    getPathByIndex(index) {
      const paths = {
        '1': '/user_model',
        '2': '/user_topup',
        '3': '/user_card',
        '4': '/user_record',
        '5': '/user_info',
        '6': '/user_notice'
      };
      return paths[index] || '/';
    }
  }
};
</script>

<style scoped>
.el-menu-vertical-demo {
  width: 200px;
  min-height: 100vh;
  border-right: 1px solid #ddd;
}

.submenu-title {
  color: #ffd04b;
  font-size: 18px;
}

.submenu-item {
  background-color: #444;
  padding-left: 20px; 
}
</style>
