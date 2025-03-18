<template>
  <section class="mt-[90px]">
    <h1
      class="mb-4 md:mb-8 font-bold text-2xl md:text-4xl bg-gradient-to-b from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent"
    >
      Use cases
    </h1>
    <div class="flex items-center justify-between max-md:flex-col gap-16 mt-16">
      <div class="md:w-1/2 md:max-w-[600px] w-full">
        <img
          src="~/assets/img/useCase1.png"
          alt="useCase1"
          class="rounded-3xl"
        />
      </div>
      <div class="md:w-1/2 md:max-w-[600px] w-full relative">
        <div
          class="bg-secondary w-16 h-16 max-md:size-14 rounded-full absolute -top-3 -left-2 md:-left-5"
        ></div>
        <h1
          class="z-20 relative cursor-pointer ease-in-out text-2xl font-bold text-white my-2.5 md:my-5"
        >
          Unified vulnerability <br />
          management
        </h1>
        <p class="text-paragraph font-medium leading-6 text-xl text-justify">
          Gain complete visibility across your entire environment, from endpoint
          to cloud. Advanced scanning capabilities ensure you never miss a
          critical vulnerability, empowering your security team to stay
          proactive in the face of evolving threats.
        </p>
      </div>
    </div>
    <div
      class="flex items-center justify-between max-md:flex-col-reverse gap-16 mt-16 md:mt-24"
    >
      <div class="md:w-1/2 md:max-w-[600px] w-full relative">
        <div
          class="bg-secondary w-16 h-16 max-md:size-14 rounded-full absolute -top-3 -left-2 md:-left-5"
        ></div>
        <h1
          class="z-20 relative cursor-pointer ease-in-out text-2xl font-bold text-white my-2.5 md:my-5"
        >
          Adversary-aware risk <br />
          prioritization
        </h1>
        <p class="text-paragraph font-medium leading-6 text-xl text-justify">
          Leverage advanced machine learning models and proprietary threat
          intelligence from Rapid7 Labs to enrich vulnerability findings with
          Active Risk, helping teams prioritize exposure response based on
          exploitability, attack trends, and business-critical asset impact.
          Rapid7’s Emergent Threat Response (ETR) program continuously flags
          CVEs to ensure you stay ahead of the highest-priority security threat
        </p>
      </div>
      <div class="md:w-1/2 md:max-w-[600px] w-full">
        <img
          src="~/assets/img/useCase2.png"
          alt="useCase1"
          class="rounded-3xl"
        />
      </div>
    </div>
    <div class="flex items-center justify-between max-md:flex-col gap-16 mt-16">
      <div class="md:w-1/2 md:max-w-[600px] w-full">
        <img
          src="~/assets/img/useCase1.png"
          alt="useCase1"
          class="rounded-3xl"
        />
      </div>
      <div class="md:w-1/2 md:max-w-[600px] w-full relative">
        <div
          class="bg-secondary w-16 h-16 max-md:size-14 rounded-full absolute -top-3 -left-2 md:-left-5"
        ></div>
        <h1
          class="z-20 relative cursor-pointer ease-in-out text-2xl font-bold text-white my-2.5 md:my-5"
        >
          Actionable remediation <br />
          planning
        </h1>
        <p class="text-paragraph font-medium leading-6 text-xl text-justify">
          Simplify vulnerability response and reporting with remediation
          projects to assign tasks, track progress, and measure SLA compliance.
          Deliver actionable fixes to IT teams with step-by-step guidance
          tailored to your environment and take immediate action with 500+
          native integrations including automated patching tools.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
