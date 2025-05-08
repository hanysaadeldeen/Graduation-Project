<template>
  <Form
    @submit="onSubmit"
    :validation-schema="schema"
    v-slot="{ errors, isSubmitting }"
    class="w-full rounded-lg p-6 shadow-lg"
    as="form"
  >
    <h1
      class="mb-8 bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-center text-2xl font-bold tracking-wider text-transparent md:text-4xl"
    >
      Add Bug Bounty Program
    </h1>

    <!-- In Scope Targets -->
    <div class="mb-4">
      <label
        class="mb-2 inline-block cursor-pointer text-xl font-semibold text-gray-300"
      >
        In Scope Targets
      </label>
      <div
        v-for="(target, index) in targets"
        :key="index"
        class="mb-4 border-b border-gray-600 pb-4"
      >
        <div class="grid grid-cols-1 gap-4 md:grid-cols-4">
          <!-- Target URL -->
          <div>
            <Field
              :name="`targets[${index}].url`"
              as="input"
              type="text"
              placeholder="Enter target (e.g., https://www.cube.exchange)"
              class="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white"
              :class="{ 'border-red-500': errors[`targets[${index}].url`] }"
            />
            <span class="text-sm text-red-500">{{
              errors[`targets[${index}].url`]
            }}</span>
          </div>
          <!-- Type -->
          <div>
            <Field
              :name="`targets[${index}].type`"
              as="input"
              type="text"
              placeholder="Enter type (e.g., Web)"
              class="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white"
              :class="{ 'border-red-500': errors[`targets[${index}].type`] }"
            />
            <span class="text-sm text-red-500">{{
              errors[`targets[${index}].type`]
            }}</span>
          </div>
          <!-- Severity -->
          <div>
            <Field
              :name="`targets[${index}].severity`"
              as="input"
              type="text"
              placeholder="Enter severity (e.g., Critical)"
              class="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white"
              :class="{
                'border-red-500': errors[`targets[${index}].severity`],
              }"
            />
            <span class="text-sm text-red-500">{{
              errors[`targets[${index}].severity`]
            }}</span>
          </div>
          <!-- Reward -->
          <div>
            <Field
              :name="`targets[${index}].reward`"
              as="input"
              type="text"
              placeholder="Enter reward (e.g., Bounty)"
              class="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white"
              :class="{ 'border-red-500': errors[`targets[${index}].reward`] }"
            />
            <span class="text-sm text-red-500">{{
              errors[`targets[${index}].reward`]
            }}</span>
          </div>
        </div>
        <button
          type="button"
          @click="removeTarget(index)"
          class="mt-4 cursor-pointer rounded-lg bg-red-500 px-4 py-1 text-sm text-white hover:bg-red-800"
          v-if="targets.length > 1"
        >
          Remove Target
        </button>
      </div>
      <button
        type="button"
        @click="addTarget"
        class="mb-4 rounded-md bg-gray-700 px-4 py-2 text-white hover:bg-gray-600"
      >
        Add Target
      </button>
    </div>

    <!-- In Scope Vulnerabilities -->
    <div class="mb-4">
      <label
        for="focusArea"
        class="mb-2 block cursor-pointer text-xl font-semibold text-gray-300"
      >
        Focus Area
      </label>
      <label
        for="inScopeVulnerabilities"
        class="mb-2 inline-block cursor-pointer text-xl font-semibold text-gray-300"
      >
        In Scope Vulnerabilities
      </label>
      <Field
        id="inScopeVulnerabilities"
        name="inScopeVulnerabilities"
        as="textarea"
        rows="4"
        placeholder="List vulnerabilities in scope"
        class="min-h-[100px] w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white"
        :class="{ 'border-red-500': errors.inScopeVulnerabilities }"
      />
      <span class="text-sm text-red-500">{{
        errors.inScopeVulnerabilities
      }}</span>
    </div>

    <!-- Out of Scope Vulnerabilities -->
    <div class="mb-4">
      <label
        for="outOfScopeVulnerabilities"
        class="mb-2 inline-block cursor-pointer text-xl font-semibold text-gray-300"
      >
        Out of Scope Vulnerabilities
      </label>
      <Field
        id="outOfScopeVulnerabilities"
        name="outOfScopeVulnerabilities"
        as="textarea"
        rows="4"
        placeholder="List vulnerabilities out of scope"
        class="min-h-[100px] w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white"
        :class="{ 'border-red-500': errors.outOfScopeVulnerabilities }"
      />
      <span class="text-sm text-red-500">{{
        errors.outOfScopeVulnerabilities
      }}</span>
    </div>

    <!-- Program Rules -->
    <div class="mb-4">
      <label
        for="programRules"
        class="mb-2 inline-block cursor-pointer text-xl font-semibold text-gray-300"
      >
        Program Rules
      </label>
      <Field
        id="programRules"
        name="programRules"
        as="textarea"
        rows="4"
        placeholder="Enter program rules"
        class="min-h-[100px] w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white"
        :class="{ 'border-red-500': errors.programRules }"
      />
      <span class="text-sm text-red-500">{{ errors.programRules }}</span>
    </div>

    <!-- Disclosure Guidelines -->
    <div class="mb-4">
      <label
        for="disclosureGuidelines"
        class="mb-2 inline-block cursor-pointer text-xl font-semibold text-gray-300"
      >
        Disclosure Guidelines
      </label>
      <Field
        id="disclosureGuidelines"
        name="disclosureGuidelines"
        as="textarea"
        rows="4"
        placeholder="Enter disclosure guidelines"
        class="min-h-[100px] w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white"
        :class="{ 'border-red-500': errors.disclosureGuidelines }"
      />
      <span class="text-sm text-red-500">{{
        errors.disclosureGuidelines
      }}</span>
    </div>

    <!-- Eligibility and Coordinated Disclosure -->
    <div class="mb-4">
      <label
        for="eligibility"
        class="mb-2 inline-block cursor-pointer text-xl font-semibold text-gray-300"
      >
        Eligibility and Coordinated Disclosure
      </label>
      <Field
        id="eligibility"
        name="eligibility"
        as="textarea"
        rows="4"
        placeholder="Enter eligibility and disclosure details"
        class="min-h-[100px] w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white"
        :class="{ 'border-red-500': errors.eligibility }"
      />
      <span class="text-sm text-red-500">{{ errors.eligibility }}</span>
    </div>

    <!-- Rewards -->
    <div class="mb-4">
      <label
        class="mb-2 inline-block cursor-pointer text-xl font-semibold text-gray-300"
      >
        Rewards
      </label>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <!-- Critical -->
        <div>
          <Field
            name="rewards.critical"
            as="input"
            type="text"
            placeholder="Enter critical (e.g., $10,000)"
            class="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white"
            :class="{ 'border-red-500': errors['rewards.critical'] }"
          />
          <span class="text-sm text-red-500">{{
            errors["rewards.critical"]
          }}</span>
        </div>
        <!-- High -->
        <div>
          <Field
            name="rewards.high"
            as="input"
            type="text"
            placeholder="Enter high (e.g., $5,000)"
            class="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white"
            :class="{ 'border-red-500': errors['rewards.high'] }"
          />
          <span class="text-sm text-red-500">{{ errors["rewards.high"] }}</span>
        </div>
        <!-- Medium -->
        <div>
          <Field
            name="rewards.medium"
            as="input"
            type="text"
            placeholder="Enter medium (e.g., $2,000)"
            class="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white"
            :class="{ 'border-red-500': errors['rewards.medium'] }"
          />
          <span class="text-sm text-red-500">{{
            errors["rewards.medium"]
          }}</span>
        </div>
        <!-- Low -->
        <div>
          <Field
            name="rewards.low"
            as="input"
            type="text"
            placeholder="Enter low (e.g., $200)"
            class="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white"
            :class="{ 'border-red-500': errors['rewards.low'] }"
          />
          <span class="text-sm text-red-500">{{ errors["rewards.low"] }}</span>
        </div>
      </div>
    </div>

    <!-- Submit Button -->
    <button
      :disabled="isSubmitting"
      type="submit"
      class="w-full rounded-xl bg-gradient-to-l from-primary to-secondary px-16 py-2 text-2xl font-medium capitalize tracking-wider text-white md:w-fit"
      :class="{ 'cursor-not-allowed opacity-50': isSubmitting }"
    >
      {{ isSubmitting ? "Submitting..." : "Add Program" }}
    </button>
  </Form>
