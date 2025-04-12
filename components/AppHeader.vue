<template>
  <header class="z-10 relative py-5 text-white bg-transparent">
    <div class="container mx-auto max-sm:px-4 px-2">
      <div class="relative z-20">
        <div class="flex items-center justify-between">
          <nuxt-link :to="localePath('index')">
            <img
              src="~/assets/img/Logo White-H.svg"
              alt="Zero Point Path"
              class="inline-block w-48 object-contain"
            />
          </nuxt-link>
          <!-- <nav class="hidden lg:block">
            <ul class="flex gap-10">
              <li :class="adjustedPath === '/' ? 'active' : ''">
                <nuxt-link :to="localePath('index')">
                  {{ $t("home") }}
                </nuxt-link>
              </li>
              <li :class="adjustedPath === '/company' ? 'active' : ''">
                <nuxt-link :to="localePath('company')">{{
                  $t("company")
                }}</nuxt-link>
              </li>
              <li :class="adjustedPath === '/services' ? 'active' : ''">
                <nuxt-link :to="localePath('solution')">{{
                  $t("services")
                }}</nuxt-link>
              </li>
              <li :class="adjustedPath === '/clients' ? 'active' : ''">
                <nuxt-link :to="localePath('clients')">{{
                  $t("clients")
                }}</nuxt-link>
              </li>
              <li :class="adjustedPath === '/galary' ? 'active' : ''">
                <nuxt-link :to="localePath('galary')">{{
                  $t("gallery")
                }}</nuxt-link>
              </li>
            </ul>
          </nav> -->
          <div class="gap-10 justify-between items-center hidden lg:flex">
            <nuxt-link :to="localePath('Login')">
              <p :class="adjustedPath === '/' ? '/Login' : ''">
                {{ $t("login") }}
              </p>
            </nuxt-link>

            <!-- <h4>{{ $t("blog") }}</h4> -->
            <nuxt-link :to="localePath('blogs')">
              <p :class="adjustedPath === 'blogs' ? 'active' : ''">
                {{ $t("blogs") }}
              </p>
            </nuxt-link>
            <nuxt-link
              class="flex gap-2 items-center cursor-pointer relative"
              @click="isToolOpen = !isToolOpen"
            >
              <p :class="adjustedPath === 'tools' ? 'active' : ''">
                {{ $t("tools") }}
              </p>
              <i class="fa-solid fa-angle-down"></i>
              <transition name="dropdown">
                <div
                  v-if="isToolOpen"
                  class="absolute w-5 h-5 -bottom-[25px] left-1/2 -translate-x-1/2 arrowTools"
                ></div>
              </transition>
            </nuxt-link>
            <nuxt-link
              :to="localePath('programs')"
              class="flex gap-2 items-center cursor-pointer relative"
            >
              <p :class="adjustedPath === 'programs' ? 'active' : ''">
                {{ $t("Bounties") }}
              </p>
              <i class="fa-solid fa-virus"></i>
            </nuxt-link>
            <button
              @click="setLocale(locale === 'en' ? 'ar' : 'en')"
              class="font-medium text-xl cursor-pointer"
            >
              {{ locale === "en" ? "العربية" : "English" }}
            </button>

            <!-- <button
              class="rounded-full border transition-all duration-500 ease-in-out px-7 py-2 text-white"
            >
              <span class="button-text">{{ $t("contact_us") }}</span>
            </button> -->
          </div>
          <div class="block lg:hidden">
            <i
              @click="isSideBar = !isSideBar"
              class="fa-solid fa-bars-staggered text-3xl cursor-pointer"
            ></i>
          </div>
        </div>
        <transition name="dropdown">
          <div
            v-if="isToolOpen"
            class="absolute top-16 md:w-fit rounded-md h-fit bg-white p-4 max-lg:hidden"
            :class="{
              'left-5': locale === 'ar',
              'right-5': locale !== 'ar',
            }"
          >
            <div class="w-full grid grid-cols-2 xl:grid-cols-3 gap-4">
              <nuxt-link
                :to="localePath('websiteScanner')"
                @click="isToolOpen = !isToolOpen"
              >
                <div
                  class="tool flex flex-col gap-4 items-center justify-center mx-auto p-5 rounded-md hover:bg-[#E8EBF0] cursor-pointer transition-all duration-300 ease-in-out"
                >
                  <div>
                    <img src="~/assets/img/spider.svg" alt="spider" />
                  </div>
                  <p class="text-black font-semibold tracking-wider text-base">
                    Website Scanner
                  </p>
                </div>
              </nuxt-link>
              <nuxt-link
                :to="localePath('whoisScanner')"
                @click="isToolOpen = !isToolOpen"
              >
                <div
                  class="tool flex flex-col gap-4 items-center justify-center p-5 rounded-md hover:bg-[#E8EBF0] cursor-pointer transition-all duration-300 ease-in-out"
                >
                  <div
                    class="bg-[#FFB45C] w-[48px] h-[48px] rounded-md flex items-center justify-center"
                  >
                    <i class="fa-solid fa-eye text-[#744712] text-2xl"></i>
                  </div>
                  <p class="text-black font-semibold tracking-wider text-base">
                    Whois Scanner
                  </p>
                </div>
              </nuxt-link>

              <nuxt-link
                :to="localePath('emailScanner')"
                @click="isToolOpen = !isToolOpen"
              >
                <div
                  class="tool flex flex-col gap-4 items-center justify-center p-5 rounded-md hover:bg-[#E8EBF0] cursor-pointer transition-all duration-300 ease-in-out"
                >
                  <div
                    class="bg-[#FFB45C] w-[48px] h-[48px] rounded-md flex items-center justify-center"
                  >
                    <i class="fa-solid fa-envelope text-[#744712] text-2xl"></i>
                  </div>
                  <p class="text-black font-semibold tracking-wider text-base">
                    Email Scanner
                  </p>
                </div>
              </nuxt-link>

              <nuxt-link
                :to="localePath('passwordgenerator')"
                @click="isToolOpen = !isToolOpen"
              >
                <div
                  class="tool flex flex-col gap-4 items-center justify-center p-5 rounded-md hover:bg-[#E8EBF0] cursor-pointer transition-all duration-300 ease-in-out"
                >
                  <div>
                    <img src="~/assets/img/password.svg" alt="password" />
                  </div>
                  <p class="text-black font-semibold tracking-wider text-base">
                    Password Generator
                  </p>
                </div>
              </nuxt-link>
              <nuxt-link
                :to="localePath('virusscanner')"
                @click="isToolOpen = !isToolOpen"
              >
                <div
                  class="tool flex flex-col gap-4 items-center justify-center p-5 rounded-md hover:bg-[#E8EBF0] cursor-pointer transition-all duration-300 ease-in-out"
                >
                  <div
                    class="bg-[#FFB45C] w-[48px] h-[48px] rounded-md flex items-center justify-center"
                  >
                    <i class="fa-solid fa-bug text-[#744712] text-2xl"></i>
                  </div>
                  <p class="text-black font-semibold tracking-wider text-base">
                    Virus scan
                  </p>
                </div>
              </nuxt-link>
            </div>
          </div>
        </transition>
      </div>
      <transition :name="transitionName">
        <div
          v-if="isSideBar"
          class="sideBar z-40 lg:hidden absolute flex flex-col px-8 pb-5 items-start w-full right-0 min-h-[calc(100vh-75px)] max-h-fit transition-all bg-white text-black"
          :class="[
            {
              'right-0': locale === 'ar',
              'left-0': locale !== 'ar',
            },
          ]"
        >
          <nav class="inline-block mt-10">
            <ul class="flex flex-col gap-2 w-full">
              <nuxt-link
                :to="localePath('index')"
                @click="isSideBar = !isSideBar"
              >
                <li :class="adjustedPath === '/' ? 'active' : ''">
                  {{ $t("home") }}
                </li>
              </nuxt-link>
              <nuxt-link
                :to="localePath('blogs')"
                @click="isSideBar = !isSideBar"
              >
                <li :class="adjustedPath === '/blogs' ? 'active' : ''">
                  {{ $t("blogs") }}
                </li>
              </nuxt-link>
              <nuxt-link
                :to="localePath('programs')"
                @click="isSideBar = !isSideBar"
                class="flex gap-2 items-center cursor-pointer relative"
              >
                <li :class="adjustedPath === '/programs' ? 'active' : ''">
                  {{ $t("programs") }}
                </li>
                <i class="fa-solid fa-virus"></i>
              </nuxt-link>
              <nuxt-link
                :to="localePath('Login')"
                @click="isSideBar = !isSideBar"
              >
                <li :class="adjustedPath === '/Login' ? 'active' : ''">
                  {{ $t("login") }}
                </li>
              </nuxt-link>
              <nuxt-link
                class="flex gap-2 items-center cursor-pointer relative"
                @click="isToolOpen = !isToolOpen"
              >
                <li>
                  {{ $t("tools") }}
                </li>
                <i class="fa-solid fa-angle-down"></i>
                <transition name="dropdown">
                  <div
                    v-if="isToolOpen"
                    class="absolute w-5 h-5 -bottom-[8px] arrowTools2"
                    :class="{
                      'left-5': locale === 'en',
                      'right-0': locale !== 'ar',
                    }"
                  ></div>
                </transition>
              </nuxt-link>
              <transition name="dropdown">
                <div
                  v-if="isToolOpen"
                  :class="{
                    'left-5': locale === 'ar',
                    'right-5': locale !== 'ar',
                  }"
                >
                  <div class="w-full grid grid-cols-2 gap-5 bg-[#F4F8FD] p-3">
                    <nuxt-link
                      :to="localePath('websiteScanner')"
                      @click="
                        {
                          (isToolOpen = !isToolOpen), (isSideBar = !isSideBar);
                        }
                      "
                    >
                      <div
                        class="tool flex flex-col gap-3 items-center justify-center mx-auto p-2 rounded-md hover:bg-[#E8EBF0] cursor-pointer transition-all duration-300 ease-in-out"
                      >
                        <div>
                          <img src="~/assets/img/spider.svg" alt="spider" />
                        </div>
                        <p
                          class="text-black font-semibold tracking-wider text-base text-center"
                        >
                          Website Scanner
                        </p>
                      </div>
                    </nuxt-link>
                    <nuxt-link
                      :to="localePath('whoisScanner')"
                      @click="
                        {
                          (isToolOpen = !isToolOpen), (isSideBar = !isSideBar);
                        }
                      "
                    >
                      <div
                        class="tool flex flex-col gap-4 items-center justify-center p-2 rounded-md hover:bg-[#E8EBF0] cursor-pointer transition-all duration-300 ease-in-out"
                      >
                        <div
                          class="bg-[#FFB45C] w-[48px] h-[48px] rounded-md flex items-center justify-center"
                        >
                          <i
                            class="fa-solid fa-eye text-[#744712] text-2xl"
                          ></i>
                        </div>
                        <p
                          class="text-black font-semibold tracking-wider text-base text-center"
                        >
                          Whois scanner
                        </p>
                      </div>
                    </nuxt-link>
                    <nuxt-link
                      :to="localePath('emailScanner')"
                      @click="
                        {
                          (isToolOpen = !isToolOpen), (isSideBar = !isSideBar);
                        }
                      "
                    >
                      <div
                        class="tool flex flex-col gap-4 items-center justify-center p-2 rounded-md hover:bg-[#E8EBF0] cursor-pointer transition-all duration-300 ease-in-out"
                      >
                        <div
                          class="bg-[#FFB45C] w-[48px] h-[48px] rounded-md flex items-center justify-center"
                        >
                          <i
                            class="fa-solid fa-envelope text-[#744712] text-2xl"
                          ></i>
                        </div>
                        <p
                          class="text-black font-semibold tracking-wider text-base text-center"
                        >
                          Email Scanner
                        </p>
                      </div>
                    </nuxt-link>
                    <nuxt-link
                      :to="localePath('passwordgenerator')"
                      @click="
                        {
                          (isToolOpen = !isToolOpen), (isSideBar = !isSideBar);
                        }
                      "
                    >
                      <div
                        class="tool flex flex-col gap-4 items-center justify-center p-2 rounded-md hover:bg-[#E8EBF0] cursor-pointer transition-all duration-300 ease-in-out"
                      >
                        <div>
                          <img src="~/assets/img/password.svg" alt="password" />
                        </div>
                        <p
                          class="text-black font-semibold tracking-wider text-base text-center"
                        >
                          Password Generator
                        </p>
                      </div>
                    </nuxt-link>
                    <nuxt-link
                      :to="localePath('virusscanner')"
                      @click="
                        {
                          (isToolOpen = !isToolOpen), (isSideBar = !isSideBar);
                        }
                      "
                    >
                      <div
                        class="tool flex flex-col gap-4 items-center justify-center p-2 rounded-md hover:bg-[#E8EBF0] cursor-pointer transition-all duration-300 ease-in-out"
                      >
                        <div
                          class="bg-[#FFB45C] w-[48px] h-[48px] rounded-md flex items-center justify-center"
                        >
                          <i
                            class="fa-solid fa-bug text-[#744712] text-2xl"
                          ></i>
                        </div>
                        <p
                          class="text-black font-semibold tracking-wider text-base text-center"
                        >
                          Virus scan
                        </p>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </transition>
            </ul>
          </nav>
          <div class="gap-5 mt-5 flex flex-col justify-between items-start">
            <button
              @click="setLocale(locale === 'en' ? 'ar' : 'en')"
              class="font-medium text-xl"
            >
              {{ locale === "en" ? "العربية" : "English" }}
            </button>
            <!-- <button
              class="rounded-full border transition-all duration-500 ease-in-out px-7 py-2"
            >
              <span class="button-text">{{ $t("contact_us") }}</span>
            </button> -->
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n();
const localePath = useLocalePath();
const isSideBar = ref<boolean>(false);
const transitionName = computed(() =>
  locale.value === "ar" ? "sidebar-ar" : "sidebar-en"
);
const route = useRoute();
const getPathWithoutLocale = (path: string) => {
  const segments = path.split("/");
  if (segments[1] && segments[1].length === 2) {
    return `/${segments.slice(2).join("/")}`;
  }
  return path;
};
const adjustedPath = computed(() => getPathWithoutLocale(route.path));

