<template>
  <div
    class="px-5 py-7 rounded-2xl bg-[#131619] relative overflow-hidden group cursor-pointer"
  >
    <div class="mb-8 flex items-center justify-between gap-3">
      <i
        :class="[
          icon,
          'relative z-20 text-2xl  group-hover:text-white transition-all duration-500 ease-in-out',
        ]"
        :style="{ color: color }"
      ></i>
      <h4 class="text-white text-xl font-medium relative z-20">
        {{ $t(title) }}
      </h4>
    </div>

    <p
      class="text-[#A1A1AA] text-base font-normal relative z-20 transition-all duration-500 ease-in-out group-hover:text-white"
    >
      {{ $t(description) }}
    </p>
    <div
      class="absolute w-1 h-full top-0 z-10 transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-full"
      :class="locale === 'ar' ? 'left-0 ' : 'right-0'"
      :style="{ background: color }"
    ></div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  title: string;
  description: string;
  color: string;
  icon: string;
};

defineProps<Props>();

const { locale } = useI18n();
</script>

<style scoped>
.group:hover i {
  color: white !important;
}
</style>
