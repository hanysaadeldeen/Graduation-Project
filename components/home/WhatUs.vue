<template>
  <section class="whatUsSection relative h-screen">
    <div
      class="absolute -top-10 left-0 z-10 h-dvh w-full rotate-180 opacity-30"
    >
      <img src="~/assets/img/Pattern 3.webp" class="h-full w-full" />
    </div>
    <div
      class="container relative z-20 mx-auto flex h-[70%] items-center justify-center px-4"
    >
      <div class="flex w-full flex-col items-center justify-between gap-5">
        <h1
          class="mb-5 w-fit rounded-full border-2 bg-black px-10 py-4 text-center text-xl font-semibold text-white md:text-xl"
          style="box-shadow: inset 0 0 8px white"
        >
          {{ $t("whatUsSectionTitle") }}
        </h1>
        <div>
          <p
            class="w-full text-center text-2xl font-extrabold tracking-wide md:max-w-[1000px] md:text-4xl"
          >
            {{ $t("whatUsSectionDescription1") }}
          </p>
          <p
            class="mt-5 w-full text-center text-2xl font-medium tracking-wide text-black/60 max-sm:text-justify md:max-w-[1000px] md:text-2xl"
          >
            {{ $t("whatUsSectionDescription") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
