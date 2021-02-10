<template>
  <div>user list component awfawefwae</div>
  <!-- <span v-for="user in userList" :key="user.id">{{ user.name }}</span> -->
  <user-badge :user="user" ref="userBadge"></user-badge>
  <button @click="showBadge">show badge element</button>
  <button @click="fireEvent">emit one event</button>
  <a-input></a-input>
  <a-button type="primary" >waefwae</a-button>
  <a-switch >wefwef</a-switch>
  <div class="flex">
    <div class="h-12 w-12">wafewef</div>
  </div>
</template>
<script lang="ts" setup>
import UserBadge from './user-badge.vue';
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
