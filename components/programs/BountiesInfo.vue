<template>
  <div>
    <div v-if="bountyType === 'programInfo'">
      <ProgramInfo />
    </div>
    <div v-if="bountyType === 'Hackers'">
      <h1 class="text-2xl text-white">Hackers</h1>
    </div>
    <div v-if="bountyType === 'Reports'">
      <h1 class="text-2xl text-white">Reports</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProgramInfo from "~/components/programs/ProgramInfo.vue";
type Props = {
  bountyType: string;
};

defineProps<Props>();
</script>

<style scoped></style>
