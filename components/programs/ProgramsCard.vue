<template>


    <div class="bg-[#eee] rounded-lg shadow-lg p-6 w-full ">

    <div class="border-b border-gray-200 pb-3 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <img src="~/assets/img/company1.png" alt="Bykea Logo" class="w-10 h-10 rounded-full">
        <span class="text-lg font-semibold text-gray-800">Bykea</span>
      </div>
    </div>

    <h2 class="mt-4 text-xl font-bold text-gray-900">Bug Bounty Program</h2>
    <p class="text-sm text-gray-500">Retesting, Collaboration</p>

    <div class="mt-4 flex flex-wrap gap-2">
      <span class="bg-[#E0E9FF]  text-[#002375] text-xs font-medium px-3 py-1 rounded-full ">Domain <span class="border-l border-[#002375] pl-1 ">7</span></span>
      <span class="bg-[#E0E9FF]  text-[#002375] text-xs font-medium px-3 py-1 rounded-full ">Wildcard <span class="border-l border-[#002375] pl-1 ">7</span></span>
      <span class="bg-[#E0E9FF]  text-[#002375] text-xs font-medium px-3 py-1 rounded-full ">AndroidPlaySt <span class="border-l border-[#002375] pl-1 ">7</span></span>
      <span class="bg-[#E0E9FF]  text-[#002375] text-xs font-medium px-3 py-1 rounded-full ">iOSAppStore <span class="border-l border-[#002375] pl-1 ">7</span></span>
      <span class="bg-[#E0E9FF]  text-[#002375] text-xs font-medium px-3 py-1 rounded-full ">y Program <span class="border-l border-[#002375] pl-1 ">7</span></span></div>

    <div class="mt-6">
      <div class="flex items-center space-x-2">
        <span class="bg-pink-100 text-pink-600 text-xs font-medium px-2.5 py-1 rounded-full">Gold Standard</span>
      </div>
      <div class="flex items-center mt-2">
        <span class="text-green-500 mr-2">💰</span>
        <span class="text-lg font-semibold text-gray-900">$50 - $5k</span>
          </div>
    </div>

    <div class="mt-4 flex space-x-4 text-sm text-gray-600">
      <div class="flex items-center text-lg font-bold">
        
        <i class="fa-solid fa-bug text-[#744712] mr-1.5"></i>
        35
      </div>
      <div class="flex items-center text-lg font-bold">
        <svg class="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
        19
      </div>
      <div class="flex items-center text-lg font-bold">
        <span class="w-2.5 h-2.5 bg-green-500 rounded-full mr-1.5"></span>
        100%
      </div>
    </div>

    <nuxt-link :to="localePath('/programs/1')">
        <button
          class=" group/edit flex bg-gradient-to-r from-primary to-[#09090B] hover:scale-105 transition-all duration-300 ease-in-out w-full text-white text-center py-3 rounded-md text-xl font-medium tracking-wider items-center justify-center gap-3 mt-8"
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