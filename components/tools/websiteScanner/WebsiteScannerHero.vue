<template>
  <div
    ref="WebsiteScannerHero"
    class="flex items-center justify-between gap-16 max-md:flex-col"
  >
    <div ref="WebsiteScannerHeroLeft" class="w-full md:w-1/2 md:max-w-[600px]">
      <h1
        class="mb-4 bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-2xl font-bold text-transparent md:mb-8 md:text-4xl"
      >
        Vulnerability <br />
        Management
      </h1>
      <p
        class="mb-4 text-justify text-xl font-medium leading-6 text-paragraph md:mb-8"
      >
        Stay ahead of modern threats with a solution built for dynamic
        environments. InsightVM delivers comprehensive visibility,
        adversary-aware prioritization enriched with expert threat intelligence
        to drive meaningful risk reduction and streamline remediation workflows.
      </p>
      <div class="flex gap-5 max-lg:flex-wrap">
        <a
          href="https://drive.google.com/file/d/1TyN9cfcKjUTMViEfNs1Q5veSOdGFSYRP/view?usp=sharing"
          target="_blank"
          class="text-decoration-none cursor-pointer"
        >
          <button
            class="rounded-full bg-[#152738] px-10 py-2 text-center text-xl font-medium tracking-wider text-white max-md:w-full"
          >
            Request Demo
          </button>
        </a>
        <!-- <button
          class="rounded-full bg-[#152738] px-10 py-2 text-center text-xl font-medium tracking-wider text-white max-md:w-full"
        >
          Start Free Trial
        </button> -->
      </div>
    </div>
    <div ref="WebsiteScannerImage" class="w-full md:w-1/2 md:max-w-[600px]">
      <img src="~/assets/img/webScanner.png" alt="webScanner Image" />
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";

const WebsiteScannerHero = ref(null);
const WebsiteScannerHeroLeft = ref(null);
const WebsiteScannerImage = ref(null);
onMounted(() => {
  gsap.from(WebsiteScannerHeroLeft.value, {
    opacity: 0,
    duration: 1,
    x: -300,
    ease: "power2.out",
  });
  gsap.from(WebsiteScannerImage.value, {
    opacity: 0,
    duration: 1,
    x: 300,
    ease: "power2.out",
  });
});
</script>

<style scoped></style>
