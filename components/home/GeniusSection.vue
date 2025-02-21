<template>
  <section class="Genius">
    <div class="container px-4 mx-auto">
      <div
        class="sectionInfo mb-20 w-full sm:max-w-[640px] relative flex flex-col gap-5"
      >
        <h1
          class="font-bold text-4xl sm:text-5xl leading-[3rem] sm:leading-[4rem] bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent"
        >
          Meet Genius
        </h1>
        <p class="text-paragraph font-medium leading-6 text-xl">
          Our Al-driven assistant is designed to decode complex financial
          figures and illuminate
          <span class="text-white"> key trends in your business.</span>
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between">
        <div class="card py-7 rounded-2xl bg-[#18181B]">
          <div class="ginusBackground py-3 lg:py-7 px-4 lg:px-8">
            <div class="rounded-2xl pt-16 bg-[#18181B] px-3">
              <div
                class="w-fit mx-auto flex gap-3 max-sm:flex-wrap max-sm:justify-center justify-between items-center rounded-2xl bg-[#27272A] px-2 py-3 border border-gray-700"
              >
                <img src="~/assets/img/warning.svg" alt="warning" />
                <div>
                  <h1 class="font-medium text-white text-lg max-sm:text-center">
                    Critical balance alert
                  </h1>
                  <p
                    class="text-[#A1A1AA] text-base font-normal max-sm:text-center"
                  >
                    You will have less than $2,500 <br />
                    in available funds in May
                  </p>
                </div>
              </div>
              <div class="">
                <img src="~/assets/img/IconGinus.svg" alt="IconGinus" />
              </div>
            </div>
          </div>
          <div class="px-5 lg:px-12">
            <h4 class="text-lg text-white font-medium mb-4">
              Smart forecasting
            </h4>
            <p class="text-[#A1A1AA] font-normal">
              Harness the power of Cobalt's predictive analytics to map out the
              financial future of your business.
            </p>
          </div>
        </div>
        <div class="card py-7 rounded-2xl bg-[#18181B] relative">
          <div
            class="flex flex-col justify-between h-full gap-4 pt-14 md:pt-28"
          >
            <div class="py-3 lg:py-7 px-4 lg:px-8">
              <div class="flex flex-col w-full gap-y-20">
                <button
                  class="bg-[#0891B2] w-fit mx-auto text-white font-medium text-lg capitalize px-3 py-2 rounded-xl"
                >
                  Hey! How can I help you?
                </button>
                <div
                  class="border w-full border-gray-700 rounded-lg p-3 flex max-sm:flex-wrap justify-between items-center gap-5 md:gap-3"
                >
                  <h3 class="text-[#A1A1AA] font-normal">
                    ✨ Who's our most profitable customer?
                  </h3>
                  <button
                    class="buttonAskChat max-sm:w-full text-white font-medium text-base px-3 py-2 bg-black rounded-lg border border-gray-700"
                  >
                    Ask Genius
                  </button>
                </div>
              </div>
            </div>
            <div class="px-5 lg:px-12">
              <h4 class="text-lg text-white font-medium mb-4">
                Chat with Genius
              </h4>
              <p class="text-[#A1A1AA] font-normal">
                Just ask. With Genius by your side, navigating the <br />
                financial maze becomes intuitive and effortless.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.ginusBackground {
  background-image: url("~/assets/img/GinusBackgournd.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.buttonAskChat {
  background-image: url("~/assets/img/GinusBackgourndChat.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
