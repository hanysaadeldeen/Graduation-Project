<template>
  <div class="group/item h-fit max-w-fit rounded-md bg-[#161625] p-5">
    <img
      :src="runtimeConfig.public.BaseApi + blog.image"
      :alt="blog.title"
      class="h-full max-h-[220px] w-full max-w-full rounded-md object-cover"
    />
    <div class="mt-5">
      <p class="mb-5 text-lg font-bold text-white">
        <i class="fa-solid fa-calendar-days mr-2 text-secondary"></i> November
        25, 2024
      </p>
      <nuxt-link :to="localePath(`/blogs/${blog.id}`)">
        <h1
          class="my-6 cursor-pointer text-2xl font-bold text-white transition-all duration-300 ease-in-out group-hover/item:text-secondary md:my-10"
        >
          {{ blog.title }}
        </h1>
      </nuxt-link>
      <p class="line-clamp-3 text-xl text-paragraph">
        {{ blog?.sections[0].content }}
      </p>
      <nuxt-link :to="localePath(`/blogs/${blog.id}`)">
        <button
          class="group/edit mt-8 flex w-full items-center justify-center gap-3 rounded-md bg-gradient-to-r from-primary to-[#09090B] py-3 text-center text-xl font-medium tracking-wider text-white opacity-0 transition-all duration-300 ease-in-out hover:scale-105 group-hover/item:opacity-100"
        >
          Read More
          <i
            class="fa-solid fa-arrow-right cursor-pointer text-[#A1A1AA] transition-all duration-300 ease-in-out group-hover/edit:translate-x-2 group-hover/edit:text-white"
          ></i>
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const runtimeConfig = useRuntimeConfig();

interface Section {
  title: string;
  content: string;
}
interface blogs {
  id: string;
  title: string;
  sections: Section[];
  image: string;
  createdAt: string;
  authorName: string;
  authorEmail: string;
}

interface Props {
  blog: blogs;
}
defineProps<Props>();
</script>

<style scoped></style>
