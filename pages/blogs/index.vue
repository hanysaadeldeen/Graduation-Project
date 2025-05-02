<template>
  <div class="blog">
    <div class="container mx-auto px-4">
      <div v-if="loading">
        <h1 class="text-center text-4xl text-white">Loading....</h1>
      </div>
      <div v-if="!loading">
        <MainSectionBlog :blogs="blogs && blogs" />
        <BlogsCardSection :blogs="blogs && blogs" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useblogsStore } from "~/stores/blogs";

const { fetchBlogs } = useblogsStore();
const blogsStore = useblogsStore();

const { blogs, loading, error } = storeToRefs(blogsStore);

if (!blogs.value) {
  fetchBlogs();
}
onMounted(() => {
  fetchBlogs();
});
</script>

<style scoped></style>
