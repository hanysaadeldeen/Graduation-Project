<template>
  <section class="JoinUs">
    <div class="container px-4 mx-auto">
      <h1
        class="font-bold text-4xl md:text-4xl bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent w-full md:w-[536px]"
      >
        Join Us and Explore ZeroPointPath’s Features
      </h1>
      <div class="mt-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        <PlanCard
          v-for="card in PlanCardSection"
          :id="card.id"
          :key="card.id"
          :title="card.title"
          :description="card.description"
          :content="card.content"
          :btn="card.btn"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const PlanCardSection = [
  {
    id: 1,
    title: "0Egp",
    description: "Free",
    content: [
      " 10GB HDD space",
      " 5 emaill addresses",
      " 2 subdomains",
      " 4 databases",
    ],
    btn: "Current Plan",
  },
  {
    id: 2,
    title: "100Egp",
    description: "Advanced",
    content: [
      "10GB HDD space",
      "50emaill addresses",
      "21 subdomains",
      "14 databases",
      " Advanced support",
    ],
    btn: "coming soon",
  },
  {
    id: 3,
    title: "1000Egp",
    description: "Professional",
    content: [
      "10GB HDD space",
      " 90emaill addresses",
      " 222 subdomains",
      " 44 databases",
      " Professional support",
    ],
    btn: "coming soon",
  },
];
</script>

<style scoped></style>
