<template>
  <div
    class="startSection w-full text-white bg-gradient-to-t from-primary to-[#09090B]"
  >
    <div class="container mx-auto h-full relative px-4">
      <div class="h-full flex justify-between">
        <div class="hidden h-full items-center justify-center w-1/2 lg:flex">
          <img
            src="~/assets/img/LogoWhite-V.svg"
            alt="Logo"
            class="w-[350px]"
          />
        </div>

        <div
          class="flex justify-center items-center border-secondary w-full lg:w-1/2"
          :class="locale === 'ar' ? 'lg:border-r' : 'lg:border-l'"
        >
          <div
            class="flex justify-center flex-col w-full px-5 lg:px-10 items-center"
          >
            <h1
              class="text-center mb-5 text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent"
            >
              Reset Password
            </h1>
            <div class="w-full">
              <Form
                @submit="onSubmit"
                :validation-schema="schema"
                v-slot="{ errors }"
              >
                <div class="mb-4">
                  <label
                    for="password"
                    class="text-paragraph font-semibold text-xl mb-2 cursor-pointer inline-block"
                  >
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter Your Password"
                    class="text-white w-full p-2 border-none bg-primary border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    :class="{ 'border-red-500': errors.password }"
                  />
                  <span class="text-red-500 text-sm">{{
                    errors.password
                  }}</span>
                </div>

                <div class="mb-8">
                  <label
                    for="confirmPassword"
                    class="text-paragraph font-semibold text-xl mb-2 cursor-pointer inline-block"
                  >
                    Confirm Password
                  </label>
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Your Password"
                    class="text-white w-full p-2 border-none bg-primary border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    :class="{ 'border-red-500': errors.confirmPassword }"
                  />
                  <span class="text-red-500 text-sm">{{
                    errors.confirmPassword
                  }}</span>
                </div>
                <button
                  :disabled="isLoading"
                  type="submit"
                  class="py-2 w-full capitalize rounded-xl bg-gradient-to-l from-primary to-secondary text-white font-bold tracking-wider text-2xl"
                  :class="{ 'opacity-50 cursor-not-allowed': isLoading }"
                >
                  Reset Password
                </button>
              </Form>
              <nuxt-link :to="localePath('Login')">
                <h1 class="text-paragraph text-center text-xl mt-5">
                  Return to <span class="text-white">login</span>
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

const toast = useToast({ position: "top-right", duration: 1500 });

const localePath = useLocalePath();
const schema = yup.object({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
const { resetPass } = useAuthStore();
const authStore = useAuthStore();
const { isLoading, error } = storeToRefs(authStore);
const onSubmit = async (values: any) => {
  try {
    const response = await resetPass(values);
    if (response) {
      toast.success("Reset Password successfully completed");
      navigateTo(localePath("login"));
    }
  } catch (error: any) {
    toast.error(error);
  }
};
</script>

<style scoped></style>
