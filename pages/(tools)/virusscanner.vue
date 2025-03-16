<script setup>
import { ref } from "vue";
import { useScanUrl } from "~/composables/useScanUrl";
import { Form, Field } from "vee-validate";
import * as yup from "yup";
import { useToast } from "vue-toast-notification";
const toast = useToast({ position: "top-right", duration: 1500 });
const urlInput = ref("");
const { scanUrl, scanResults, loading, error } = useScanUrl();

const schema = yup.object({
  urlInput: yup.string().required("url is required"),
});

const handleScan = async (value) => {
  if (!value.urlInput) return;
  await scanUrl(value.urlInput);
};
</script>

<template>
  <section class="VirusScanner">
    <div class="container mx-auto p-4">
      <h1
        class="text-2xl md:text-4xl font-bold bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent tracking-wider text-center mb-8"
      >
        URL Scanner
      </h1>
      <Form
        @submit="handleScan"
        :validation-schema="schema"
        v-slot="{ errors }"
        class="flex gap-4 max-md:flex-col items-end justify-center p-6 rounded-lg backdrop-blur-md shadow-lg"
      >
        <div class="w-full md:w-[400px] relative">
          <label
            for="urlInput"
            class="text-paragraph font-semibold text-xl mb-2 cursor-pointer"
          >
            URL Scanner
          </label>
          <Field
            id="urlInput"
            name="urlInput"
            type="text"
            placeholder="Enter URL"
            class="text-white lowercase w-full h-fit p-3 border-none bg-primary border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-200"
            :class="{ 'border-red-500': errors.urlInput }"
          />
          <span class="text-red-500 text-sm absolute left-1 -bottom-7">{{
            errors.urlInput
          }}</span>
        </div>
        <button
          :disabled="loading"
          type="submit"
          class="py-2.5 capitalize rounded-xl bg-gradient-to-r from-primary to-secondary h-fit px-10 w-full md:w-fit text-white font-bold tracking-wider text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
          :class="{ 'opacity-50 cursor-not-allowed': loading }"
        >
          Scan URL
        </button>
      </Form>

      <div v-if="error" class="text-red-500">{{ error }}</div>

      <div v-if="scanResults">
        <h2
          class="text-2xl md:text-3xl font-bold bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent tracking-wider text-center"
        >
          Scan Results:
        </h2>
        <table
          class="table-auto w-full border-collapse border border-gray-300 mt-2"
        >
          <thead>
            <tr class="bg-primary text-white">
              <th class="border p-2 font-semibold text-lg tracking-wide">
                Type
              </th>
              <th class="border p-2 font-semibold text-lg tracking-wide">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="border-b text-white border-secondary hover:bg-secondary transition-all duration-200 ease-in-out cursor-pointer"
            >
              <td class="border p-2 font-semibold text-lg tracking-wide">
                Malicious
              </td>
              <td class="border p-2 text-red-500">
                {{ scanResults.malicious }}
              </td>
            </tr>
            <tr
              class="border-b text-white border-secondary hover:bg-secondary transition-all duration-200 ease-in-out cursor-pointer"
            >
              <td class="border p-2 font-semibold text-lg tracking-wide">
                Harmless
              </td>
              <td class="border p-2 text-green-500">
                {{ scanResults.harmless }}
              </td>
            </tr>
            <tr
              class="border-b text-white border-secondary hover:bg-secondary transition-all duration-200 ease-in-out cursor-pointer"
            >
              <td class="border p-2 font-semibold text-lg tracking-wide">
                Suspicious
              </td>
              <td class="border p-2 text-yellow-500">
                {{ scanResults.suspicious }}
              </td>
            </tr>
            <tr
              class="border-b text-white border-secondary hover:bg-secondary transition-all duration-200 ease-in-out cursor-pointer"
            >
              <td class="border p-2 font-semibold text-lg tracking-wide">
                Last Analysis Date
              </td>
              <td class="border p-2 text-red-500">
                {{ scanResults.lastAnalysisDate }}
              </td>
            </tr>
          </tbody>
        </table>

        <h2
          class="mt-4 text-2xl md:text-3xl font-bold bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent tracking-wider text-center"
        >
          Vendors Analysis:
        </h2>
        <div v-if="scanResults.vendors">
          <div
            v-for="(group, key) in scanResults.vendors"
            :key="key"
            class="mt-4"
          >
            <h3
              class="mb-4 text-lg md:text-xl font-bold bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent tracking-wider text-center"
            >
              {{ key }} ({{ group.length }})
            </h3>
            <table
              class="table-auto w-full border-collapse border border-gray-300"
            >
              <thead>
                <tr class="bg-primary text-white">
                  <th class="border p-2 font-semibold text-lg tracking-wide">
                    Vendor
                  </th>
                  <th class="border p-2 font-semibold text-lg tracking-wide">
                    Result
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="vendor in group"
                  :key="vendor.vendor"
                  class="border-b text-white border-secondary hover:bg-secondary transition-all duration-200 ease-in-out cursor-pointer"
                >
                  <td class="border p-2 text-white">{{ vendor.vendor }}</td>
                  <td
                    class="border p-2 font-semibold text-lg tracking-wide"
                    :class="{
                      'text-red-500': key === 'Phishing',
                      'text-green-500': key === 'Clean',
                      'text-yellow-500': key === 'Unrated',
                    }"
                  >
                    {{ vendor.result }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
