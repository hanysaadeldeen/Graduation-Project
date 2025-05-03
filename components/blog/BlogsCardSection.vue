<template>
  <section class="pt-20">
    <h1
      class="w-full bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text font-bold text-transparent md:w-[536px]"
      :class="
        locale === 'ar'
          ? 'text-xl md:text-[50px] md:leading-[60px]'
          : 'text-xl md:text-4xl'
      "
    >
      Discover the latest articles and insights on ZeroPointSecurity
    </h1>
    <div class="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();

interface Section {
  title: string;
  content: string;
}
interface Blog {
  id: string;
  title: string;
  sections: Section[];
  image: string;
  createdAt: string;
  authorName: string;
  authorEmail: string;
}
interface Props {
  blogs: Blog[] | null;
}

defineProps<Props>();
</script>

<style scoped></style>
