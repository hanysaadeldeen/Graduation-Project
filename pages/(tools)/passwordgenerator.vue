<template>
  <section class="blog">
    <div class="container px-4 mx-auto">
      <h1
        class="text-2xl md:text-4xl font-bold bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent tracking-wider text-center mb-8"
      >
        Password Generator
      </h1>

      <div
        class="result bg-secondary text-white font-semibold tracking-wider p-4 mt-4 rounded relative text-center"
      >
        <div class="text-lg font-mono" @click="copyPassword">
          {{ password || "CLICK GENERATE" }}
        </div>

        <button
          v-if="password"
          @click="copyPassword"
          class="absolute top-2 flex items-center text-lg gap-2 right-2 text-white hover:scale-105 transition-all duration-300 ease-in-out"
        >
          copy
          <i class="far fa-copy"></i>
        </button>
      </div>

      <div class="mt-4">
        <label
          class="my-2 inline-block md:text-xl font-bold bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent tracking-wider text-center"
          >Length: {{ length }}</label
        >
        <input
          type="range"
          v-model="length"
          min="4"
          max="32"
          class="w-full cursor-pointer"
        />
      </div>

      <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label
          class="text-2xl text-white cursor-pointer font-bold inline-block mx-2"
          ><input
            type="checkbox"
            v-model="options.uppercase"
            class="mr-2 cursor-pointer"
          />
          Uppercase</label
        >
        <label
          class="text-2xl cursor-pointer text-white font-bold inline-block mx-2"
          ><input
            type="checkbox"
            v-model="options.lowercase"
            class="mr-2 cursor-pointer"
          />
          Lowercase</label
        >
        <label
          class="text-2xl cursor-pointer text-white font-bold inline-block mx-2"
          ><input
            type="checkbox"
            v-model="options.number"
            class="mr-2 cursor-pointer"
          />
          Numbers</label
        >
        <label
          class="text-2xl cursor-pointer text-white font-bold inline-block mx-2"
          ><input
            type="checkbox"
            v-model="options.symbol"
            class="mr-2 cursor-pointer"
          />
          Symbols</label
        >
      </div>

      <button
        @click="generatePassword"
        class="py-2.5 block mt-5 capitalize mx-auto rounded-xl bg-gradient-to-l h-fit px-10 w-full md:w-fit from-primary to-secondary text-white font-bold tracking-wider text-lg"
      >
        Generate Password
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "vue-toast-notification";
const toast = useToast({ position: "top-right", duration: 1500 });
const password = ref("");
const length = ref(16);
const options = ref({
  uppercase: true,
  lowercase: true,
  number: true,
  symbol: false,
});

const characters = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: '~!@#$%^&*()_+{}":?><;.,',
};

const generatePassword = () => {
  let availableChars = "";
  Object.keys(options.value).forEach((key) => {
    if (options.value[key]) availableChars += characters[key];
  });
  if (!availableChars) return;

  let newPassword = "";
  for (let i = 0; i < length.value; i++) {
    newPassword +=
      availableChars[Math.floor(Math.random() * availableChars.length)];
  }
  password.value = newPassword;
};

const copyPassword = () => {
  if (!password.value) return;
  navigator.clipboard.writeText(password.value);
  toast.success("Copied to clipboard");
};
</script>

<style scoped>
/* @media screen and (-webkit-min-device-pixel-ratio: 0) {
  input[type="range"] {
    overflow: hidden;
    width: 100%;
    background-color: white;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    height: 10px;
    -webkit-appearance: none;
    color: #092034;
    margin-top: -1px;
  }

  input[type="range"]::-webkit-slider-thumb {
    width: 2px;
    -webkit-appearance: none;
    height: 10px;
    cursor: ew-resize;
    background: #434343;
    box-shadow: -80px 0 0 80px #092034;
  }
}*/
</style>
