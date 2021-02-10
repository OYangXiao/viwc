<template>
  <div>user badge component {{ user }}</div>
</template>
<script lang="ts">
import { defineProps, watchEffect } from 'vue';
export default {
  props: ['user'],
  setup(props) {
    // const props = defineProps<{ user: { name: string; gender: string } }>();

    watchEffect(() => {
      console.log(props.user);
    });
    const sayIt = () => console.log('say it');
    return { sayIt };
  },
};
</script>
