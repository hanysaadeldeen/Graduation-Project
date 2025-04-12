<template>
  <section class="pt-20">
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
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>

<style scoped></style>
