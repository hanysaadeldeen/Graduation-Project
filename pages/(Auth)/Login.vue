<template>
  <div
    class="startSection w-full bg-gradient-to-t from-primary to-[#09090B] text-white"
  >
    <div class="container relative mx-auto h-full px-4">
      <div class="flex h-full justify-between">
        <div class="hidden h-full w-1/2 items-center justify-center lg:flex">
          <img
            src="~/assets/img/LogoWhite-V.svg"
            alt="Logo"
            class="w-[350px]"
            width="350"
            height="70"
          />
        </div>

        <div
          class="flex w-full items-center justify-center border-secondary lg:w-1/2"
          :class="locale === 'ar' ? 'lg:border-r' : 'lg:border-l'"
        >
          <div
            class="flex w-full flex-col items-center justify-center px-5 lg:px-10"
          >
            <h1
              class="mb-5 bg-gradient-to-r from-[#FFFFFF] to-[#71717A] bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl"
            >
              Login Page
            </h1>
            <div class="w-full">
              <Form
                @submit="onSubmit"
                :validation-schema="schema"
                v-slot="{ errors }"
              >
                <div class="mb-4">
                  <label
                    for="email"
                    class="mb-2 inline-block cursor-pointer text-xl font-semibold text-paragraph"
                    >Email</label
                  >
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    class="w-full rounded-md border border-none border-transparent bg-primary p-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    :class="{ 'border-red-500': errors.email }"
                  />
                  <span class="text-sm text-red-500">{{ errors.email }}</span>
                </div>
                <div class="mb-8">
                  <label
                    for="password"
                    class="mb-2 inline-block cursor-pointer text-xl font-semibold text-paragraph"
                    >Password</label
                  >
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter Your Email"
                    class="w-full rounded-md border border-none border-transparent bg-primary p-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    :class="{ 'border-red-500': errors.password }"
                  />
                  <span class="text-sm text-red-500">{{
                    errors.password
                  }}</span>
                </div>
                <button
                  :disabled="isLoading"
                  type="submit"
                  class="w-full rounded-xl bg-gradient-to-l from-primary to-secondary py-2 text-2xl font-bold capitalize tracking-wider text-white"
                  :class="{ 'cursor-not-allowed opacity-50': isLoading }"
                >
                  Login In
                </button>
              </Form>
              <nuxt-link :to="localePath('Register')">
                <h1 class="mt-5 text-center text-xl text-paragraph">
                  Create Account <span class="text-white">Register</span>
                </h1>
              </nuxt-link>
              <nuxt-link :to="localePath('ForgetPassword')">
                <h1 class="mt-5 text-center text-xl text-paragraph">
                  Forget <span class="text-white">Password</span>
                </h1>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Form, Field } from "vee-validate";
const { locale } = useI18n();
import * as yup from "yup";
import { useAuthStore } from "~/stores/authStore";
import { useToast } from "vue-toast-notification";
import { useAuth } from "../../composables/useAuth";

const toast = useToast({ position: "top-right", duration: 1500 });

const localePath = useLocalePath();
const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
const { loginUser } = useAuthStore();
const authStore = useAuthStore();
const { isLoading, error } = storeToRefs(authStore);

const onSubmit = async (values: any) => {
  try {
    const response = await loginUser(values);

    if (response?.message) {
      toast.error(response?.message);
    } else if (!response?.errors) {
      toast.success("Login successfully completed");
      navigateTo(localePath("/"));
    }
  } catch (error: any) {
    toast.error("Registration failed");
  }
};
</script>

<style scoped></style>
