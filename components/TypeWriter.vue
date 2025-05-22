<template>
  <span ref="target" class="typed-text"></span>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Writer from "t-writer.js";

const target = ref(null);

onMounted(() => {
  const writer = new Writer(target.value, {
    loop: true,
    typeColor: "white",
  });

  writer
    .type("👤 Who is our most profitable customer?")
    .rest(1000)
    .clear()
    .type("✨ Explore our features")
    .rest(1000)
    .clear()
    .type("📞 Contact us anytime")
    .rest(1000)
    .clear()
    .start();
});
</script>

<style scoped>
.typed-text {
  font-weight: 500;
  font-size: 16px;
}
</style>