const isToolOpen = ref<boolean>(false);
</script>

<style scoped>
a {
  text-decoration: none;
}
ul li {
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  display: inline-block;
  position: relative;
  list-style: none;
  width: fit-content;
  padding: 10px 0;
  cursor: pointer;
}
ul li::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1.9px;
  background: linear-gradient(to right, #bd292e 75%, #f9ae31 25%);
  bottom: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease-in-out;
}
.gradient-button {
  position: relative;
  overflow: hidden;
  display: inline-block;
  padding: 0.5rem 1.25rem;
  font-size: 1.125rem;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
}

.gradient-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, #e91c2b 65%, #f9ae31 100%);
  z-index: 0;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.button-text {
  position: relative;
  z-index: 1;
}

.gradient-button:hover .gradient-bg {
  opacity: 1;
}

ul li:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}
ul li.active::before {
  transform: scaleX(1);
}

.sidebar-en-enter-active,
.sidebar-en-leave-active,
.sidebar-ar-enter-active,
.sidebar-ar-leave-active {
  transition: all 0.5s ease;
}

.sidebar-en-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.sidebar-en-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.sidebar-ar-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.sidebar-ar-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.arrowTools,
.arrowTools2 {
  border-width: 10px;
  border-style: solid;
}
.arrowTools {
  border-color: transparent transparent white transparent;
}
.arrowTools2 {
  border-color: transparent transparent #f4f8fd transparent;
}
.dropdown-enter-active,
.dropdown-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.dropdown-enter-from,
.dropdown-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
