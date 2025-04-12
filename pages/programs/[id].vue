<template>
  <div class="pt-4 font-bold p-2">this is id</div>
</template>

<script setup lang="ts">
const route = useRoute();
console.log(route.params.id);
</script>

<style scoped></style>
