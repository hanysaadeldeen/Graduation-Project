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
              <h4>{{ $t("login") }}</h4>
            </nuxt-link>
            <button
              @click="setLocale(locale === 'en' ? 'ar' : 'en')"
              class="font-medium text-xl cursor-pointer"
            >
              {{ locale === "en" ? "العربية" : "English" }}
            </button>
            <!-- <h4>{{ $t("blog") }}</h4> -->
            <nuxt-link :to="localePath('blog')">
              <p :class="adjustedPath === 'blog' ? 'active' : ''">
                {{ $t("blog") }}
              </p>
            </nuxt-link>
            <button
              class="rounded-full border transition-all duration-500 ease-in-out px-7 py-2"
              :class="
                adjustedPath === '/' || adjustedPath === '/blog'
                  ? ' text-white '
                  : ' text-black  border-black'
              "
            >
              <span class="button-text">{{ $t("contact_us") }}</span>
            </button>
          </div>
          <div class="block lg:hidden">
            <i
              @click="isSideBar = !isSideBar"
              class="fa-solid fa-bars-staggered text-3xl cursor-pointer"
            ></i>
          </div>
        </div>
      </div>
      <transition :name="transitionName">
        <div
          v-if="isSideBar"
          class="sideBar z-40 lg:hidden absolute flex flex-col px-8 items-start w-full right-0 h-[calc(100vh-75px)] transition-all bg-white text-black"
          :class="[
            {
              'right-0': locale === 'ar',
              'left-0': locale !== 'ar',
            },
          ]"
        >
          <nav class="inline-block mt-10">
            <ul class="flex flex-col gap-5">
              <nuxt-link
                :to="localePath('index')"
                @click="isSideBar = !isSideBar"
              >
                <li :class="adjustedPath === '/' ? 'active' : ''">
                  {{ $t("home") }}
                </li>
              </nuxt-link>
              <nuxt-link
                :to="localePath('blog')"
                @click="isSideBar = !isSideBar"
              >
                <li :class="adjustedPath === 'blog' ? 'active' : ''">
                  {{ $t("blog") }}
                </li>
              </nuxt-link>
            </ul>
          </nav>
          <div class="gap-5 mt-5 flex flex-col justify-between items-start">
            <nuxt-link
              :to="localePath('Login')"
              @click="isSideBar = !isSideBar"
            >
              <h4>{{ $t("login") }}</h4>
            </nuxt-link>
            <button
              @click="setLocale(locale === 'en' ? 'ar' : 'en')"
              class="font-medium text-xl"
            >
              {{ locale === "en" ? "العربية" : "English" }}
            </button>
            <button
              class="rounded-full border transition-all duration-500 ease-in-out px-7 py-2"
            >
              <span class="button-text">{{ $t("contact_us") }}</span>
            </button>
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

// const handleResize = () => {
//   if (window.innerWidth > 768) {
//     isSideBar.value = false;
//   } else {
//     isSideBar.value = true;
//   }
// };

// const addResizeListener = () => {
//   window.addEventListener("resize", handleResize);
// };

// const removeResizeListener = () => {
//   window.removeEventListener("resize", handleResize);
// };

// if (typeof window !== "undefined") {
//   onMounted(() => {
//     addResizeListener();
//     handleResize();
//   });

//   onUnmounted(() => {
//     removeResizeListener();
//   });
// }
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
</style>
