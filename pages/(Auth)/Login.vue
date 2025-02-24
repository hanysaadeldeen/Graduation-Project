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
          class="flex justify-center items-center lg:border-l border-secondary w-full lg:w-1/2"
        >
          <div
            class="flex justify-center flex-col w-full px-5 lg:px-10 items-center"
          >
            <h1
              class="text-center text-5xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent"
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
                    class="text-paragraph font-semibold text-xl mb-2 cursor-pointer inline-block"
                    >Email</label
                  >
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    class="text-black w-full p-2 border-none bg-primary border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    :class="{ 'border-red-500': errors.email }"
                  />
                  <span class="text-red-500 text-sm">{{ errors.email }}</span>
                </div>
                <div class="mb-8">
                  <label
                    for="password"
                    class="text-paragraph font-semibold text-xl mb-2 cursor-pointer inline-block"
                    >Password</label
                  >
                  <Field
                    id="password"
                    name="password"
                    placeholder="Enter Your Email"
                    class="text-black w-full p-2 border-none bg-primary border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    :class="{ 'border-red-500': errors.password }"
                  />
                  <span class="text-red-500 text-sm">{{
                    errors.password
                  }}</span>
                </div>
                <button
                  type="submit"
                  class="py-2 w-full capitalize rounded-xl bg-gradient-to-l from-primary to-secondary text-white font-bold tracking-wider text-2xl"
                >
                  Login In
                </button>
              </Form>
              <nuxt-link :to="localePath('Register')">
                <h1 class="text-paragraph text-center text-xl mt-5">
                  Create Account <span class="text-white">Register</span>
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
const localePath = useLocalePath();
const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const onSubmit = (values: any) => {
  console.log("Login Data:", values);
};
</script>

<style scoped></style>
