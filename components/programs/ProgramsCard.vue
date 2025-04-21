<template>
  <div class="w-full rounded-lg bg-primary p-6 shadow-lg">
    <div
      class="flex items-center justify-between border-b border-gray-200 pb-3"
    >
      <div class="flex items-center space-x-3">
        <img
          src="~/assets/img/company1.png"
          alt="Bykea Logo"
          class="h-10 w-10 rounded-full"
          width="40"
          height="40"
        />
        <span class="text-lg font-semibold text-white">Bykea</span>
      </div>
    </div>

    <h2 class="mt-4 text-xl font-bold text-white">Bug Bounty Program</h2>
    <p class="text-sm text-paragraph">Retesting, Collaboration</p>

    <div class="mt-4 flex flex-wrap gap-2">
      <span
        class="rounded-full bg-[#E0E9FF] px-3 py-1 text-xs font-medium text-[#002375]"
        >Domain <span class="border-l border-[#002375] pl-1">7</span></span
      >
      <span
        class="rounded-full bg-[#E0E9FF] px-3 py-1 text-xs font-medium text-[#002375]"
        >Wildcard <span class="border-l border-[#002375] pl-1">7</span></span
      >
      <span
        class="rounded-full bg-[#E0E9FF] px-3 py-1 text-xs font-medium text-[#002375]"
        >AndroidPlaySt
        <span class="border-l border-[#002375] pl-1">7</span></span
      >
      <span
        class="rounded-full bg-[#E0E9FF] px-3 py-1 text-xs font-medium text-[#002375]"
        >iOSAppStore <span class="border-l border-[#002375] pl-1">7</span></span
      >
      <span
        class="rounded-full bg-[#E0E9FF] px-3 py-1 text-xs font-medium text-[#002375]"
        >y Program <span class="border-l border-[#002375] pl-1">7</span></span
      >
    </div>

    <div class="mt-6">
      <div class="flex items-center space-x-2">
        <span
          class="rounded-full bg-pink-100 px-2.5 py-1 text-xs font-medium text-pink-600"
          >Gold Standard</span
        >
      </div>
      <div class="mt-2 flex items-center">
        <span class="mr-2 text-green-500">💰</span>
        <span class="text-lg font-semibold text-white">$50 - $5k</span>
      </div>
    </div>

    <div class="mt-4 flex space-x-4 text-sm text-white">
      <div class="flex items-center text-lg font-bold">
        <i class="fa-solid fa-bug mr-1.5 text-paragraph"></i>
        35
      </div>
      <div class="flex items-center text-lg font-bold">
        <svg
          class="mr-1.5 h-5 w-5 text-paragraph"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
        19
      </div>
      <div class="flex items-center text-lg font-bold">
        <span
          class="mb-0.5 mr-1.5 h-2.5 w-2.5 rounded-full bg-green-300"
        ></span>
        100%
      </div>
    </div>

    <nuxt-link :to="localePath('/programs/1')">
      <button
        class="group/edit mt-8 flex w-full items-center justify-center gap-3 rounded-md bg-gradient-to-r from-primary to-[#09090B] py-3 text-center text-xl font-medium tracking-wider text-white transition-all duration-300 ease-in-out hover:scale-105"
      >
        See Details
        <i
          class="fa-solid fa-arrow-right cursor-pointer text-[#A1A1AA] transition-all duration-300 ease-in-out group-hover/edit:translate-x-2 group-hover/edit:text-white"
        ></i>
      </button>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>

<style scoped></style>