</template>
<script setup lang="ts">
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { ref } from "vue";
import { programsController } from "~/composables/programs";
const { addProgram } = await programsController();

// Define interfaces for TypeScript
interface Target {
  url: string;
  type: string;
  severity: string;
  reward: string;
}

interface Rewards {
  critical: string;
  high: string;
  medium: string;
  low: string;
}

interface FormValues {
  targets: Target[];
  focusArea: string;
  inScopeVulnerabilities: string;
  outOfScopeVulnerabilities: string;
  programRules: string;
  disclosureGuidelines: string;
  eligibility: string;
  rewards: Rewards;
}

// Reactive state for targets
const targets = ref<Target[]>([
  { url: "", type: "", severity: "", reward: "" },
]);

// Define Yup schema
const schema = Yup.object({
  targets: Yup.array()
    .of(
      Yup.object({
        url: Yup.string()
          .required("Target URL is required")
          .min(5, "Target URL must be at least 5 characters"),
        type: Yup.string()
          .required("Type is required")
          .min(2, "Type must be at least 2 characters"),
        severity: Yup.string()
          .required("Severity is required")
          .min(2, "Severity must be at least 2 characters"),
        reward: Yup.string()
          .required("Reward is required")
          .min(2, "Reward must be at least 2 characters"),
      }),
    )
    .min(1, "At least one target is required"),

  inScopeVulnerabilities: Yup.string()
    .required("In Scope Vulnerabilities are required")
    .min(10, "In Scope Vulnerabilities must be at least 10 characters"),
  outOfScopeVulnerabilities: Yup.string()
    .required("Out of Scope Vulnerabilities are required")
    .min(10, "Out of Scope Vulnerabilities must be at least 10 characters"),
  programRules: Yup.string()
    .required("Program Rules are required")
    .min(10, "Program Rules must be at least 10 characters"),
  disclosureGuidelines: Yup.string()
    .required("Disclosure Guidelines are required")
    .min(10, "Disclosure Guidelines must be at least 10 characters"),
  eligibility: Yup.string()
    .required("Eligibility and Coordinated Disclosure are required")
    .min(
      10,
      "Eligibility and Coordinated Disclosure must be at least 10 characters",
    ),
  rewards: Yup.object({
    critical: Yup.string()
      .required("Critical reward is required")
      .matches(/^\$?\d+$/, "Must be a valid amount (e.g., $10,000)"),
    high: Yup.string()
      .required("High reward is required")
      .matches(/^\$?\d+$/, "Must be a valid amount (e.g., $5,000)"),
    medium: Yup.string()
      .required("Medium reward is required")
      .matches(/^\$?\d+$/, "Must be a valid amount (e.g., $2,000)"),
    low: Yup.string()
      .required("Low reward is required")
      .matches(/^\$?\d+$/, "Must be a valid amount (e.g., $200)"),
  }),
});

// Methods
const addTarget = () => {
  targets.value.push({ url: "", type: "", severity: "", reward: "" });
};

const removeTarget = (index: number) => {
  targets.value.splice(index, 1);
};

const onSubmit = async (values: any) => {
  // Combine rewards into a single object
  const formattedValues: FormValues = {
    ...values,
    rewards: {
      critical: values.rewards.critical,
      high: values.rewards.high,
      medium: values.rewards.medium,
      low: values.rewards.low,
    },
    targets: values.targets,
  };
  const response: any = await addProgram(formattedValues);

  if (response.status00231 === 201) {
    // Handle success
    console.log("Program added successfully");
  } else {
    // Handle error
    console.error("Failed to add program");
  }
};
</script>
