<template>
  <section class="blogId">
    <div class="container px-4 mx-auto">
      <div>
        <img
          src="~/assets/img/blog1.webp"
          alt="BlogImage"
          class="w-full h-full max-h-[500px] object-cover"
        />
      </div>
      <div class="p-8">
        <nuxt-link to="/blogs">
          <div class="flex gap-2.5 group items-center">
            <i
              class="fa-solid fa-arrow-left cursor-pointer text-[#A1A1AA] transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:text-white"
            ></i>
            <h1 class="text-2xl text-paragraph font-medium">Blog</h1>
          </div>
        </nuxt-link>
        <div class="mt-6 flex max-md:flex-wrap gap-3 items-center">
          <p class="text-lg font-bold text-white mb-5">
            <i class="text-secondary fa-solid fa-calendar-days mr-1"></i>
            November 25, 2024
          </p>
          <p class="text-lg font-bold text-white mb-5">
            <i class="text-secondary fa-solid fa-clock mr-1"></i>
            5 min read
          </p>
          <p class="text-lg font-bold text-white mb-5">
            <i class="text-secondary fa-solid fa-user mr-1"></i>
            Zero Point Path
          </p>
        </div>
        <div class="mt-8 space-y-8">
          <h1 class="text-2xl md:text-3xl font-bold text-white">
            Helldown Ransomware Analysis
          </h1>
          <div class="flex flex-col gap-4">
            <h3 class="text-xl md:text-2xl font-bold text-white">
              Introduction
            </h3>
            <p class="text-paragraph text-lg">
              Helldown ransomware, first identified in August 2024, is a recent
              addition to the ransomware landscape, known for its aggressive
              tactics and sophisticated encryption methods. This malware
              encrypts a wide range of file types, appending a unique extension
              to each, and leaves a ransom note instructing victims on payment
              procedures, typically demanding cryptocurrency. Notably, Helldown
              has been linked to several high-profile attacks, including
              breaches at Zyxel Networks, where 253GB of data were leaked, and
              Hug-Witschi AG, with 67GB of data exfiltrated. [Halcyon]
            </p>
          </div>
          <div class="flex flex-col gap-4">
            <h3 class="text-xl md:text-2xl font-bold text-white">
              what is Fog ?
            </h3>
            <p class="text-paragraph text-lg">
              In June [Arctic Wolf Labs] reported a deployment of a new
              ransomware named Fog Ransomware, according to their report the
              ransomware was seen in several incident Response cases, affecting
              education and recreation center in the United States, the
              investigation revealed that the attackers gain access to victims
              through compromised VPNs credentials, taking advantage of that ,
              the Threat actors disabled Windows Defenders and deployed the
              ransomware, the reported file is an 32-bit EXE file with the hash
              83f00af43df6 50fda2c5b4a04a 7b31790a8ad4cf, the below analysis was
              done by Dark Atlas Squad.
            </p>
          </div>
          <div class="flex flex-col gap-4">
            <h3 class="text-xl md:text-2xl font-bold text-white">
              Technical investigation
            </h3>
            <p class="text-paragraph text-lg">
              the ransomware was compiled using Microsoft Visual C/C++ by the
              end of April/24, also the developer used a lot of debug messages
              which were saved in a file called “DbgLog.sys” in the same
              directory of the ransomware process, the malware starts by the
              getting the address of kernel32.dll base address to resolve 2 APIs
            </p>
          </div>
          <div class="flex flex-col gap-4">
            <h3 class="text-xl md:text-2xl font-bold text-white">
              Data Leak Site (DLS)
            </h3>
            <p class="text-paragraph text-lg">
              Helldown ransomware operates a Data Leak Site (DLS), a dedicated
              platform where the operators publish stolen data from
              organizations that refuse to pay the ransom. This site is used as
              leverage to pressure victims into complying with payment demands
              by threatening the exposure of sensitive data, which could damage
              the victim’s reputation or lead to further legal and financial
              consequences. The Helldown DLS serves as a public warning to other
              targeted organizations, reinforcing that non-compliance with
              ransom demands can result in significant data exposure. This
              tactic has proven effective for ransomware groups, as it often
              pressures companies into negotiations to avoid public fallout and
              protect sensitive information from being leaked.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();
// console.log(route.params.id);
</script>

<style scoped></style>
