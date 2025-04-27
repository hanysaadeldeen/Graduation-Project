<template>
  <section class="PalnSection" ref="PlanSection">
    <div class="container mx-auto px-4">
      <h1
        class="w-full bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-4xl font-bold text-transparent md:w-[536px] md:text-4xl"
      >
        Join Us and Explore ZeroPointPath’s Features
      </h1>
      <div
        class="mt-20 grid grid-cols-1 gap-10 overflow-hidden lg:grid-cols-2 xl:grid-cols-3"
      >
        <PlanCard
          v-for="card in PlanCardSection"
          :id="card.id"
          :key="card.id"
          :title="card.title"
          :description="card.description"
          :content="card.content"
          :btn="card.btn"
          :classs="card.plan"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const PlanCardSection = [
  {
    id: 1,
    title: "0Egp",
    description: "Free",
    content: [
      " 10GB HDD space",
      " 5 emaill addresses",
      " 2 subdomains",
      " 4 databases",
    ],
    btn: "Current Plan",
    plan: "PlanOne",
  },
  {
    id: 2,
    title: "100Egp",
    description: "Advanced",
    content: [
      "10GB HDD space",
      "50emaill addresses",
      "21 subdomains",
      "14 databases",
      " Advanced support",
    ],
    btn: "coming soon",
    plan: "PlanTwo",
  },
  {
    id: 3,
    title: "1000Egp",
    description: "Professional",
    content: [
      "10GB HDD space",
      " 90emaill addresses",
      " 222 subdomains",
      " 44 databases",
      " Professional support",
    ],
    btn: "coming soon",
    plan: "PlanThree",
  },
];

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PlanSection = ref(null);

onMounted(() => {
  if (PlanSection.value) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: PlanSection.value,
        start: "top 40%",
        end: "center 40%",
        scrub: true,
        markers: false,
      },
    });
    tl.from(
      ".PlanOne",
      {
        opacity: 0,
        duration: 1,
        x: -200,
        ease: "power3.out",
      },
      0,
    );
    tl.from(
      ".PlanTwo",
      {
        opacity: 0,
        duration: 1,
        y: 200,
        ease: "power3.out",
      },
      0,
    );
    tl.from(
      ".PlanThree",
      {
        opacity: 0,
        duration: 1,
        x: 200,
        ease: "power3.out",
      },
      0,
    );
  }
});
</script>

<style scoped></style>
