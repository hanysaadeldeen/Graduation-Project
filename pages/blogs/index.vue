<template>
  <div class="blog mb-6 min-h-full md:mb-12">
    <div class="container mx-auto min-h-full px-4">
      <div
        v-if="loading"
        class="flex h-full flex-col items-center justify-center gap-4"
      >
        <img
          src="~/assets/img/Spin.svg"
          class="size-[150px]"
          width="150"
          height="150"
          alt="Spin"
        />
      </div>
      <div v-if="!loading && blogs">
        <MainSectionBlog :blogs="blogs" />
        <BlogsCardSection :blogs="blogs" />
      </div>
      <div
        v-else-if="!loading && error"
        class="flex h-full items-center justify-center"
      >
        <p class="text-center uppercase text-red-500">fail to fetch blogs</p>
      </div>
      <div v-if="!loading" class="mt-8">
        <nuxt-link to="/blogs/addBlog">
          <button
            class="group/edit flex w-full items-center justify-center gap-3 rounded-md bg-primary py-3 text-center text-xl font-medium tracking-wider text-white transition-all duration-300 ease-in-out hover:scale-105"
          >
            Add Blog
          </button></nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useblogsStore } from "~/stores/blogs";

const blogsStore = useblogsStore();

const { blogs, loading, error } = storeToRefs(blogsStore);

if (!blogs.value) {
  blogsStore.fetchBlogs();
}

onMounted(() => {
  blogsStore.fetchBlogs();
});
</script>

<style scoped></style>
