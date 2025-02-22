<template>
  <div
    class="px-5 py-7 rounded-2xl bg-[#131619] relative"
    :class="id === 2 ? 'xl:-translate-y-5' : 'xl:translate-y-2'"
  >
    <div :class="id === 2 ? 'label' : 'hidden'">Most Popular</div>
    <div class="mb-8">
      <h1 class="text-white text-3xl font-bold relative mb-3 tracking-wider">
        {{ title
        }}<span
          class="text-base text-paragraph"
          :class="id === 1 ? 'hidden' : ''"
        >
          /Year</span
        >
      </h1>
      <h1 class="text-paragraph text-xl font-bold relative mb-5 tracking-wider">
        {{ description }}
      </h1>
      <div class="content flex flex-col gap-7 mt-7">
        <div
          class="flex items-center gap-4"
          v-for="(item, index) in content"
          :key="index"
        >
          <i class="fa-solid fa-check text-secondary"></i>
          <p class="text-white">{{ item }}</p>
        </div>
      </div>
    </div>
    <button
      class="py-4 w-full capitalize rounded-xl bg-gradient-to-l from-primary to-secondary text-white font-bold tracking-wider text-2xl"
    >
      {{ btn }}
    </button>
  </div>
</template>

<script setup lang="ts">
type Props = {
  id: number;
  title: string;
  description: string;
  content: string[];
  btn: string;
};
defineProps<Props>();
</script>

<style scoped>
.label {
  position: absolute;
  writing-mode: vertical-rl;
  background-color: #537895;
  color: white;
  font-weight: bold;
  padding: 10px 10px 35px 10px;
  font-size: 18px;
  top: 0;
  right: 20px;
  width: 40px;
}
.label::before {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  border-style: solid;
  border-color: transparent transparent #131619;
  border-width: 20px;
}
</style>
