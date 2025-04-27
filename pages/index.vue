<template>
  <div>
    <HeroSection ref="heroSection" />
    <WhatUs ref="whatUs" />
    <AccessCardsSection />
    <GeniusSection />
    <JoinUsSection />
    <PlanSection />
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, onBeforeUnmount, ref } from "vue";

// سجل ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const heroSection = ref(null);
const whatUs = ref(null);

const sectionsData = [
  {
    id: "hero-Section",
    ref: heroSection,
    bodyColor: "#09090B",
    sectionColor: "#ffb45c",
    prevColor: "#09090B",
  },
  {
    id: "what-us",
    ref: whatUs,
    bodyColor: "#ffb45c",
    sectionColor: "#ffb45c",
    prevColor: "#09090B",
  },
];

onMounted(() => {
  if (process.client) {
    sectionsData.forEach((section, index) => {
      const currentSection = section.ref.value.$el;
      const prevSection =
        index > 0 ? sectionsData[index - 1].ref.value.$el : null;
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const start = isMobile ? "top 20%" : "top 35%";
      const end = isMobile ? "bottom 60%" : "bottom 60%";
      ScrollTrigger.create({
        trigger: currentSection,
        start,
        end,
        markers: false,
        onEnter: () => {
          gsap.to("body", {
            backgroundColor: section.bodyColor,
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(currentSection, {
            backgroundColor: section.bodyColor,
            color: "#ffffff",
            duration: 0.5,
            ease: "power2.out",
          });
          if (prevSection) {
            gsap.to(prevSection, {
              backgroundColor: section.sectionColor,
              duration: 0.5,
              ease: "power2.out",
            });
          }
        },
        onLeave: () => {
          gsap.to("body", {
            backgroundColor: section.prevColor,
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(currentSection, {
            backgroundColor: section.prevColor,
            color: "#A1A1AA",
            duration: 0.5,
            ease: "power2.out",
          });
          if (prevSection) {
            gsap.to(prevSection, {
              backgroundColor: section.prevColor,
              duration: 0.5,
              ease: "power2.out",
            });
          }
        },
        onEnterBack: () => {
          gsap.to("body", {
            backgroundColor: section.bodyColor,
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(currentSection, {
            backgroundColor: section.bodyColor,
            duration: 0.5,
            color: "#ffffff",
            ease: "power2.out",
          });
          if (prevSection) {
            gsap.to(prevSection, {
              backgroundColor: section.sectionColor,
              duration: 0.5,
              ease: "power2.out",
            });
          }
        },
        onLeaveBack: () => {
          gsap.to("body", {
            backgroundColor: section.prevColor,
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(currentSection, {
            backgroundColor: section.prevColor,
            color: "#A1A1AA",
            duration: 0.5,
            ease: "power2.out",
          });
          if (prevSection) {
            gsap.to(prevSection, {
              backgroundColor: section.prevColor,
              duration: 0.5,
              ease: "power2.out",
            });
          }
        },
      });
    });
  }
});

onBeforeUnmount(() => {
  if (process.client) {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }
});
</script>

<style scoped></style>
