<template>
  <div
    class="h-fit w-full bg-gradient-to-t from-primary to-[#09090B] py-10 text-white"
  >
    <div class="container relative mx-auto h-full px-4">
      <div class="flex h-full items-center justify-between">
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
              Register Page
            </h1>
            <div class="w-full">
              <Form
                @submit="onSubmit"
                :validation-schema="schema"
                v-slot="{ errors }"
              >
                <div class="mb-4">
                  <label
                    for="firstName"
                    class="mb-2 inline-block cursor-pointer text-xl font-semibold text-paragraph"
                  >
                    First Name
                  </label>
                  <Field
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter Your First Name"
                    class="w-full rounded-md border border-none border-transparent bg-primary p-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    :class="{ 'border-red-500': errors.firstName }"
                  />
                  <span class="text-sm text-red-500">{{
                    errors.firstName
                  }}</span>
                </div>

                <div class="mb-4">
                  <label
                    for="lastName"
                    class="mb-2 inline-block cursor-pointer text-xl font-semibold text-paragraph"
                  >
                    Last Name
                  </label>
                  <Field
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter Your Last Name"
                    class="w-full rounded-md border border-none border-transparent bg-primary p-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    :class="{ 'border-red-500': errors.lastName }"
                  />
                  <span class="text-sm text-red-500">{{
                    errors.lastName
                  }}</span>
                </div>
                <div class="mb-4">
                  <label
                    for="userName"
                    class="mb-2 inline-block cursor-pointer text-xl font-semibold text-paragraph"
                  >
                    User Name
                  </label>
                  <Field
                    id="userName"
                    name="userName"
                    type="text"
                    placeholder="Enter Your Last Name"
                    class="w-full rounded-md border border-none border-transparent bg-primary p-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    :class="{ 'border-red-500': errors.userName }"
                  />
                  <span class="text-sm text-red-500">{{
                    errors.userName
                  }}</span>
                </div>

                <div class="mb-4">
                  <label
                    for="email"
                    class="mb-2 inline-block cursor-pointer text-xl font-semibold text-paragraph"
                  >
                    Email
                  </label>
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

                <div class="mb-4">
                  <label
                    for="password"
                    class="mb-2 inline-block cursor-pointer text-xl font-semibold text-paragraph"
                  >
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter Your Password"
                    class="w-full rounded-md border border-none border-transparent bg-primary p-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    :class="{ 'border-red-500': errors.password }"
                  />
                  <span class="text-sm text-red-500">{{
                    errors.password
                  }}</span>
                </div>

                <div class="mb-8">
                  <label
                    for="confirmPassword"
                    class="mb-2 inline-block cursor-pointer text-xl font-semibold text-paragraph"
                  >
                    Confirm Password
                  </label>
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Your Password"
                    class="w-full rounded-md border border-none border-transparent bg-primary p-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    :class="{ 'border-red-500': errors.confirmPassword }"
                  />
                  <span class="text-sm text-red-500">{{
                    errors.confirmPassword
                  }}</span>
                </div>

                <button
                  :disabled="isLoading"
                  type="submit"
                  class="w-full rounded-xl bg-gradient-to-l from-primary to-secondary py-2 text-2xl font-bold capitalize tracking-wider text-white"
                  :class="{ 'cursor-not-allowed opacity-50': isLoading }"
                >
                  Register
                </button>
              </Form>
              <nuxt-link :to="localePath('Login')">
                <h1 class="mt-5 text-center text-xl capitalize text-paragraph">
                  Have an Account <span class="text-white"> Login</span>
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
import * as yup from "yup";
import { useAuthStore } from "~/stores/authStore";
const { locale } = useI18n();

const localePath = useLocalePath();
const schema = yup.object({
  firstName: yup
    .string()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),
  lastName: yup
    .string()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),
  userName: yup
    .string()
    .min(2, "User name must be at least 2 characters")
    .required("User name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const { registerUser } = useAuthStore();
const authStore = useAuthStore();
const { isLoading, error } = storeToRefs(authStore);
import { useToast } from "vue-toast-notification";
const toast = useToast({ position: "top-right", duration: 1500 });

const onSubmit = async (values: any) => {
  try {
    const response = await registerUser(values);
    if (response) {
      toast.success("register successfully completed");
      navigateTo(localePath("/login"));
    }
  } catch (error: any) {
    toast.error(error);
  }
};
</script>

<style scoped></style>
