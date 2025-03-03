<template>
  <div class="bg-[#161625] p-5 rounded-md group groupTwo h-fit">
    <img
      src="~/assets/img/blog1.webp"
      alt="Blog Image"
      class="object-cover w-full max-w-full h-full max-h-[220px] rounded-md"
    />
    <div class="mt-5">
      <p class="text-lg font-bold text-white mb-5">
        <i class="text-secondary fa-solid fa-calendar-days mr-2"></i> November
        25, 2024
      </p>
      <nuxt-link :to="localePath('/blogs/1')">
        <h1
          class="group-hover:text-secondary duration-300 transition-all cursor-pointer ease-in-out text-2xl font-bold text-white my-6 md:my-10"
        >
          Helldown Ransomware Analysis
        </h1>
      </nuxt-link>
      <p class="text-paragraph text-xl line-clamp-3">
        In June [Arctic Wolf Labs] reported a deployment of a new ransomware
        named Fog Ransomware, according to their report the ransomware was seen
        in several incident Response cases, affecting education and recreation
        center in the United States, the investigation revealed that the
        attackers gain access to victims through compromised VPNs credentials
      </p>
      <button
        class="group-hover:opacity-100 opacity-0 flex bg-gradient-to-r from-primary to-[#09090B] hover:scale-105 transition-all duration-300 ease-in-out w-full text-white text-center py-3 rounded-md text-xl font-medium tracking-wider items-center justify-center gap-3 mt-8"
      >
        Read More
        <i
          class="fa-solid fa-arrow-right cursor-pointer text-[#A1A1AA] transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:text-white"
        ></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>

<style scoped></style>
