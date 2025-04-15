<template>
  <header class="relative z-10 bg-transparent py-5 text-white">
    <div class="container mx-auto px-2 max-sm:px-4">
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
          <div class="hidden items-center justify-between gap-10 lg:flex">
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
              class="relative flex cursor-pointer items-center gap-2"
              @click="isToolOpen = !isToolOpen"
            >
              <p :class="adjustedPath === 'tools' ? 'active' : ''">
                {{ $t("tools") }}
              </p>
              <i class="fa-solid fa-angle-down"></i>
              <transition name="dropdown">
                <div
                  v-if="isToolOpen"
                  class="arrowTools absolute -bottom-[25px] left-1/2 h-5 w-5 -translate-x-1/2"
                ></div>
              </transition>
            </nuxt-link>
            <nuxt-link
              :to="localePath('programs')"
              class="relative flex cursor-pointer items-center gap-2"
            >
              <p :class="adjustedPath === 'programs' ? 'active' : ''">
                {{ $t("Bounties") }}
              </p>
              <i class="fa-solid fa-virus"></i>
            </nuxt-link>
            <a
              href="https://ramadan-ctf-ieeemansb.me/"
              class="relative"
              target="_blank"
            >
              <p>
                {{ $t("CTF") }}
              </p>
            </a>
            <button
              @click="setLocale(locale === 'en' ? 'ar' : 'en')"
              class="cursor-pointer text-xl font-medium"
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
              class="fa-solid fa-bars-staggered cursor-pointer text-3xl"
            ></i>
          </div>
        </div>
        <transition name="dropdown">
          <div
            v-if="isToolOpen"
            class="absolute top-16 h-fit rounded-md bg-white p-4 max-lg:hidden md:w-fit"
            :class="{
              'left-5': locale === 'ar',
              'right-5': locale !== 'ar',
            }"
          >
            <div class="grid w-full grid-cols-2 gap-4 xl:grid-cols-3">
              <nuxt-link
                :to="localePath('websiteScanner')"
                @click="isToolOpen = !isToolOpen"
              >
                <div
                  class="tool mx-auto flex cursor-pointer flex-col items-center justify-center gap-4 rounded-md p-5 transition-all duration-300 ease-in-out hover:bg-[#E8EBF0]"
                >
                  <div>
                    <img src="~/assets/img/spider.svg" alt="spider" />
                  </div>
                  <p class="text-base font-semibold tracking-wider text-black">
                    Website Scanner
                  </p>
                </div>
              </nuxt-link>
              <nuxt-link
                :to="localePath('whoisScanner')"
                @click="isToolOpen = !isToolOpen"
              >
                <div
                  class="tool flex cursor-pointer flex-col items-center justify-center gap-4 rounded-md p-5 transition-all duration-300 ease-in-out hover:bg-[#E8EBF0]"
                >
                  <div
                    class="bg-hookYellow flex h-[48px] w-[48px] items-center justify-center rounded-md"
                  >
                    <i class="fa-solid fa-eye text-2xl text-[#744712]"></i>
                  </div>
                  <p class="text-base font-semibold tracking-wider text-black">
                    Whois Scanner
                  </p>
                </div>
              </nuxt-link>

              <nuxt-link
                :to="localePath('emailScanner')"
                @click="isToolOpen = !isToolOpen"
              >
                <div
                  class="tool flex cursor-pointer flex-col items-center justify-center gap-4 rounded-md p-5 transition-all duration-300 ease-in-out hover:bg-[#E8EBF0]"
                >
                  <div
                    class="bg-hookYellow flex h-[48px] w-[48px] items-center justify-center rounded-md"
                  >
                    <i class="fa-solid fa-envelope text-2xl text-[#744712]"></i>
                  </div>
                  <p class="text-base font-semibold tracking-wider text-black">
                    Email Scanner
                  </p>
                </div>
              </nuxt-link>

              <nuxt-link
                :to="localePath('passwordgenerator')"
                @click="isToolOpen = !isToolOpen"
              >
                <div
                  class="tool flex cursor-pointer flex-col items-center justify-center gap-4 rounded-md p-5 transition-all duration-300 ease-in-out hover:bg-[#E8EBF0]"
                >
                  <div>
                    <img src="~/assets/img/password.svg" alt="password" />
                  </div>
                  <p class="text-base font-semibold tracking-wider text-black">
                    Password Generator
                  </p>
                </div>
              </nuxt-link>
              <nuxt-link
                :to="localePath('virusscanner')"
                @click="isToolOpen = !isToolOpen"
              >
                <div
                  class="tool flex cursor-pointer flex-col items-center justify-center gap-4 rounded-md p-5 transition-all duration-300 ease-in-out hover:bg-[#E8EBF0]"
                >
                  <div
                    class="bg-hookYellow flex h-[48px] w-[48px] items-center justify-center rounded-md"
                  >
                    <i class="fa-solid fa-bug text-2xl text-[#744712]"></i>
                  </div>
                  <p class="text-base font-semibold tracking-wider text-black">
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
          class="sideBar absolute right-0 z-40 flex max-h-fit min-h-[calc(100vh-75px)] w-full flex-col items-start bg-white px-8 pb-5 text-black transition-all lg:hidden"
          :class="[
            {
              'right-0': locale === 'ar',
              'left-0': locale !== 'ar',
            },
          ]"
        >
          <nav class="mt-10 inline-block">
            <ul class="flex w-full flex-col gap-2">
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
                class="relative flex cursor-pointer items-center gap-2"
              >
                <li :class="adjustedPath === '/programs' ? 'active' : ''">
                  {{ $t("Bounties") }}
                </li>
                <i class="fa-solid fa-virus"></i>
              </nuxt-link>
              <a
                href="https://ramadan-ctf-ieeemansb.me/"
                @click="isSideBar = !isSideBar"
                class="relative flex cursor-pointer items-center gap-2"
                target="_blank"
              >
                <li :class="adjustedPath === '/ctf' ? 'active' : ''">
                  {{ $t("CTF") }}
                </li>
              </a>

              <nuxt-link
                :to="localePath('Login')"
                @click="isSideBar = !isSideBar"
              >
                <li :class="adjustedPath === '/Login' ? 'active' : ''">
                  {{ $t("login") }}
                </li>
              </nuxt-link>
              <nuxt-link
                class="relative flex cursor-pointer items-center gap-2"
                @click="isToolOpen = !isToolOpen"
              >
                <li>
                  {{ $t("tools") }}
                </li>
                <i class="fa-solid fa-angle-down"></i>
                <transition name="dropdown">
                  <div
                    v-if="isToolOpen"
                    class="arrowTools2 absolute -bottom-[8px] h-5 w-5"
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
                  <div class="grid w-full grid-cols-2 gap-5 bg-[#F4F8FD] p-3">
                    <nuxt-link
                      :to="localePath('websiteScanner')"
                      @click="
                        {
                          (isToolOpen = !isToolOpen), (isSideBar = !isSideBar);
                        }
                      "
                    >
                      <div
                        class="tool mx-auto flex cursor-pointer flex-col items-center justify-center gap-3 rounded-md p-2 transition-all duration-300 ease-in-out hover:bg-[#E8EBF0]"
                      >
                        <div>
                          <img src="~/assets/img/spider.svg" alt="spider" />
                        </div>
                        <p
                          class="text-center text-base font-semibold tracking-wider text-black"
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
                        class="tool flex cursor-pointer flex-col items-center justify-center gap-4 rounded-md p-2 transition-all duration-300 ease-in-out hover:bg-[#E8EBF0]"
                      >
                        <div
                          class="bg-hookYellow flex h-[48px] w-[48px] items-center justify-center rounded-md"
                        >
                          <i
                            class="fa-solid fa-eye text-2xl text-[#744712]"
                          ></i>
                        </div>
                        <p
                          class="text-center text-base font-semibold tracking-wider text-black"
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
                        class="tool flex cursor-pointer flex-col items-center justify-center gap-4 rounded-md p-2 transition-all duration-300 ease-in-out hover:bg-[#E8EBF0]"
                      >
                        <div
                          class="bg-hookYellow flex h-[48px] w-[48px] items-center justify-center rounded-md"
                        >
                          <i
                            class="fa-solid fa-envelope text-2xl text-[#744712]"
                          ></i>
                        </div>
                        <p
                          class="text-center text-base font-semibold tracking-wider text-black"
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
                        class="tool flex cursor-pointer flex-col items-center justify-center gap-4 rounded-md p-2 transition-all duration-300 ease-in-out hover:bg-[#E8EBF0]"
                      >
                        <div>
                          <img src="~/assets/img/password.svg" alt="password" />
                        </div>
                        <p
                          class="text-center text-base font-semibold tracking-wider text-black"
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
                        class="tool flex cursor-pointer flex-col items-center justify-center gap-4 rounded-md p-2 transition-all duration-300 ease-in-out hover:bg-[#E8EBF0]"
                      >
                        <div
                          class="bg-hookYellow flex h-[48px] w-[48px] items-center justify-center rounded-md"
                        >
                          <i
                            class="fa-solid fa-bug text-2xl text-[#744712]"
                          ></i>
                        </div>
                        <p
                          class="text-center text-base font-semibold tracking-wider text-black"
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
          <div class="mt-5 flex flex-col items-start justify-between gap-5">
            <button
              @click="setLocale(locale === 'en' ? 'ar' : 'en')"
              class="text-xl font-medium"
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
  locale.value === "ar" ? "sidebar-ar" : "sidebar-en",
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
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
}

.dropdown-enter-from,
.dropdown-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
