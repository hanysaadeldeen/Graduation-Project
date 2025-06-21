<template>
  <div class="min-h-screen bg-gradient-to-t from-[#09090B] via-primary to-[#09090B] px-4 py-10 md:px-16">
    <!-- Title -->
    <div v-if="!pending">
      <div class="mb-10 text-center">
        <h1 class="text-4xl font-bold text-white">{{ userName }} Profile</h1>
        <p class="mt-1 text-paragraph">
          Manage your account and view your progress
        </p>
      </div>
      <div class="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        <!-- Profile Card -->
        <div class="flex flex-col gap-y-4">
          <div class="rounded-xl bg-secondary/20 p-6 shadow-lg">
            <div class="flex flex-col items-center">
              <div class="relative">
                <img :src="userRole === 'Admin' ? userAdmin : userAvatar" alt="userAvatar"
                  class="h-28 w-28 rounded-full border-4 border-white object-cover shadow" />
                <span class="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-green-500"></span>
              </div>
              <h2 v-if="!isLoading" class="mt-4 text-xl font-semibold text-white">
                <!-- {{ userData.name }} -->
              </h2>
              <!-- <p class="text-sm text-paragraph">
              👤 Member since {{ user.memberSince }}
            </p> -->
            </div>
          </div>
          <div class="h-full rounded-xl bg-secondary/20 p-6 shadow-lg">
            <h3 class="mb-4 text-center text-lg font-semibold text-white">
              <span class="inline-block mr-1">
                📁
              </span>
              <span>
                Personal Information
              </span>
            </h3>
            <div v-if="userData" class="flex flex-col items-center justify-center gap-y-3 text-center mt-5">
              <div class="hover:bg-secondary/20/50 flex space-x-3">
                <UserRound class="h-[20px] w-[20px] text-hookYellow" />
                <span class="font-medium text-white">{{ userData[0].authorName }}</span>
              </div>
              <div class="hover:bg-secondary/20/50 flex space-x-3">
                <Mail class="h-[20px] w-[20px] text-hookYellow" />
                <span class="text-white">{{ user.email }}</span>
              </div>

            </div>
          </div>
        </div>
        <div class="flex flex-col gap-y-4 lg:col-span-2">
          <div class="col-span-2 grid gap-4 md:grid-cols-3">
            <div
              class="flex h-fit flex-col items-center justify-center gap-1 rounded-xl bg-secondary/20 py-8 text-center shadow">
              <div class="rounded-lg bg-green-100 p-2.5">
                <CircleCheckBig class="h-[25px] w-[25px] text-green-500" />
              </div>
              <h3 class="mt-2 text-xl font-bold text-white">
                {{ completedProgram }}
              </h3>
              <p class="text-paragraph">Completed Programs</p>
            </div>

            <div
              class="flex h-fit flex-col items-center justify-center gap-1 rounded-xl bg-secondary/20 py-8 text-center shadow">
              <div class="rounded-lg bg-blue-100 p-2.5">
                <Rss class="h-[25px] w-[25px] text-blue-500" />
              </div>
              <h3 class="mt-2 text-xl font-bold text-white">{{ Adminblogs }}</h3>
              <p class="text-paragraph">Completed Blog</p>
            </div>

          </div>
          <div class="rounded-xl bg-secondary/20 p-6 shadow-lg">
            <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
              <font-awesome-icon icon="file-alt" />
              Program Reports
            </h3>
            <div v-if="userRole === 'Admin'">
              <div v-for="report in reports" :key="report.title"
                class="mb-3 flex items-center justify-between rounded-lg bg-secondary/20 p-4">
                <div>
                  <h4 class="font-semibold text-white">{{ report.title }}</h4>
                  <p class="text-sm text-paragraph">
                    {{ report.duration }} • Completed: {{ report.completed }}
                  </p>
                </div>
                <div class="flex items-center gap-2">
                  <span v-if="report.score"
                    class="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-600">
                    {{ report.score }}%
                  </span>
                  <span v-else class="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-600">
                    In Progress
                  </span>
                  <Trophy class="text-hookYellow" />
                </div>
              </div>
            </div>
            <div v-else>
              <div class="mb-3 flex items-center justify-between rounded-lg bg-secondary/20 p-4">
                <div class="flex items-center gap-2 text-hookYellow">
                  You didn't add any program Report yet
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div v-else class="flex h-full flex-col items-center justify-center gap-4">
      <div class="mb-10 text-center">
        <h1 class="text-4xl font-bold text-white">
          Profile Page
        </h1>
      </div>
      <img src="~/assets/img/Spin.svg" class="size-[150px]" width="150" height="150" alt="Spin" />
    </div>
  </div>
</template>

<script setup>


import userAdmin from '../assets/img/userAdmin.jpg'

import userAvatar from '../assets/img/userAvatar.png'

import {
  Trophy,
  CircleCheckBig,
  Mail,
  UserRound,
  Rss
} from "lucide-vue-next";
import { ref } from "vue";


const userName = useCookie("userName");
const userRole = useCookie("userRole");
const userEmail = useCookie("userEmail");
const userId = useCookie("userId");

const completedProgram = ref(0)

if (userRole.value === 'Admin') {
  completedProgram.value = 7
}
const Adminblogs = ref(0)

if (userRole.value === 'Admin') {
  Adminblogs.value = 4
}
const user = ref({
  name: userName,
  email: userEmail ? userEmail : "admin@example.com",
  completed: userRole !== "Admin" ? 7 : 0,
  score: userRole !== "Admin" ? 4 : 0,
  inProgress: 1,
});

const reports = ref([
  {
    title: "React Fundamentals",
    duration: "4 weeks",
    completed: "3/15/2024",
    score: 95,
  },
  {
    title: "Advanced JavaScript",
    duration: "6 weeks",
    completed: "2/28/2024",
    score: 88,
  },
  {
    title: "TypeScript Mastery",
    duration: "3 weeks",
    completed: "4/10/2024",
    score: 92,
  },
  {
    title: "Node.js Backend",
    duration: "8 weeks",
    completed: "",
    score: null,
  },
]);



import { useUserPage } from "~/composables/user"
const { fetchPrograms, fetchUserDataTest } = useUserPage();

const token = useCookie("token");

const runtimeConfig = useRuntimeConfig();
const loading = ref(false);

const fetchUserData = async () => {
  console.log(token.value);
  console.log(userRole.value);
  console.log(runtimeConfig.public.BaseApi);
  loading.value = true;
  try {
    const response = await fetch(
      `https://zeropoint.runasp.net/api/Users`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      },
    );
    return response;
  } catch (err) {
    console.error("Fetch error:", err);
  } finally {
    loading.value = false;
  }
};
onMounted(() => {
  fetchUserDataTest();
  // fetchUserData();
});


// definePageMeta({
//   middleware: 'auth',
// })


</script>


<style scoped></style>