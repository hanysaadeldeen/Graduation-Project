<template>
  <div class="container mx-auto px-2 max-sm:px-4">
    <nuxt-link
      class="flex items-center gap-2 text-lg text-paragraph hover:text-white"
      :to="$localePath(`/programs/${params.id}`)"
    >
      <i class="fa-solid fa-arrow-left"></i>
      <span> Back to Reports </span>
    </nuxt-link>
    <section class="mt-16">
      <h1
        class="border-hookYellow mb-4 border-b pb-4 text-xl font-bold text-white md:text-3xl"
      >
        Submit Report
      </h1>
      <div class="mt-8 flex flex-col gap-4">
        <div class="general">
          <h1 class="subHeader">General info</h1>

          <div class="mt-6">
            <label
              for="VulnerabilityTitle"
              class="mb-2 inline-block cursor-pointer text-lg font-semibold text-white"
            >
              Vulnerability Title
            </label>
            <input
              id="VulnerabilityTitle"
              type="text"
              placeholder="Short description of the vulnerability "
              class="w-full rounded-lg bg-white/10 px-4 py-4 text-xl text-white outline-none"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { params } = useRoute();
</script>

<style scoped>
.subHeader {
  @apply mb-4 border-b border-secondary pb-2 text-lg font-semibold text-white md:text-2xl;
}
</style>
