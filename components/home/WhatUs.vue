<template>
  <section class="whatUsSection relative h-screen">
    <div class="container mx-auto px-4 h-full flex justify-center items-center">
      <div
        class="flex max-md:flex-col justify-between items-center gap-20 md:gap-10 w-full"
      >
        <h1
          v-html="$t('whatUsSectionTitle')"
          class="font-bold bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent w-full md:w-[536px]"
          :class="
            locale === 'ar'
              ? 'text-xl md:text-[50px] md:leading-[60px]'
              : 'text-xl md:text-4xl'
          "
        ></h1>
        <p
          class="text-paragraph font-semibold w-full md:w-[700px]"
          :class="
            locale === 'ar'
              ? 'text-lg md:text-2xl'
              : 'text-lg md:text-xl tracking-wider '
          "
        >
          {{ $t("whatUsSectionDescription") }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>

<style scoped></style>
