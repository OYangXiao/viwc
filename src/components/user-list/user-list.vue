<template>
  <div class="title">user list component awfawefwae</div>
  <div class="flex">
    <div class="h-12 w-12">wafewef</div>
  </div>
</template>
<style scoped>
.title{
  font-size: 40px;
  color:darkolivegreen;
}
</style>
<script lang="ts" setup>
import { getCurrentInstance } from 'vue';
import { root } from './root';

setTimeout(() => {
  root.props.name = 'ooo';
}, 2000);

root.instance = getCurrentInstance();
</script>
