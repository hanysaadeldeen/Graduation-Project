<template>
  <div class="bounties container  mx-auto max-sm:px-4 px-2 mb-16">
    
      <SectionInfo
        about="Opportunity Discovery"
        description="Find the best opportunities for your skills and wallet"
      />
    <div class="mt-20">
      <h1
        class="font-bold text-xl md:text-2xl lg:text-3xl  leading-[3rem] sm:leading-[4rem] bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent"
      >
        Campaigns & top-paying opportunities
      </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
      <ProgramsCard />
      <ProgramsCard />
      <ProgramsCard />
      <ProgramsCard />
      <ProgramsCard />
      <ProgramsCard />
      <ProgramsCard />
      <ProgramsCard />
      <ProgramsCard />
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionInfo from "~/Utils/SectionInfo.vue";
</script>

<style scoped></style>
