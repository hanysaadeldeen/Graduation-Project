<template>
  <div
    class="card rounded-xl overflow-hidden py-14 px-7 bg-[#18181B] w-[400px] h-[300px] flex-shrink-0 relative"
  >
    <h4 class="text-white text-2xl font-medium mb-3">
      {{ title }}
    </h4>
    <p class="text-[#A1A1AA] text-base font-normal max-sm:text-center">
      {{ description }}
    </p>
    <div class="flex items-center justify-between mt-10">
      <a
        :href="link"
        class="decoration-clone cursor-pointer"
        :style="{ color: color }"
      >
        learn more
      </a>
      <i
        class="fa-solid fa-arrow-right text-xl cursor-pointer text-[#A1A1AA]"
      ></i>
    </div>
    <div
      class="absolute w-14 h-14 rounded-full -top-5 -right-5"
      :style="{ background: color }"
    ></div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  title: string;
  description: string;
  link: string;
  color: string;
};

defineProps<Props>();
</script>

<style scoped></style>
