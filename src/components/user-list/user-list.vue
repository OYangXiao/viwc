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
import { reactive, ref, watch, watchEffect, computed, getCurrentInstance } from 'vue';
import { root } from './root';

const user = reactive({ name: 'oyx', gender: 'male' });
const userBadge = ref(null);
const showBadge = () => {
  console.log(userBadge);
};

setTimeout(() => {
  root.props.name = 'ooo';
}, 2000);


const doSomething = () => {
  return user
};

const fireEvent = ()=>{
  
}

root.instance = getCurrentInstance();
</script>
