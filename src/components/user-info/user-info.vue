<template>
  <div class="info-text" style="color: red; font-size: 20px; margin-top: 20px">this is USER INFO component, data is {{data}}</div>
</template>
<style scoped>
.info-text {
  background-color: chocolate;
}
</style>
<script lang="ts" setup>
const data = 'abc'
</script>
