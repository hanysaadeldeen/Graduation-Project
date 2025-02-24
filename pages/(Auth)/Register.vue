<template>
  <div
    class="h-fit py-10 w-full text-white bg-gradient-to-t from-primary to-[#09090B]"
  >
    <div class="container mx-auto h-full relative px-4">
      <div class="h-full flex items-center justify-between">
        <div class="hidden h-full items-center justify-center w-1/2 lg:flex">
          <img
            src="~/assets/img/LogoWhite-V.svg"
            alt="Logo"
            class="w-[350px]"
          />
        </div>

        <div
          class="flex justify-center items-center w-full lg:border-l border-secondary lg:w-1/2"
        >
          <div
            class="flex justify-center flex-col w-full px-5 lg:px-10 items-center"
          >
            <h1
              class="text-center text-5xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent"
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
                    class="text-paragraph font-semibold text-xl mb-2 cursor-pointer inline-block"
                  >
                    First Name
                  </label>
                  <Field
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter Your First Name"
                    class="text-black w-full p-2 border-none bg-primary border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    :class="{ 'border-red-500': errors.firstName }"
                  />
                  <span class="text-red-500 text-sm">{{
                    errors.firstName
                  }}</span>
                </div>

                <div class="mb-4">
                  <label
                    for="lastName"
                    class="text-paragraph font-semibold text-xl mb-2 cursor-pointer inline-block"
                  >
                    Last Name
                  </label>
                  <Field
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter Your Last Name"
                    class="text-black w-full p-2 border-none bg-primary border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    :class="{ 'border-red-500': errors.lastName }"
                  />
                  <span class="text-red-500 text-sm">{{
                    errors.lastName
                  }}</span>
                </div>

                <div class="mb-4">
                  <label
                    for="email"
                    class="text-paragraph font-semibold text-xl mb-2 cursor-pointer inline-block"
                  >
                    Email
                  </label>
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
                    class="text-black w-full p-2 border-none bg-primary border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
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
                    class="text-black w-full p-2 border-none bg-primary border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    :class="{ 'border-red-500': errors.confirmPassword }"
                  />
                  <span class="text-red-500 text-sm">{{
                    errors.confirmPassword
                  }}</span>
                </div>

                <button
                  type="submit"
                  class="py-2 w-full capitalize rounded-xl bg-gradient-to-l from-primary to-secondary text-white font-bold tracking-wider text-2xl"
                >
                  Register
                </button>
              </Form>
              <nuxt-link :to="localePath('Login')">
                <h1 class="text-paragraph text-xl text-center mt-5 capitalize">
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

const localePath = useLocalePath();
// تعريف المخطط (Schema) للتحقق من صحة البيانات
const schema = yup.object({
  firstName: yup
    .string()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),
  lastName: yup
    .string()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),
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

// دالة تنفيذ الطلب عند الضغط على زر التسجيل
const onSubmit = (values: any) => {
  console.log("Register Data:", values);
};
</script>

<style scoped></style>
