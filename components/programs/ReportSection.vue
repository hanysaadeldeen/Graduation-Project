<template>
  <div class="dark">
    <div class="text-white transition-colors duration-200">
      <div>
        <div class="flex flex-col gap-8 md:flex-row">
          <!-- Main form column -->
          <div class="flex-1">
            <h1 class="mb-6 text-3xl font-bold">Submit Report</h1>

            <!-- General info section -->
            <div class="mb-8">
              <h2
                class="mb-4 border-b border-gray-700 pb-2 text-lg font-medium"
              >
                General Info
              </h2>

              <div class="mb-4">
                <label class="mb-1 block text-sm font-medium"
                  >Vulnerability Title</label
                >
                <input
                  type="text"
                  placeholder="Short description of the vulnerability and the affected asset"
                  class="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2"
                  v-model="title"
                />
              </div>
            </div>

            <!-- Target section -->
            <div class="mb-8">
              <h2 class="mb-4 text-lg font-medium">Target</h2>
              <p class="mb-2 text-sm">Specify the vulnerability target.</p>

              <select
                v-model="selectedTarget"
                class="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2"
              >
                <option value="" disabled>
                  Select the vulnerability target
                </option>
                <option
                  v-for="target in vulnerabilityTargets"
                  :key="target"
                  :value="target"
                >
                  {{ target }}
                </option>
              </select>
            </div>

            <!-- Vulnerability category -->
            <div class="mb-8">
              <h2 class="mb-4 text-lg font-medium">Vulnerability category</h2>

              <select
                v-model="selectedCategory"
                class="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2"
              >
                <option value="" disabled>
                  Select the type of vulnerability you have discovered
                </option>
                <option
                  v-for="category in vulnerabilityCategories"
                  :key="category"
                  :value="category"
                >
                  {{ category }}
                </option>
              </select>
            </div>

            <!-- Severity level section -->
            <div class="mb-8">
              <h2 class="mb-4 text-lg font-medium">Severity level</h2>

              <div class="rounded-md bg-gray-800 p-6">
                <p class="mb-2 text-sm">
                  We use the
                  <a href="#" class="text-blue-500 hover:underline"
                    >Common Vulnerability Scoring System</a
                  >
                  to assess the severity of your vulnerability.
                </p>
                <p class="mb-4 text-sm">
                  Please estimate the severity of this vulnerability by
                  selecting a category or using a calculator.
                </p>

                <!-- Severity buttons -->
                <div
                  class="mb-6 flex flex-wrap gap-2 border-b border-gray-600 pb-4"
                >
                  <button
                    v-for="severity in severityLevels"
                    :key="severity.value"
                    :class="[
                      'flex items-center gap-2 rounded-md border px-4 py-2',
                      selectedSeverity === severity.value
                        ? `${severity.color} border-2 border-gray-500`
                        : `${severity.color} border-transparent`,
                    ]"
                    @click="selectedSeverity = severity.value"
                  >
                    <span
                      v-if="severity.value !== 'none'"
                      :class="`h-2 w-2 rounded-full ${severity.dotColor}`"
                    ></span>
                    <span>{{ severity.label }}</span>
                  </button>
                </div>

                <!-- CVSS Metrics grid -->
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <!-- Attack Vector -->
                  <div>
                    <div class="mb-2 flex items-center">
                      <span class="text-sm font-medium">Attack Vector</span>
                      <button class="ml-1 text-gray-400 hover:text-gray-300">
                        <span class="h-4 w-4">ℹ️</span>
                      </button>
                    </div>
                    <div class="flex flex-wrap gap-2">
                      <button
                        v-for="option in attackVectorOptions"
                        :key="option"
                        :class="[
                          'rounded-md border px-3 py-1 text-sm',
                          attackVector === option
                            ? 'border-gray-400 bg-gray-200 text-gray-900'
                            : 'border-gray-600 bg-gray-700',
                        ]"
                        @click="attackVector = option"
                      >
                        {{ option }}
                      </button>
                    </div>
                  </div>

                  <!-- Scope -->
                  <div>
                    <div class="mb-2 flex items-center">
                      <span class="text-sm font-medium">Scope</span>
                      <button class="ml-1 text-gray-400 hover:text-gray-300">
                        <span class="h-4 w-4">ℹ️</span>
                      </button>
                    </div>
                    <div class="flex flex-wrap gap-2">
                      <button
                        v-for="option in scopeOptions"
                        :key="option"
                        :class="[
                          'rounded-md border px-3 py-1 text-sm',
                          scope === option
                            ? 'border-gray-400 bg-gray-200 text-gray-900'
                            : 'border-gray-600 bg-gray-700',
                        ]"
                        @click="scope = option"
                      >
                        {{ option }}
                      </button>
                    </div>
                  </div>

                  <!-- Attack Complexity -->
                  <div>
                    <div class="mb-2 flex items-center">
                      <span class="text-sm font-medium">Attack Complexity</span>
                      <button class="ml-1 text-gray-400 hover:text-gray-300">
                        <span class="h-4 w-4">ℹ️</span>
                      </button>
                    </div>
                    <div class="flex flex-wrap gap-2">
                      <button
                        v-for="option in complexityOptions"
                        :key="option"
                        :class="[
                          'rounded-md border px-3 py-1 text-sm',
                          attackComplexity === option
                            ? 'border-gray-400 bg-gray-200 text-gray-900'
                            : 'border-gray-600 bg-gray-700',
                        ]"
                        @click="attackComplexity = option"
                      >
                        {{ option }}
                      </button>
                    </div>
                  </div>

                  <!-- Confidentiality -->
                  <div>
                    <div class="mb-2 flex items-center">
                      <span class="text-sm font-medium">Confidentiality</span>
                      <button class="ml-1 text-gray-400 hover:text-gray-300">
                        <span class="h-4 w-4">ℹ️</span>
                      </button>
                    </div>
                    <div class="flex flex-wrap gap-2">
                      <button
                        v-for="option in impactOptions"
                        :key="option"
                        :class="[
                          'rounded-md border px-3 py-1 text-sm',
                          confidentiality === option
                            ? 'border-gray-400 bg-gray-200 text-gray-900'
                            : 'border-gray-600 bg-gray-700',
                        ]"
                        @click="confidentiality = option"
                      >
                        {{ option }}
                      </button>
                    </div>
                  </div>

                  <!-- Privileges Required -->
                  <div>
                    <div class="mb-2 flex items-center">
                      <span class="text-sm font-medium"
                        >Privileges Required</span
                      >
                      <button class="ml-1 text-gray-400 hover:text-gray-300">
                        <span class="h-4 w-4">ℹ️</span>
                      </button>
                    </div>
                    <div class="flex flex-wrap gap-2">
                      <button
                        v-for="option in impactOptions"
                        :key="option"
                        :class="[
                          'rounded-md border px-3 py-1 text-sm',
                          privilegesRequired === option
                            ? 'border-gray-400 bg-gray-200 text-gray-900'
                            : 'border-gray-600 bg-gray-700',
                        ]"
                        @click="privilegesRequired = option"
                      >
                        {{ option }}
                      </button>
                    </div>
                  </div>

                  <!-- Integrity -->
                  <div>
                    <div class="mb-2 flex items-center">
                      <span class="text-sm font-medium">Integrity</span>
                      <button class="ml-1 text-gray-400 hover:text-gray-300">
                        <span class="h-4 w-4">ℹ️</span>
                      </button>
                    </div>
                    <div class="flex flex-wrap gap-2">
                      <button
                        v-for="option in impactOptions"
                        :key="option"
                        :class="[
                          'rounded-md border px-3 py-1 text-sm',
                          integrity === option
                            ? 'border-gray-400 bg-gray-200 text-gray-900'
                            : 'border-gray-600 bg-gray-700',
                        ]"
                        @click="integrity = option"
                      >
                        {{ option }}
                      </button>
                    </div>
                  </div>

                  <!-- User Interaction -->
                  <div>
                    <div class="mb-2 flex items-center">
                      <span class="text-sm font-medium">User Interaction</span>
                      <button class="ml-1 text-gray-400 hover:text-gray-300">
                        <span class="h-4 w-4">ℹ️</span>
                      </button>
                    </div>
                    <div class="flex flex-wrap gap-2">
                      <button
                        v-for="option in userInteractionOptions"
                        :key="option"
                        :class="[
                          'rounded-md border px-3 py-1 text-sm',
                          userInteraction === option
                            ? 'border-gray-400 bg-gray-200 text-gray-900'
                            : 'border-gray-600 bg-gray-700',
                        ]"
                        @click="userInteraction = option"
                      >
                        {{ option }}
                      </button>
                    </div>
                  </div>

                  <!-- Availability -->
                  <div>
                    <div class="mb-2 flex items-center">
                      <span class="text-sm font-medium">Availability</span>
                      <button class="ml-1 text-gray-400 hover:text-gray-300">
                        <span class="h-4 w-4">ℹ️</span>
                      </button>
                    </div>
                    <div class="flex flex-wrap gap-2">
                      <button
                        v-for="option in impactOptions"
                        :key="option"
                        :class="[
                          'rounded-md border px-3 py-1 text-sm',
                          availability === option
                            ? 'border-gray-400 bg-gray-200 text-gray-900'
                            : 'border-gray-600 bg-gray-700',
                        ]"
                        @click="availability = option"
                      >
                        {{ option }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Vulnerability details -->
            <div class="mb-8">
              <h2
                class="mb-4 border-b border-gray-700 pb-2 text-lg font-medium"
              >
                Vulnerability details
              </h2>

              <div class="mb-4">
                <label class="mb-1 block text-sm font-medium"
                  >Description of the vulnerability</label
                >
                <textarea
                  class="min-h-[200px] w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2"
                  v-model="vulnerabilityDescription"
                ></textarea>
              </div>
            </div>

            <!-- Validation steps -->
            <div class="mb-8">
              <h2
                class="mb-4 border-b border-gray-700 pb-2 text-lg font-medium"
              >
                Validation steps
              </h2>

              <p class="mb-4 text-sm">
                A clear, logical explanation helps us validate your
                vulnerability quickly and to notify you of the result. Depending
                on category, each step supports a URL or IPPort and we encourage
                you to upload screenshots or other media to support your
                submission.
              </p>

              <textarea
                class="min-h-[200px] w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2"
                v-model="validationSteps"
              ></textarea>
            </div>

            <!-- File Upload -->
            <div class="mb-8">
              <h2
                class="mb-4 border-b border-gray-700 pb-2 text-lg font-medium"
              >
                File Upload
              </h2>

              <p class="mb-4 text-sm">
                You can attach multiple files (up to 5 files, up to 50MB per
                file). Allowed file extensions: bmp, gif, jpeg, jpg, pdf, png,
                mp4, mov, csv, txt, zip, json, xml, md, ts.
              </p>

              <div
                class="rounded-md border-2 border-dashed border-gray-600 p-8 text-center"
              >
                <div class="mb-4 flex justify-center">
                  <span class="h-10 w-10 text-gray-400">📤</span>
                </div>
                <p class="text-sm text-gray-400">
                  Drag & drop or select more files from your computer (max. 50MB
                  per file)
                </p>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="w-full md:w-80">
            <div class="rounded-lg border border-gray-700 bg-gray-800 p-4">
              <div class="pb-0">
                <div class="mb-3 flex items-center">
                  <div class="mr-2 font-bold text-purple-400">AscendEX</div>
                </div>
                <div class="text-lg font-semibold">
                  Report without title (Draft)
                </div>
              </div>
              <div class="pt-4">
                <div class="space-y-3">
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-400">Report ID:</span>
                    <span>ASCENVM-46</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-400">Status:</span>
                    <span>Created</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-400">State:</span>
                    <span class="flex items-center">
                      New
                      <span class="ml-1 h-4 w-4 text-gray-400">ℹ️</span>
                    </span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-400">Severity:</span>
                    <span></span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-400">Range of bounty:</span>
                    <span>$Δ - $Δ</span>
                  </div>

                  <div class="pt-4">
                    <div class="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="terms"
                        class="mt-1"
                        v-model="termsAccepted"
                      />
                      <label for="terms" class="text-sm">
                        By pressing the 'Submit Report' or 'Publish' I indicate
                        that I have read the Program Info, agree to the
                        <a href="#" class="ml-1 text-blue-500 hover:underline"
                          >Terms & Conditions</a
                        >,
                        <a href="#" class="ml-1 text-blue-500 hover:underline"
                          >Code of Conduct</a
                        >
                        and acknowledge that I have read the
                        <a href="#" class="ml-1 text-blue-500 hover:underline"
                          >Privacy Policy</a
                        >.
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-4 flex flex-col gap-2">
                <button
                  class="w-full cursor-not-allowed rounded-md bg-blue-600 px-4 py-2 text-white opacity-50"
                  :disabled="!canSubmit"
                >
                  Submit Report
                </button>
                <button
                  class="w-full rounded-md border border-gray-600 px-4 py-2 hover:bg-gray-700"
                  @click="saveDraft"
                >
                  Save as Draft and preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Form data
const title = ref("");
const selectedTarget = ref("");
const selectedCategory = ref("");
const selectedSeverity = ref(null);
const attackVector = ref(null);
const scope = ref(null);
const attackComplexity = ref(null);
const confidentiality = ref(null);
const privilegesRequired = ref(null);
const integrity = ref(null);
const userInteraction = ref(null);
const availability = ref(null);
const vulnerabilityDescription = ref("");
const validationSteps = ref("");
const termsAccepted = ref(false);

// Options for form fields
const vulnerabilityTargets = [
  "Web Application",
  "Mobile Application",
  "API Endpoint",
  "Database",
  "Network Infrastructure",
  "Cloud Service",
  "IoT Device",
];

const vulnerabilityCategories = [
  "SQL Injection",
  "Cross-Site Scripting (XSS)",
  "Cross-Site Request Forgery (CSRF)",
  "Authentication Bypass",
  "Authorization Bypass",
  "Insecure Direct Object References",
  "Security Misconfiguration",
  "Sensitive Data Exposure",
  "Missing Function Level Access Control",
  "Unvalidated Redirects and Forwards",
];

const severityLevels = [
  {
    value: "none",
    label: "None",
    color: "bg-gray-200 text-gray-700",
    dotColor: "",
  },
  {
    value: "low",
    label: "Low",
    color: "bg-blue-100 text-blue-700",
    dotColor: "bg-blue-500",
  },
  {
    value: "medium",
    label: "Medium",
    color: "bg-yellow-100 text-yellow-700",
    dotColor: "bg-yellow-500",
  },
  {
    value: "high",
    label: "High",
    color: "bg-red-100 text-red-700",
    dotColor: "bg-red-500",
  },
  {
    value: "critical",
    label: "Critical",
    color: "bg-purple-100 text-purple-700",
    dotColor: "bg-purple-500",
  },
];

const attackVectorOptions = ["Network", "Adjacent", "Local", "Physical"];
const scopeOptions = ["Unchanged", "Changed"];
const complexityOptions = ["Low", "High"];
const impactOptions = ["None", "Low", "High"];
const userInteractionOptions = ["None", "Required"];

// Computed properties
const canSubmit = computed(() => {
  return (
    title.value &&
    selectedTarget.value &&
    selectedCategory.value &&
    selectedSeverity.value &&
    vulnerabilityDescription.value &&
    validationSteps.value &&
    termsAccepted.value
  );
});

// Methods
const saveDraft = () => {
  console.log("Saving draft...");
  // Here you would implement the logic to save the form as a draft
};
</script>
