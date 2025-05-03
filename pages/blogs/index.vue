<template>
  <div class="blog min-h-full">
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
        <h1 class="text-center text-4xl text-hookYellow">Loading....</h1>
      </div>
      <div v-if="!loading && blogs && blogs.length">
        <MainSectionBlog :blogs="blogs" />
        <BlogsCardSection :blogs="blogs" />
      </div>
      <div
        v-else="!loading && error"
        class="flex h-full items-center justify-center"
      >
        <p class="text-center uppercase text-red-500">fail to fetch blogs</p>
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
