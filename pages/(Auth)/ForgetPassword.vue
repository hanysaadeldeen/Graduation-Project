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
              Forget Password
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
                    class="text-paragraph font-semibold text-xl mb-2 cursor-pointer inline-block"
                    >Email</label
                  >
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    class="text-white w-full p-2 border-none bg-primary border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    :class="{ 'border-red-500': errors.email }"
                  />
                  <span class="text-red-500 text-sm">{{ errors.email }}</span>
                </div>
                <button
                  :disabled="isLoading"
                  type="submit"
                  class="py-2 w-full capitalize rounded-xl bg-gradient-to-l from-primary to-secondary text-white font-bold tracking-wider text-2xl"
                  :class="{ 'opacity-50 cursor-not-allowed': isLoading }"
                >
                  Send Email
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
  email: yup.string().email("Invalid email").required("Email is required"),
});
const { forgetPassword } = useAuthStore();
const authStore = useAuthStore();
const { isLoading } = storeToRefs(authStore);
const onSubmit = async (values: any) => {
  try {
    const response = await forgetPassword(values);
    // localStorage.setItem("token", response?.token?.result.token);
    if (response) {
      toast.success("Check your email to reset password");
      navigateTo(localePath("ResetPassword"));
    }
  } catch (error: any) {
    toast.error(error);
  }
};
</script>

<style scoped></style>
