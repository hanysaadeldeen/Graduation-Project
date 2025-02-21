<template>
  <div class="sectionInfo w-full sm:max-w-[640px] relative flex flex-col gap-5">
    <h1
      v-html="$t(about)"
      class="font-bold text-4xl sm:text-5xl leading-[3rem] sm:leading-[4rem] bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent"
    ></h1>
    <p class="text-paragraph font-medium leading-6 text-xl">
      {{ description && $t(description) }}
    </p>
  </div>
</template>

<script setup lang="ts">
type Props = {
  about: string;
  description?: string;
};
defineProps<Props>();
</script>

<style scoped>
.sectionInfo {
  width: 640px;
}

@media (max-width: 768px) {
  .sectionInfo {
    width: 100%;
  }
}
</style>
