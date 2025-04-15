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
        class="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
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
import SectionInfo from "../../Utils/SectionInfo.vue";
</script>

<style scoped></style>
