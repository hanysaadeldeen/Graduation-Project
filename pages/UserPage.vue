<template>
  <div
    class="min-h-screen bg-gradient-to-t from-[#09090B] via-primary to-[#09090B] px-4 py-10 md:px-16"
  >
    <!-- Title -->
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
              <img
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop&crop=face"
                alt="Profile"
                class="h-28 w-28 rounded-full border-4 border-white object-cover shadow"
              />
              <span
                class="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-green-500"
              ></span>
            </div>
            <h2 class="mt-4 text-xl font-semibold text-white">
              {{ userName }}
            </h2>
            <!-- <p class="text-sm text-paragraph">
              👤 Member since {{ user.memberSince }}
            </p> -->
          </div>
        </div>
        <div class="h-full rounded-xl bg-secondary/20 p-6 shadow-lg">
          <h3 class="mb-4 text-center text-lg font-semibold text-white">
            📁 Personal Information
          </h3>
          <div
            class="flex flex-col items-center justify-center space-y-8 text-center"
          >
            <div class="hover:bg-secondary/20/50 flex space-x-3">
              <UserRound class="h-[20px] w-[20px] text-hookYellow" />
              <span class="font-medium text-white">{{ user.name }}</span>
            </div>
            <div class="hover:bg-secondary/20/50 flex space-x-3">
              <Mail class="h-[20px] w-[20px] text-hookYellow" />
              <span class="text-white">{{ user.email }}</span>
            </div>
            <div class="hover:bg-secondary/20/50 flex items-center space-x-3">
              <Phone class="h-[20px] w-[20px] text-hookYellow" />
              <span class="text-white">{{ user.phone }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-y-4 lg:col-span-2">
        <div class="col-span-2 grid gap-4 md:grid-cols-3">
          <div
            class="flex h-fit flex-col items-center justify-center gap-1 rounded-xl bg-secondary/20 py-8 text-center shadow"
          >
            <div class="rounded-lg bg-green-100 p-2.5">
              <CircleCheckBig class="h-[25px] w-[25px] text-green-500" />
            </div>
            <h3 class="mt-2 text-xl font-bold text-white">
              {{ user.completed }}
            </h3>
            <p class="text-paragraph">Completed Programs</p>
          </div>

          <div
            class="flex h-fit flex-col items-center justify-center gap-1 rounded-xl bg-secondary/20 py-8 text-center shadow"
          >
            <div class="rounded-lg bg-blue-100 p-2.5">
              <trophy class="h-[25px] w-[25px] text-blue-500" />
            </div>
            <h3 class="mt-2 text-xl font-bold text-white">{{ user.score }}%</h3>
            <p class="text-paragraph">Average Score</p>
          </div>
          <div
            class="flex h-fit flex-col items-center justify-center gap-1 rounded-xl bg-secondary/20 py-8 text-center shadow"
          >
            <div class="rounded-lg bg-orange-100 p-2.5">
              <Clock class="h-[25px] w-[25px] text-orange-500" />
            </div>
            <h3 class="mt-2 text-xl font-bold text-white">
              {{ user.inProgress }}
            </h3>
            <p class="text-paragraph">In Progress</p>
          </div>
        </div>
        <div class="rounded-xl bg-secondary/20 p-6 shadow-lg">
          <h3
            class="mb-4 flex items-center gap-2 text-lg font-semibold text-white"
          >
            <font-awesome-icon icon="file-alt" />
            Program Reports
          </h3>
          <div
            v-for="report in reports"
            :key="report.title"
            class="mb-3 flex items-center justify-between rounded-lg bg-secondary/20 p-4"
          >
            <div>
              <h4 class="font-semibold text-white">{{ report.title }}</h4>
              <p class="text-sm text-paragraph">
                {{ report.duration }} • Completed: {{ report.completed }}
              </p>
            </div>
            <div class="flex items-center gap-2">
              <span
                v-if="report.score"
                class="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-600"
              >
                {{ report.score }}%
              </span>
              <span
                v-else
                class="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-600"
              >
                In Progress
              </span>
              <Trophy class="text-hookYellow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Trophy,
  Clock,
  CircleCheckBig,
  AlertCircle,
  FileText,
  Phone,
  Mail,
  UserRound,
} from "lucide-vue-next";
import { ref } from "vue";

const profileImage = "/default-avatar.png"; // Replace with your actual image or upload URL

const userName = useCookie("userName");

const user = ref({
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  memberSince: "January 2024",
  completed: 3,
  score: 92,
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
</script>
