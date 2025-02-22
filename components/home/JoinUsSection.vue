<template>
  <section class="JoinUs">
    <div class="container px-4 mx-auto">
      <h1
        v-html="$t('joinUsTitle')"
        class="font-bold text-4xl md:text-4xl bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent w-full md:w-[536px]"
      ></h1>
      <div
        class="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <JoinUsCard
          v-for="card in JoinUsCards"
          :key="card.id"
          :title="card.title"
          :description="card.description"
          :color="card.color"
          :icon="card.icon"
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const JoinUsCards = [
  {
    id: 1,
    title: "joinUsCardOneTitle",
    description: "joinUsCardOneDescription",
    icon: "fa-brands fa-searchengin",
    color: "#4060F8",
  },
  {
    id: 2,
    title: "joinUsCardTwoTitle",
    description: "joinUsCardTwoDescription",
    icon: "fa-solid fa-user-secret",

    color: "#FF832A",
  },
  {
    id: 3,
    title: "joinUsCardThreeTitle ",
    description: "joinUsCardThreeDescription",
    icon: "fa-solid fa-chart-line",
    color: "#714AE0",
  },
  {
    id: 4,
    title: "joinUsCardFourTitle",
    description: "joinUsCardFourDescription",
    icon: "fa-solid fa-calendar-check",
    color: "#F0004F",
  },
  {
    id: 5,
    title: "joinUsCardFiveTitle",
    description: "joinUsCardFiveDescription",
    icon: "fa-solid fa-newspaper",
    color: "#00D356",
  },
  {
    id: 6,
    title: "joinUsCardSixTitle",
    description: "joinUsCardSixDescription",
    icon: "fa-solid fa-comment-dots",
    color: "#46494D",
  },
  {
    id: 7,
    title: "joinUsCardSevenTitle",
    description: "joinUsCardSevenDescription​.",
    icon: "fa-solid fa-bug",
    color: "#9AE266",
  },
  {
    id: 8,
    title: "joinUsCardEightTitle",
    description: "joinUsCardEightDescription",
    icon: "fa-solid fa-network-wired",
    color: "#F3B059",
  },
  {
    id: 9,
    title: "joinUsCardNineTitle",
    description: "joinUsCardNineDescription",
    icon: "fa-solid fa-graduation-cap",
    color: "#987681",
  },
];
</script>

<style scoped></style>
