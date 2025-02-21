<template>
  <div
    class="absolute top-0 left-0 w-full h-screen z-0 bg-gradient-to-b from-primary to-black"
  ></div>
  <section class="z-20 startSection heroSection h-screen relative">
    <div class="container mx-auto h-full relative px-4">
      <div class="h-full flex flex-col justify-center">
        <h1
          class="md:text-center mb-10 text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent"
        >
          Unleash the power of <br />
          intuitive finance
        </h1>

        <div>
          <p class="text-paragraph font-semibold text-xl md:text-center">
            Say goodbye to the outdated financial tools. Every small business
            owner,
          </p>
          <p class="text-paragraph font-semibold text-xl md:text-center">
            regardless of the background, can now manage their business like a
            pro. Simple.
          </p>
          <p class="text-paragraph font-semibold text-xl md:text-center">
            Intuitive. And never boring.
          </p>
        </div>
        <button
          class="rounded-full border transition-all mt-10 duration-500 ease-in-out px-7 py-2 w-full sm:w-fit mx-auto"
          :class="
            adjustedPath === '/' ? ' text-white ' : ' text-black  border-black'
          "
        >
          <span class="button-text">{{ $t("contact_us") }}</span>
        </button>
        <button
          class="mt-8 px-7 py-2"
          :class="
            adjustedPath === '/' ? ' text-white ' : ' text-black  border-black'
          "
        >
          <span class="button-text">{{ $t("Learn more") }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();
const getPathWithoutLocale = (path: string) => {
  const segments = path.split("/");
  if (segments[1] && segments[1].length === 2) {
    return `/${segments.slice(2).join("/")}`;
  }
  return path;
};
const adjustedPath = computed(() => getPathWithoutLocale(route.path));
</script>

<style scoped></style>
