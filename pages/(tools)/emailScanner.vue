<template>
  <section class="blog">
    <div class="container px-4 mx-auto">
      <h1
        class="text-2xl md:text-4xl font-bold bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent tracking-wider text-center mb-8"
      >
        Email Scanner
      </h1>

      <Form
        @submit="onSubmit"
        :validation-schema="schema"
        v-slot="{ errors }"
        class="flex gap-4 max-md:flex-col items-end justify-center"
      >
        <div class="w-full md:w-[400px] relative">
          <label
            for="email"
            class="text-paragraph font-semibold text-xl mb-2 cursor-pointer"
            >Email</label
          >
          <Field
            id="email"
            name="email"
            type="email"
            placeholder="Enter Email"
            class="text-white lowercase w-full md:w-[400px] h-fit p-3 border-none bg-primary border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            :class="{ 'border-red-500': errors.email }"
          />
          <span class="text-red-500 text-sm absolute left-1 -bottom-7">{{
            errors.email
          }}</span>
        </div>
        <button
          :disabled="isLoading"
          type="submit"
          class="py-2.5 capitalize rounded-xl bg-gradient-to-l h-fit px-10 w-full md:w-fit from-primary to-secondary text-white font-bold tracking-wider text-lg"
          :class="{ 'opacity-50 cursor-not-allowed': isLoading }"
        >
          Email Scanner
        </button>
      </Form>
      <div v-if="emailData" class="overflow-x-auto mt-10">
        <h2
          class="text-xl md:text-2xl font-bold bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent tracking-wider text-center mb-2"
        >
          Email Scanner Results
        </h2>
        <table
          class="w-full md:w-[616px] mx-auto border-collapse rounded-lg overflow-hidden bg-white/10 backdrop-blur-md"
        >
          <thead>
            <tr class="bg-primary text-white">
              <th class="px-4 py-3 text-left">Attribute</th>
              <th class="px-4 py-3 text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(value, index) in emailData"
              :key="index"
              class="border-b border-secondary hover:bg-secondary transition-all duration-200 ease-in-out cursor-pointer"
            >
              <td class="px-4 py-3 text-white font-medium capitalize">
                {{ formatKey(index) }}
              </td>
              <td class="px-4 py-3 text-gray-300">{{ value || "N/A" }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Form, Field } from "vee-validate";
import * as yup from "yup";
import { useToast } from "vue-toast-notification";
const toast = useToast({ position: "top-right", duration: 1500 });
const emailData = ref(null);
const isLoading = ref(false);

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
});

const onSubmit = async (values) => {
  const runtimeConfig = useRuntimeConfig();
  const apiUrl = `https://emailvalidation.abstractapi.com/v1/?api_key=${runtimeConfig.public.emailApi}&email=${values.email}`;

  try {
    isLoading.value = true;
    const response = await fetch(apiUrl);
    isLoading.value = false;
    if (!response.ok)
      throw new Error(`Error: ${response.status} ${response.statusText}`);

    const data = await response.json();
    if (data.email) {
      emailData.value = {
        Email: data.email,
        Autocorrect: data.autocorrect,
        Deliverability: data.deliverability,
        "Quality Score": data.quality_score,
        "Valid Format": data.is_valid_format?.text,
        "Free Email": data.is_free_email?.text,
        "Disposable Email": data.is_disposable_email?.text,
        "Role Email": data.is_role_email?.text,
        "MX Found": data.is_mx_found?.text,
        "SMTP Valid": data.is_smtp_valid?.text,
      };
      toast.success("Email Scan successfully");
    } else {
      emailData.value = null;
    }
  } catch (error) {
    toast.error("Error in This Email");

    emailData.value = null;
  }
};

const formatKey = (key) => key.replace(/_/g, " ");
</script>

<style scoped></style>
