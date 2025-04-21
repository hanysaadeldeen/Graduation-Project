<template>
  <section class="mt-[90px]">
    <h1
      class="mb-4 bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-2xl font-bold text-transparent md:mb-8 md:text-4xl"
    >
      Use cases
    </h1>
    <div
      ref="WebsiteScannerUseCaseOne"
      class="mt-16 flex items-center justify-between gap-16 max-md:flex-col"
    >
      <div class="w-full md:w-1/2 md:max-w-[600px]">
        <img
          src="~/assets/img/useCase1.png"
          alt="useCase1"
          class="rounded-3xl"
        />
      </div>
      <div class="relative w-full md:w-1/2 md:max-w-[600px]">
        <div
          class="absolute -left-2 -top-3 h-16 w-16 rounded-full bg-secondary max-md:size-14 md:-left-5"
        ></div>
        <h1
          class="relative z-20 my-2.5 cursor-pointer text-2xl font-bold text-white ease-in-out md:my-5"
        >
          Unified vulnerability <br />
          management
        </h1>
        <p class="text-justify text-xl font-medium leading-6 text-paragraph">
          Gain complete visibility across your entire environment, from endpoint
          to cloud. Advanced scanning capabilities ensure you never miss a
          critical vulnerability, empowering your security team to stay
          proactive in the face of evolving threats.
        </p>
      </div>
    </div>
    <div
      ref="WebsiteScannerUseCaseTwo"
      class="mt-16 flex items-center justify-between gap-16 max-md:flex-col-reverse md:mt-24"
    >
      <div class="relative w-full md:w-1/2 md:max-w-[600px]">
        <div
          class="absolute -left-2 -top-3 h-16 w-16 rounded-full bg-secondary max-md:size-14 md:-left-5"
        ></div>
        <h1
          class="relative z-20 my-2.5 cursor-pointer text-2xl font-bold text-white ease-in-out md:my-5"
        >
          Adversary-aware risk <br />
          prioritization
        </h1>
        <p class="text-justify text-xl font-medium leading-6 text-paragraph">
          Leverage advanced machine learning models and proprietary threat
          intelligence from Rapid7 Labs to enrich vulnerability findings with
          Active Risk, helping teams prioritize exposure response based on
          exploitability, attack trends, and business-critical asset impact.
          Rapid7’s Emergent Threat Response (ETR) program continuously flags
          CVEs to ensure you stay ahead of the highest-priority security threat
        </p>
      </div>
      <div class="w-full md:w-1/2 md:max-w-[600px]">
        <img
          src="~/assets/img/useCase2.png"
          alt="useCase1"
          class="rounded-3xl"
        />
      </div>
    </div>
    <div
      ref="WebsiteScannerUseCaseThree"
      class="mt-16 flex items-center justify-between gap-16 max-md:flex-col"
    >
      <div class="w-full md:w-1/2 md:max-w-[600px]">
        <img
          src="~/assets/img/useCase1.png"
          alt="useCase1"
          class="rounded-3xl"
        />
      </div>
      <div class="relative w-full md:w-1/2 md:max-w-[600px]">
        <div
          class="absolute -left-2 -top-3 h-16 w-16 rounded-full bg-secondary max-md:size-14 md:-left-5"
        ></div>
        <h1
          class="relative z-20 my-2.5 cursor-pointer text-2xl font-bold text-white ease-in-out md:my-5"
        >
          Actionable remediation <br />
          planning
        </h1>
        <p class="text-justify text-xl font-medium leading-6 text-paragraph">
          Simplify vulnerability response and reporting with remediation
          projects to assign tasks, track progress, and measure SLA compliance.
          Deliver actionable fixes to IT teams with step-by-step guidance
          tailored to your environment and take immediate action with 500+
          native integrations including automated patching tools.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// const WebsiteScannerUseCaseOne = ref(null);
// const WebsiteScannerUseCaseTwo = ref(null);
// const WebsiteScannerUseCaseThree = ref(null);
// onMounted(() => {
//   if (WebsiteScannerUseCaseOne.value) {
//     const tlOne = gsap.timeline({
//       scrollTrigger: {
//         trigger: WebsiteScannerUseCaseOne.value,
//         start: "top 95%",
//         end: "bottom 80%",
//         scrub: true,
//         markers: true,
//       },
//     });
//     const tlTwo = gsap.timeline({
//       scrollTrigger: {
//         trigger: WebsiteScannerUseCaseTwo.value,
//         start: "top 95%",
//         end: "bottom 80%",
//         scrub: true,
//         markers: true,
//       },
//     });
//     const tlThree = gsap.timeline({
//       scrollTrigger: {
//         trigger: WebsiteScannerUseCaseThree.value,
//         start: "top 95%",
//         end: "bottom 80%",
//         scrub: true,
//         markers: true,
//       },
//     });

//     const animationConfig = {
//       opacity: 0,
//       duration: 1,
//       y: 300,
//     };

//     tlOne.from(WebsiteScannerUseCaseOne.value, animationConfig);
//     tlTwo.from(WebsiteScannerUseCaseTwo.value, animationConfig);
//     tlThree.from(WebsiteScannerUseCaseThree.value, animationConfig);
//   }
// });
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WebsiteScannerUseCaseOne = ref<HTMLElement | null>(null);
const WebsiteScannerUseCaseTwo = ref<HTMLElement | null>(null);
const WebsiteScannerUseCaseThree = ref<HTMLElement | null>(null);

onMounted(() => {
  const useCases = [
    WebsiteScannerUseCaseOne.value,
    WebsiteScannerUseCaseTwo.value,
    WebsiteScannerUseCaseThree.value,
  ].filter((el): el is HTMLElement => el !== null); // Ensure non-null elements

  // Common scrollTrigger configuration
  const scrollTriggerConfig = {
    start: "-70% 85%", // Trigger when element's top is 85% from top of viewport
    end: "30% 65%", // End when element's bottom is 65% from top
    scrub: 0.3, // Smooth scrubbing for natural scroll-tied animation
    markers: false, // Set to true for debugging
  };

  // Common animation configuration
  const animationConfig = {
    opacity: 0,
    y: 300, // Slide up from 300px below
    duration: 1.2, // Slightly longer for smoother effect
    ease: "power3.out", // Smooth easing
  };

  // Apply animation to each use case independently
  useCases.forEach((useCase) => {
    gsap.from(useCase, {
      ...animationConfig,
      scrollTrigger: {
        ...scrollTriggerConfig,
        trigger: useCase, // Each element is its own trigger
      },
    });
  });
});
</script>

<style scoped></style>
