<template>
  <section class="whatUsSection relative h-screen">
    <div
      class="container mx-auto flex h-[70%] items-center justify-center px-4"
    >
      <div class="flex w-full flex-col items-center justify-between gap-10">
        <h1 class="w-full text-center text-4xl font-bold md:text-5xl">
          {{ $t("whatUsSectionTitle") }}
        </h1>
        <!-- <h1
          class="w-full bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl"
        >
          {{ $t("whatUsSectionTitle") }}
        </h1> -->
        <p
          class="w-full text-center text-2xl font-bold tracking-wide md:max-w-[1000px] md:text-3xl"
        >
          {{ $t("whatUsSectionDescription") }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
