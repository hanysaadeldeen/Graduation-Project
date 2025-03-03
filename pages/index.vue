<template>
  <HeroSection />
  <nuxt-link :to="`/blog/1`" class="text-red-500 text-4xl"
    >Go to Blog 1</nuxt-link
  >
  <WhatUs />
  <client-only>
    <AccessCardsSection />
  </client-only>
  <GeniusSection />
  <JoinUsSection />
  <PlanSection />
</template>

<script setup lang="ts"></script>

<style scoped></style>
