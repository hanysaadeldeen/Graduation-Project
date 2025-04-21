<template>
  <div
    class="card relative h-[300px] w-[400px] flex-shrink-0 overflow-hidden rounded-xl bg-[#18181B] px-7 py-14"
  >
    <h2 class="mb-3 text-2xl font-medium text-white">
      {{ title }}
    </h2>
    <p class="text-base font-normal text-[#A1A1AA] max-sm:text-center">
      {{ description }}
    </p>
    <div class="mt-10 flex items-center justify-between">
      <a
        :href="link"
        class="cursor-pointer decoration-clone"
        :style="{ color: color }"
      >
        learn more
      </a>
      <i
        class="fa-solid fa-arrow-right cursor-pointer text-xl text-[#A1A1AA]"
      ></i>
    </div>
    <div
      class="absolute -right-5 -top-5 h-14 w-14 rounded-full"
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
