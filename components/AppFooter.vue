<template>
  <footer
    class="border-t border-gray-800 from-primary to-[#09090B] py-6 text-white md:py-8"
    :class="
      adjustedPath === '/ForgetPassword' ||
      adjustedPath === '/Login' ||
      adjustedPath === '/Register' ||
      adjustedPath === '/ResetPassword'
        ? 'bg-gradient-to-b'
        : 'bg-gradient-to-t'
    "
  >
    <div class="container relative mx-auto px-2 max-sm:px-4">
      <div
        class="flex items-end justify-between gap-8 max-lg:flex-col max-lg:items-start"
      >
        <img
          src="~/assets/img/LogoWhite-V.svg"
          alt="Logo"
          class="mx-auto max-w-[192px] object-contain"
        />
        <div class="subscribe">
          <h1
            class="mb-5 text-center text-2xl text-paragraph"
            :class="locale === 'ar' ? 'text-right' : 'text-left'"
          >
            <span class="text-white"> Subscribe </span>
            <br />
            New Security Updates Weekly!
          </h1>
          <form @submit.prevent="" class="mx-auto">
            <input
              class="bg-primary"
              type="text"
              placeholder="Enter Your Email"
            />
            <button
              class="bg-gradient-to-l from-primary to-secondary text-lg font-bold tracking-wider"
            >
              subscribe
            </button>
          </form>
        </div>
        <div class="social">
          <div class="flex gap-6">
            <i
              class="fa-brands fa-facebook cursor-pointer text-2xl text-paragraph transition-all duration-300 ease-in-out hover:text-white"
            ></i>
            <i
              class="fa-brands fa-twitter cursor-pointer text-2xl text-paragraph transition-all duration-300 ease-in-out hover:text-white"
            ></i>
            <i
              class="fa-brands fa-github cursor-pointer text-2xl text-paragraph transition-all duration-300 ease-in-out hover:text-white"
            ></i>
            <i
              class="fa-brands fa-linkedin cursor-pointer text-2xl text-paragraph transition-all duration-300 ease-in-out hover:text-white"
            ></i>
          </div>
        </div>
      </div>

      <div
        class="mt-8 flex w-fit flex-wrap items-start gap-6 text-lg font-semibold md:gap-10 md:text-xl lg:mx-auto lg:justify-between"
      >
        <div
          class="cursor-pointer text-white transition-all duration-300 ease-in-out hover:text-paragraph"
        >
          <p>{{ $t("Home") }}</p>
        </div>
        <div
          class="cursor-pointer text-white transition-all duration-300 ease-in-out hover:text-paragraph"
        >
          <p>{{ $t("Platform") }}</p>
        </div>
        <div
          class="cursor-pointer text-white transition-all duration-300 ease-in-out hover:text-paragraph"
        >
          <p>{{ $t("Blogs") }}</p>
        </div>
        <div
          class="cursor-pointer text-white transition-all duration-300 ease-in-out hover:text-paragraph"
        >
          <p>{{ $t("Services") }}</p>
        </div>
        <div
          class="cursor-pointer text-white transition-all duration-300 ease-in-out hover:text-paragraph"
        >
          <p>{{ $t("Company") }}</p>
        </div>
        <div
          class="cursor-pointer text-white transition-all duration-300 ease-in-out hover:text-paragraph"
        >
          <!-- :to="localePath('gallery')" -->
          <p>{{ $t("Partners") }}</p>
        </div>
      </div>

      <h1
        class="text-paragraph-mediumDark my-6 text-base font-medium text-paragraph sm:text-center"
      >
        Our mission is to improve cybersecurity in every company we touch.
      </h1>
      <h1
        class="text-paragraph-mediumDark border-t border-primary pt-6 text-base font-medium sm:text-center"
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
  @apply mb-6 text-base font-normal capitalize text-[#BD292E];
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
