<template>
  <div
    ref="HeroSectionRef"
    class="HeroSectionRef startSection heroSection relative h-dvh"
  >
    <div class="absolute -top-24 left-0 h-dvh w-full opacity-70">
      <img src="~/assets/img/Pattern.png" class="h-full w-full" />
    </div>
    <div
      ref="HeroSectionRefContainer"
      class="container relative z-10 mx-auto h-full px-4"
    >
      <div class="flex h-full flex-col justify-center">
        <h1
          class="mb-2 bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] bg-clip-text pt-4 text-5xl font-bold text-transparent md:text-center md:text-7xl"
        >
          {{ $t("introSectionTitle1") }}
        </h1>

        <div>
          <p class="text-lg font-medium text-paragraph md:text-center">
            {{ $t("introSectionTitle1Paragraph1") }}
          </p>
          <p class="text-lg font-medium text-paragraph md:text-center">
            {{ $t("introSectionTitle1Paragraph2") }}.
          </p>
        </div>
        <button
          class="mx-auto mt-7 w-full rounded-full bg-hookYellow px-7 py-2 text-lg font-medium shadow-[0_0_20px_rgba(255,193,7,0.7)] transition-all duration-500 ease-in-out hover:shadow-[0_0_35px_rgba(255,193,7,0.7)] sm:w-fit"
        >
          <span class="button-text">{{ $t("introSectionButton") }}</span>
        </button>
        <div
          class="mx-auto mt-16 size-10 cursor-pointer"
          @click="scrollToNextSection"
        >
          <img src="~/assets/img/scrollThree2.gif" alt="" />
        </div>
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
const HeroSectionRefContainer = ref();
const getPathWithoutLocale = (path: string) => {
  const segments = path.split("/");
  if (segments[1] && segments[1].length === 2) {
    return `/${segments.slice(2).join("/")}`;
  }
  return path;
};
const adjustedPath = computed(() => getPathWithoutLocale(route.path));
onMounted(() => {
  gsap.from(HeroSectionRefContainer.value, {
    opacity: 0,
    y: 200,
    duration: 1,
    ease: "power3.out",
  });
});

const scrollToNextSection = () => {
  const whatUsSection = document.querySelector(".whatUsSection");
  if (whatUsSection) {
    whatUsSection.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
.HeroSectionRef {
  /* background-image: url("~/assets/img/Pattern.png");
  background-size: cover;
  background-position: center; */
}
</style>
