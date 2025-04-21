<template>
  <section ref="GeniusSection" class="Genius relative">
    <div
      ref="GeniusSectionOne"
      id="GeniusSection"
      class="container mx-auto px-4"
    >
      <div
        class="sectionInfo relative mb-20 flex w-full flex-col gap-5 sm:max-w-[640px]"
      >
        <h1
          class="bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-4xl font-bold leading-[3rem] text-transparent sm:text-5xl sm:leading-[4rem]"
        >
          Meet Genius
        </h1>
        <p class="text-xl font-medium leading-6 text-paragraph">
          Our Al-driven assistant is designed to decode complex financial
          figures and illuminate
          <span class="text-white"> key trends in your business.</span>
        </p>
      </div>
      <div class="grid grid-cols-1 justify-between gap-8 md:grid-cols-2">
        <div ref="ginusCritical" class="card rounded-2xl bg-[#18181B] py-7">
          <div class="ginusBackground px-4 py-3 lg:px-8 lg:py-7">
            <div class="rounded-2xl bg-[#18181B] px-3 pt-16">
              <div
                class="mx-auto flex w-fit items-center justify-between gap-3 rounded-2xl border border-gray-700 bg-[#27272A] px-2 py-3 max-sm:flex-wrap max-sm:justify-center"
              >
                <img src="~/assets/img/warning.svg" alt="warning" />
                <div>
                  <h1 class="text-lg font-medium text-white max-sm:text-center">
                    Critical balance alert
                  </h1>
                  <p
                    class="text-base font-normal text-[#A1A1AA] max-sm:text-center"
                  >
                    You will have less than $2,500 <br />
                    in available funds in May
                  </p>
                </div>
              </div>
              <div class="">
                <img
                  src="~/assets/img/IconGinus.svg"
                  alt="IconGinus"
                  width="450"
                  height="216"
                />
              </div>
            </div>
          </div>
          <div class="px-5 lg:px-12">
            <p class="mb-4 text-lg font-medium text-white">Smart forecasting</p>
            <p class="font-normal text-[#A1A1AA]">
              Harness the power of Cobalt's predictive analytics to map out the
              financial future of your business.
            </p>
          </div>
        </div>
        <div
          ref="ginusChat"
          class="card relative rounded-2xl bg-[#18181B] py-7"
        >
          <div
            class="flex h-full flex-col justify-between gap-4 pt-14 md:pt-28"
          >
            <div class="px-4 py-3 lg:px-8 lg:py-7">
              <div class="flex w-full flex-col gap-y-20">
                <button
                  class="mx-auto w-fit rounded-xl bg-[#0891B2] px-3 py-2 text-lg font-medium capitalize text-white"
                >
                  Hey! How can I help you?
                </button>
                <div
                  class="flex w-full items-center justify-between gap-5 rounded-lg border border-gray-700 p-3 max-sm:flex-wrap md:gap-3"
                >
                  <p class="font-normal text-[#A1A1AA]">
                    ✨ Who's our most profitable customer?
                  </p>
                  <button
                    class="buttonAskChat rounded-lg border border-gray-700 bg-black px-3 py-2 text-base font-medium text-white max-sm:w-full"
                  >
                    Ask Genius
                  </button>
                </div>
              </div>
            </div>
            <div class="px-5 lg:px-12">
              <p class="mb-4 text-lg font-medium text-white">
                Chat with Genius
              </p>
              <p class="font-normal text-[#A1A1AA]">
                Just ask. With Genius by your side, navigating the <br />
                financial maze becomes intuitive and effortless.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const GeniusSection = ref(null);
const ginusCritical = ref(null);
const ginusChat = ref(null);

onMounted(() => {
  if (GeniusSection.value) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: GeniusSection.value,
        start: "top 40%",
        end: "center center",
        scrub: true,
        markers: false,
      },
    });
    tl.from(
      ginusCritical.value,
      {
        opacity: 0,
        duration: 1,
        x: -200,
        ease: "power3.out",
      },
      0,
    );
    tl.from(
      ginusChat.value,
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

<style scoped>
.ginusBackground {
  background-image: url("~/assets/img/GinusBackgournd.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.buttonAskChat {
  background-image: url("~/assets/img/GinusBackgourndChat.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
