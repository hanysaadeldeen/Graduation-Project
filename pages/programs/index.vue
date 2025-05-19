<template>
  <div class="bounties container mx-auto mb-16 px-2 max-sm:px-4">
    <SectionInfo
      about="Opportunity Discovery"
      description="Find the best opportunities for your skills and wallet"
    />
    <div class="mt-20">
      <h1
        class="bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-xl font-bold leading-[3rem] text-transparent sm:leading-[4rem] md:text-2xl lg:text-3xl"
      >
        Campaigns & top-paying opportunities
      </h1>
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
      <div v-else-if="error" class="text-red-500">Error: {{ error }}</div>
      <div
        class="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <ProgramsCard
          v-for="program in data"
          :key="program.id"
          :program="program"
        />
      </div>
    </div>
    <div class="mt-8">
      <nuxt-link to="/programs/AddPrograms">
        <button
          class="group/edit flex w-full items-center justify-center gap-3 rounded-md bg-primary py-3 text-center text-xl font-medium tracking-wider text-white transition-all duration-300 ease-in-out hover:scale-105"
        >
          Add Programs
        </button></nuxt-link
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionInfo from "../../Utils/SectionInfo.vue";

import { programsController } from "~/composables/programs";
const { fetchPrograms, data, error, loading } = await programsController();

onMounted(() => {
  fetchPrograms();
});
</script>

<style scoped></style>
