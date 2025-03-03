<template>
  <section class="blog">
    <div class="container px-4 mx-auto">
      <h1
        class="text-2xl md:text-4xl font-bold bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent tracking-wider text-center mb-8"
      >
        Latest Post
      </h1>
      <div
        class="flex max-md:flex-wrap justify-between gap-6 bg-[#161625] p-5 rounded-md items-center mb-20"
      >
        <div class="w-full md:w-1/2 rounded-md">
          <img
            src="~/assets/img/blog.jpeg"
            class="inline-block w-full h-full max-h-[400px] object-cover max-w-full"
          />
        </div>
        <div class="flex flex-col gap-5 w-full md:w-1/2">
          <p class="text-paragraph text-xl">October 13, 2024</p>
          <div class="flex max-lg:flex-wrap gap-5">
            <button
              class="bg-[#152738] max-md:w-full text-white text-center py-4 px-5 rounded-md text-xl font-medium tracking-wider"
            >
              DarkAtlas Squad
            </button>
            <button
              class="bg-[#152738] max-md:w-full text-white text-center py-4 px-5 rounded-md text-xl font-medium tracking-wider"
            >
              Malware Analysis
            </button>
          </div>
          <h1 class="text-white font-bold text-3xl">
            Fog Ransomware – Technical Analysis
          </h1>
          <p class="text-paragraph text-xl line-clamp-5">
            Introduction On July 30th, [StrikeReady Labs] reported the discovery
            of a malicious **LNK** file. This file is designed to download a
            PowerShell script from the URL management.xuzeest[.]buzz/DSC30/.The
            Dark Atlas Squad has been closely monitoring this Advanced
            Persistent Threat (APT), attributed to SideWinder, an Indian threat
            group has been active since at least 2012.SideWinder primarily
            focusing […]
          </p>
        </div>
      </div>
      <div class="pt-20">
        <h1
          class="font-bold bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent w-full md:w-[536px]"
          :class="
            locale === 'ar'
              ? 'text-xl md:text-[50px] md:leading-[60px]'
              : 'text-xl md:text-4xl'
          "
        >
          Discover the latest articles and insights on Dark Atlas
        </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-4 gap-5 mt-16">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>

<style scoped></style>
