<template>
  <div>
    <div v-if="bountyType === 'programInfo'">
      <ProgramInfo />
    </div>
    <div v-if="bountyType === 'Hackers'">
      <BountiesHackers />
    </div>
    <div
      v-if="bountyType === 'Reports'"
      class="mt-10 flex flex-col items-center justify-center gap-5"
    >
      <img src="~/assets/img/report.svg" alt="report" />
      <h1
        class="mb-10 bg-gradient-to-r from-[#FFFFFF] to-[#71717A] bg-clip-text pt-4 text-2xl font-bold text-transparent md:text-center md:text-4xl"
      >
        No disclosed reports at the moment
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProgramInfo from "~/components/programs/ProgramInfo.vue";
import BountiesHackers from "./BountiesHackers.vue";
type Props = {
  bountyType: string;
};

defineProps<Props>();
</script>

<style scoped></style>
