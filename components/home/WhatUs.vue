<template>
  <div class="whatUsSection relative h-screen" ref="sectionRef">
    <div class="container mx-auto px-4">
      <h1
        v-html="$t('whatUsSectionTitle')"
        class="w-full bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-2xl font-bold text-transparent md:text-4xl"
      ></h1>
      <div
        ref="splitTypes"
        class="relative mt-10 flex w-full items-center justify-between"
      >
        <h1
          class="reveal-type w-[90%] font-semibold sm:text-justify md:max-w-[980px]"
          :class="
            locale === 'ar' ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'
          "
          data-bg-color="#FEF5E6"
          data-fg-color="#F9AE31"
        >
          {{ $t("whatUsSectionDescription") }}
        </h1>
        <span
          class="absolute top-0 h-full w-1"
          :class="[locale === 'en' ? 'right-0' : 'left-0', `bg-[#FAEAEB]`]"
        ></span>
        <span
          ref="progressLine"
          class="absolute top-0 w-[4px]"
          :class="[locale === 'en' ? 'right-0' : 'left-0', `bg-hookYellow`]"
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const splitTypes = ref();
const progressLine = ref();
const sectionRef = ref();

onMounted(async () => {
  if (process.client) {
    const SplitType = (await import("split-type")).default;
    gsap.registerPlugin(ScrollTrigger);

    if (splitTypes.value && progressLine.value) {
      const char = splitTypes.value;
      const text = new SplitType(char, { types: "words" });
      const totalWords = text.words ? text.words.length : 0;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.value,
          start: "-10% top",
          end: `+=${totalWords * 25}`,
          scrub: 1,
          markers: false,
          toggleActions: "play pause resume none",
          pin: true,
          pinSpacing: true,
        },
      });

      tl.fromTo(
        text.words,
        { color: "#525A66" },
        {
          color: "#FFFFFF",
          duration: 10,
          stagger: 0.5,
          onUpdate: function () {
            const progress = (this.progress() * totalWords) / totalWords;
            gsap.to(progressLine.value, {
              height: `${progress * 100}%`,
              duration: 0.2,
            });
          },
        },
      );
    }
  }
});
</script>

<style scoped></style>
