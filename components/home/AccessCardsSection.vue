<template>
  <section class="relative" id="AccessCardSection">
    <div class="container mx-auto px-4">
      <h1
        class="w-full bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-4xl font-bold text-transparent md:w-[536px] md:text-4xl"
      >
        Access for Every One.
      </h1>
      <div ref="pageContainer" class="mt-20">
        <div class="pin-wrap px-40" ref="pinWrap">
          <AccessCard
            v-for="card in AccessCards"
            :key="card.id"
            :title="card.title"
            :description="card.description"
            :link="card.link"
            :color="card.color"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
const AccessCards = [
  {
    id: 1,
    title: "Resilient, automated layer security",
    description:
      "Empower your blockchain security without sacrificing crucial resources and accessibility to its members",
    link: "#",
    color: "#6E64EF",
  },
  {
    id: 2,
    title: "Seamless connection to any API tools",
    description:
      "Your data can be transformed, organized. and shared across applications for anyone.",
    link: "#",
    color: "#9AE266",
  },
  {
    id: 3,
    title: "Reliable, tamper-proof network",
    description:
      "Use cryptographic proofs to connect highly accurate and available data/APis to any smart contrict",
    link: "#",
    color: "#F3B059",
  },
  {
    id: 4,
    title: "Reliable, tamper-proof network",
    description:
      "Use cryptographic proofs to connect highly accurate and available data/APis to any smart contrict",
    link: "#",
    color: "#987681",
  },
  {
    id: 5,
    title: "Reliable, tamper-proof network",
    description:
      "Use cryptographic proofs to connect highly accurate and available data/APis to any smart contrict",
    link: "#",
    color: "#6E64EF",
  },
];

import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const pageContainer = ref<HTMLElement | null>(null);
const pinWrap = ref<HTMLElement | null>(null);

const isRTL = computed(() => document.documentElement.dir === "rtl");

onMounted(() => {
  if (!pageContainer.value || !pinWrap.value) return;
  const races = document.querySelector(".pin-wrap");
  function getScrollAmount() {
    if (!races || !pageContainer.value) return 0;
    const containerWidth = pageContainer.value.offsetWidth;
    const racesWidth = races.scrollWidth;
    return isRTL.value
      ? racesWidth - containerWidth + 32
      : -(racesWidth - containerWidth + 32);
  }
  const tween = gsap.to(races, {
    x: getScrollAmount,
    duration: 3,
    ease: "none",
  });
  ScrollTrigger.create({
    trigger: "#AccessCardSection",
    start: "top 20%",
    end: () => `+=${Math.abs(getScrollAmount())}`,
    pin: true,
    animation: tween,
    scrub: 1,
    invalidateOnRefresh: true,
    markers: false,
  });
});
</script>

<style scoped>
#AccessCardSection {
  overflow: hidden;
}
.pin-wrap {
  min-width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 40px;
}
</style>
