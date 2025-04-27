<template>
  <div ref="HeroSectionRef" class="startSection heroSection relative h-dvh">
    <div class="container relative mx-auto h-full px-4">
      <div class="flex h-full flex-col justify-center">
        <h1
          class="mb-10 bg-gradient-to-r from-[#FFFFFF] to-[#71717A] bg-clip-text pt-4 text-5xl font-bold text-transparent md:text-center md:text-7xl"
        >
          {{ $t("introSectionTitle1") }}
        </h1>

        <div>
          <p class="text-xl font-semibold text-paragraph md:text-center">
            {{ $t("introSectionTitle1Paragraph1") }}
          </p>
          <p class="text-xl font-semibold text-paragraph md:text-center">
            {{ $t("introSectionTitle1Paragraph2") }}.
          </p>
          <p class="text-xl font-semibold text-paragraph md:text-center">
            {{ $t("introSectionTitle1Paragraph3") }}
          </p>
        </div>
        <button
          class="mx-auto mt-10 w-full rounded-full border px-7 py-2 transition-all duration-500 ease-in-out sm:w-fit"
          :class="
            adjustedPath === '/' ? 'text-white' : 'border-black text-black'
          "
        >
          <span class="button-text">{{ $t("introSectionButton") }}</span>
        </button>
        <button
          class="mt-8 px-7 py-2"
          :class="
            adjustedPath === '/' ? 'text-white' : 'border-black text-black'
          "
        >
          <span class="button-text">{{ $t("Learn more") }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// <div
//       class="absolute left-0 top-0 h-screen w-full bg-gradient-to-b from-primary to-[#09090B]"
//     ></div>
import { gsap } from "gsap";
const route = useRoute();
const HeroSectionRef = ref();
const getPathWithoutLocale = (path: string) => {
  const segments = path.split("/");
  if (segments[1] && segments[1].length === 2) {
    return `/${segments.slice(2).join("/")}`;
  }
  return path;
};
const adjustedPath = computed(() => getPathWithoutLocale(route.path));
onMounted(() => {
  gsap.from(HeroSectionRef.value, {
    opacity: 0,
    y: 200,
    duration: 1,
    ease: "power3.out",
  });
});
</script>

<style scoped></style>
