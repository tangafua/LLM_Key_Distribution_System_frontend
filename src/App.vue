<script setup>
import {RouterView} from 'vue-router'
</script>

<template>
    <div id="main">
        <router-view />
    </div>
</template>

<style scoped>
#main{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
</style>
