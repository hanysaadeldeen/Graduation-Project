<template>
  <footer
    class="text-white from-primary to-[#09090B] border-t border-gray-800 py-6 md:py-8"
    :class="
      adjustedPath === '/ForgetPassword' ||
      adjustedPath === '/Login' ||
      adjustedPath === '/Register' ||
      adjustedPath === '/ResetPassword'
        ? 'bg-gradient-to-b'
        : 'bg-gradient-to-t'
    "
  >
    <div class="container mx-auto relative max-sm:px-4 px-2">
      <div
        class="flex max-lg:flex-col max-lg:items-start justify-between items-end gap-8"
      >
        <div class="">
          <img
            src="~/assets/img/LogoWhite-V.svg"
            class="max-w-[192px] object-contain"
            alt="logo"
          />
        </div>
        <div class="subscribe">
          <h1
            class="text-2xl mb-5 md:text-center text-paragraph"
            :class="locale === 'ar' ? 'text-right' : 'text-left'"
          >
            <span class="text-white"> Subscribe </span>
            <br />
            New Security Updates Weekly!
          </h1>
          <form @submit.prevent="" class="lg:mx-auto">
            <input
              class="bg-primary"
              type="text"
              placeholder="Enter Your Email"
            />
            <button
              class="font-bold tracking-wider text-lg bg-gradient-to-l from-primary to-secondary"
            >
              subscribe
            </button>
          </form>
        </div>
        <div class="social">
          <div class="flex gap-6">
            <i
              class="fa-brands fa-facebook text-paragraph hover:text-white transition-all duration-300 ease-in-out cursor-pointer text-2xl"
            ></i>
            <i
              class="fa-brands fa-twitter text-paragraph hover:text-white transition-all duration-300 ease-in-out cursor-pointer text-2xl"
            ></i>
            <i
              class="fa-brands fa-github text-paragraph hover:text-white transition-all duration-300 ease-in-out cursor-pointer text-2xl"
            ></i>
            <i
              class="fa-brands fa-linkedin text-paragraph hover:text-white transition-all duration-300 ease-in-out cursor-pointer text-2xl"
            ></i>
          </div>
        </div>
      </div>

      <div
        class="flex flex-wrap lg:justify-between items-start mt-8 lg:mx-auto w-fit gap-6 md:gap-10 text-lg md:text-xl font-semibold"
      >
        <nuxt-link
          class="cursor-pointer text-white hover:text-paragraph transition-all duration-300 ease-in-out"
        >
          <p>{{ $t("Home") }}</p>
        </nuxt-link>
        <nuxt-link
          class="cursor-pointer text-white hover:text-paragraph transition-all duration-300 ease-in-out"
        >
          <p>{{ $t("Platform") }}</p>
        </nuxt-link>
        <nuxt-link
          class="cursor-pointer text-white hover:text-paragraph transition-all duration-300 ease-in-out"
        >
          <p>{{ $t("Blogs") }}</p>
        </nuxt-link>
        <nuxt-link
          class="cursor-pointer text-white hover:text-paragraph transition-all duration-300 ease-in-out"
        >
          <p>{{ $t("Services") }}</p>
        </nuxt-link>
        <nuxt-link
          class="cursor-pointer text-white hover:text-paragraph transition-all duration-300 ease-in-out"
        >
          <p>{{ $t("Company") }}</p>
        </nuxt-link>
        <nuxt-link
          class="cursor-pointer text-white hover:text-paragraph transition-all duration-300 ease-in-out"
        >
          <!-- :to="localePath('gallery')" -->
          <p>{{ $t("Partners") }}</p>
        </nuxt-link>
      </div>

      <h1
        class="sm:text-center text-paragraph-mediumDark font-medium text-base my-6 text-paragraph"
      >
        Our mission is to improve cybersecurity in every company we touch.
      </h1>
      <h1
        class="border-t sm:text-center border-primary text-paragraph-mediumDark font-medium text-base pt-6"
      >
        Copyright © 2025 Zero Point Path. All Rights Reserved.
      </h1>
    </div>
  </footer>
</template>

<script setup lang="ts">
const route = useRoute();
const adjustedPath = ref("");
const { locale } = useI18n();

const getPathWithoutLocale = (path: string) => {
  const segments = path.split("/");
  if (segments[1] && segments[1].length === 2) {
    return `/${segments.slice(2).join("/")}`;
  }
  return path;
};

watchEffect(() => {
  adjustedPath.value = getPathWithoutLocale(route.path);
});
</script>

<style scoped>
.footer_title {
  @apply capitalize text-base font-normal text-[#BD292E] mb-6;
}

@media (max-width: 768px) {
  .footer_title {
    @apply mb-4;
  }
}

.subscribe {
  width: 100%;
}
.subscribe form {
  width: 600px;
  padding: 15px 20px;
  background-image: url("~/assets/img/footer.svg");
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50px;
  display: flex;
  gap: 10px;
}
@media (max-width: 767px) {
  .subscribe form {
    max-width: 100%;
    padding: 20px;
    flex-direction: column;
  }
}
.subscribe form input {
  padding: 16px;
  border-radius: 50px;
  border: none;
  outline: none;
  flex: 1;
  border-radius: 50px;
}
.subscribe form input::-webkit-input-placeholder {
  color: #a1a1aa;
}

.subscribe form input:focus::-webkit-input-placeholder {
  opacity: 0;
  transition: 0.3s;
}
.subscribe form button {
  padding: 16px;
  border-radius: 50px;
  border: none;
  text-transform: capitalize;
  cursor: pointer;
}
</style>
