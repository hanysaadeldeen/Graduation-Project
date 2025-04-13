<template>
  <div class="Program_Info mt-8">
    <div class="flex flex-wrap gap-4 border-b border-gray-500 pb-4">
      <p
        class="cursor-pointer rounded-2xl px-5 py-2 text-lg font-semibold tracking-wide text-black"
        :class="
          bountyType === 'All'
            ? 'bg-[#ffb45c] text-white'
            : 'bg-white text-black transition-all duration-300 ease-in-out hover:bg-gray-200'
        "
        @click="bountyType = 'All'"
      >
        All
      </p>
      <p
        class="cursor-pointer rounded-2xl px-5 py-2 text-lg font-semibold tracking-wide text-black"
        :class="
          bountyType === 'Scope'
            ? 'bg-secondary text-white'
            : 'bg-white text-black transition-all duration-300 ease-in-out hover:bg-gray-200'
        "
        @click="bountyType = 'Scope'"
      >
        Scope
      </p>
      <p
        class="cursor-pointer rounded-2xl px-5 py-2 text-lg font-semibold tracking-wide text-black"
        :class="
          bountyType === 'FocusArea'
            ? 'bg-secondary text-white'
            : 'bg-white text-black transition-all duration-300 ease-in-out hover:bg-gray-200'
        "
        @click="bountyType = 'FocusArea'"
      >
        Focus Area
      </p>
      <p
        class="cursor-pointer rounded-2xl px-5 py-2 text-lg font-semibold tracking-wide text-black"
        :class="
          bountyType === 'ProgramRules'
            ? 'bg-secondary text-white'
            : 'bg-white text-black transition-all duration-300 ease-in-out hover:bg-gray-200'
        "
        @click="bountyType = 'ProgramRules'"
      >
        Program Rules
      </p>
      <p
        class="cursor-pointer rounded-2xl px-5 py-2 text-lg font-semibold tracking-wide text-black"
        :class="
          bountyType === 'Disclosure'
            ? 'bg-secondary text-white'
            : 'bg-white text-black transition-all duration-300 ease-in-out hover:bg-gray-200'
        "
        @click="bountyType = 'Disclosure'"
      >
        Disclosure Guidelines
      </p>
      <p
        class="cursor-pointer rounded-2xl px-5 py-2 text-lg font-semibold tracking-wide text-black"
        :class="
          bountyType === 'Eligibility'
            ? 'bg-secondary text-white'
            : 'bg-white text-black transition-all duration-300 ease-in-out hover:bg-gray-200'
        "
        @click="bountyType = 'Eligibility'"
      >
        Eligibility and Coordinated Disclosure
      </p>
    </div>
    <!-- scope -->
    <div
      v-if="bountyType === 'Scope' || bountyType === 'All'"
      class="mr-auto mt-8 max-w-4xl"
    >
      <h1 class="mb-4 text-2xl font-bold text-white">IN SCOPE</h1>
      <div class="mb-8 overflow-x-auto rounded-lg shadow-md">
        <table
          class="w-full min-w-[600px] border-collapse rounded-lg bg-white/10 text-left"
        >
          <thead>
            <tr class="bg-primary text-lg text-white">
              <th class="px-6 py-4 font-normal">Target</th>
              <th class="px-6 py-4 font-normal">Type</th>
              <th class="px-6 py-4 font-normal">Severity</th>
              <th class="px-6 py-4 font-normal">Reward</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="cursor-pointer border-b border-secondary transition-all duration-200 ease-in-out hover:bg-secondary"
            >
              <td class="px-4 py-3 font-medium capitalize text-white">
                <span class="text-blue-600">https://www.cube.exchange</span>
                <button @click="copyPassword" class="ml-2 text-gray-400">
                  <i class="far fa-copy"></i>
                </button>
              </td>
              <td class="px-4 py-3 font-medium capitalize text-white">Web</td>
              <td class="px-4 py-3 font-medium capitalize text-white">
                <span class="severity-dot severity-critical text-[#ffb45c]"
                  >Critical</span
                >
              </td>
              <td class="px-4 py-3 font-medium capitalize text-white">
                Bounty
              </td>
            </tr>
            <tr
              class="cursor-pointer border-b border-secondary transition-all duration-200 ease-in-out hover:bg-secondary"
            >
              <td class="px-4 py-3 font-medium capitalize text-white">
                <span class="text-blue-600">*.cube.exchange</span>
                <button @click="copyPassword" class="ml-2 text-gray-400">
                  <i class="far fa-copy"></i>
                </button>
              </td>
              <td class="px-4 py-3 font-medium capitalize text-white">iOS</td>
              <td class="px-4 py-3 font-medium capitalize text-white">
                <span class="severity-dot severity-critical text-[#ffb45c]"
                  >Critical</span
                >
              </td>
              <td class="px-4 py-3 font-medium capitalize text-white">
                Bounty
              </td>
            </tr>
            <tr
              class="cursor-pointer border-b border-secondary transition-all duration-200 ease-in-out hover:bg-secondary"
            >
              <td class="px-4 py-3 font-medium capitalize text-white">
                <span class="text-blue-600">https://apps.apple.com/us</span>
                <button @click="copyPassword" class="ml-2 text-gray-400">
                  <i class="far fa-copy"></i>
                </button>
              </td>
              <td class="px-4 py-3 font-medium capitalize text-white">
                Android
              </td>
              <td class="px-4 py-3 font-medium capitalize text-white">
                <span class="severity-dot severity-critical text-[#ffb45c]"
                  >Critical</span
                >
              </td>
              <td class="px-4 py-3 font-medium capitalize text-white">
                Bounty
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!--Focus Area -->
    <div v-if="bountyType === 'FocusArea' || bountyType === 'All'" class="mt-8">
      <h1 class="mb-4 text-3xl font-bold text-white">Focus Area</h1>
      <div>
        <h2
          class="mb-4 border-b-2 border-gray-500 pb-2 text-xl font-bold text-white"
        >
          IN SCOPE VULNERABILITIES (WEB, MOBILE)
        </h2>
        <p class="text-xl text-paragraph">
          We are interested in the following vulnerabilities:
        </p>
        <ul class="mt-5 space-y-4">
          <li class="textDescription text-xl text-white">
            Assets that do not belong to the company
          </li>
          <li class="textDescription text-xl text-white">
            Reports that state that software is out of date/vulnerable without a
            proof of concept
          </li>
          <li class="textDescription text-xl text-white">
            Spam (sms, email, etc)
          </li>
          <li class="textDescription text-xl text-white">
            Vulnerabilities in third-party applications
          </li>
          <li class="textDescription text-xl text-white">
            Most brute-forcing issues without clear impact
          </li>
          <li class="textDescription text-xl text-white">
            Missing HTTP security headers
          </li>
        </ul>
      </div>
      <div class="mt-8">
        <h2
          class="mb-4 border-b-2 border-gray-500 pb-2 text-xl font-bold text-white"
        >
          OUT OF SCOPE: WEB VULNERABILITIES
        </h2>
        <p class="text-xl text-paragraph">
          Vulnerabilities found in out of scope resources are unlikely to be
          rewarded unless they present a serious business risk (at our sole
          discretion). In general, the following vulnerabilities do not
          correspond to the severity threshold:
        </p>
        <ul class="mt-5 space-y-4">
          <li class="textDescription text-xl text-white">
            Assets that do not belong to the company
          </li>
          <li class="textDescription text-xl text-white">
            Reports that state that software is out of date/vulnerable without a
            proof of concept
          </li>
          <li class="textDescription text-xl text-white">
            Spam (sms, email, etc)
          </li>
          <li class="textDescription text-xl text-white">
            Vulnerabilities in third-party applications
          </li>
          <li class="textDescription text-xl text-white">
            Most brute-forcing issues without clear impact
          </li>
          <li class="textDescription text-xl text-white">
            Missing HTTP security headers
          </li>
          <li class="textDescription text-xl text-white">
            Assets that do not belong to the company
          </li>
          <li class="textDescription text-xl text-white">
            Reports that state that software is out of date/vulnerable without a
            proof of concept
          </li>
          <li class="textDescription text-xl text-white">
            Spam (sms, email, etc)
          </li>
          <li class="textDescription text-xl text-white">
            Login & Logout CSRF
          </li>
          <li class="textDescription text-xl text-white">
            Most brute-forcing issues without clear impact
          </li>
          <li class="textDescription text-xl text-white">Mixed HTTP Content</li>
          <li class="textDescription text-xl text-white">
            Response manipulations without demonstration of system state change
          </li>
          <li class="textDescription text-xl text-white">
            MitM and local attacks
          </li>
          <li class="textDescription text-xl text-white">
            HTTPS Mixed Content Scripts
          </li>
          <li class="textDescription text-xl text-white">
            Content Spoofing without embedded links/HTML
          </li>
          <li class="textDescription text-xl text-white">
            Content spoofing and text injection issues without showing an attack
            vector/without being able to modify HTML/CSS
          </li>
          <li class="textDescription text-xl text-white">
            Host header issues without proof-of-concept demonstrating clear
            security impact
          </li>
        </ul>
      </div>
    </div>
    <!--Program Rules -->
    <div
      class="mt-8"
      v-if="bountyType === 'ProgramRules' || bountyType === 'All'"
    >
      <h1 class="mb-4 text-3xl font-bold text-white">Program Rules</h1>
      <ul class="mt-5 space-y-4">
        <li class="textDescription text-xl text-white">
          Don’t exploit any DoS/DDoS vulnerabilities, social engineering
          attacks, or spam
        </li>
        <li class="textDescription text-xl text-white">
          Reports that state that software is out of date/vulnerable without a
          proof of concept
        </li>
        <li class="textDescription text-xl text-white">
          Avoid using web application scanners for automatic vulnerability
          searching which generates massive traffic
        </li>
        <li class="textDescription text-xl text-white">
          Vulnerabilities in third-party applications
        </li>
        <li class="textDescription text-xl text-white">
          Most brute-forcing issues without clear impact
        </li>
        <li class="textDescription text-xl text-white">
          In case you find chain vulnerabilities we’ll pay only for
          vulnerability with the highest severity.
        </li>
        <li class="textDescription text-xl text-white">
          Don’t break any law and stay in the defined scope
        </li>
        <li class="textDescription text-xl text-white">
          Any details of found vulnerabilities must not be communicated to
          anyone who is not a HackenProof Team or an authorized employee of this
          Company without appropriate permission
        </li>
      </ul>
    </div>
    <!--Disclosure Guidelines -->
    <div
      class="mt-8"
      v-if="bountyType === 'Disclosure' || bountyType === 'All'"
    >
      <h1 class="mb-4 text-3xl font-bold text-white">Disclosure Guidelines</h1>
      <ul class="mt-5 space-y-4">
        <li class="textDescription text-xl text-white">
          Do not discuss this program or any vulnerabilities (even resolved
          ones) outside of the program without express consent from the
          organization
        </li>
        <li class="textDescription text-xl text-white">
          No vulnerability disclosure, including partial is allowed for the
          moment.
        </li>
        <li class="textDescription text-xl text-white">
          Please do NOT publish/discuss bugs
        </li>
      </ul>
    </div>
    <!--Eligibility and Coordinated Disclosure -->
    <div
      class="mt-8"
      v-if="bountyType === 'Eligibility' || bountyType === 'All'"
    >
      <h1 class="mb-4 text-3xl font-bold text-white">
        Eligibility and Coordinated Disclosure
      </h1>
      <p class="text-xl text-paragraph">
        We are happy to thank everyone who submits valid reports which help us
        improve the security. However, only those that meet the following
        eligibility requirements may receive a monetary reward:
      </p>
      <ul class="mt-5 space-y-4">
        <li class="textDescription text-xl text-white">
          You must be the first reporter of a vulnerability.
        </li>
        <li class="textDescription text-xl text-white">
          Reports that state that software is out of date/vulnerable without a
          proof of concept
        </li>
        <li class="textDescription text-xl text-white">
          The vulnerability must be a qualifying vulnerability
        </li>
        <li class="textDescription text-xl text-white">
          Any vulnerability found must be reported no later than 24 hours after
          discovery and exclusively through hackenproof.com
        </li>
        <li class="textDescription text-xl text-white">
          You must send a clear textual description of the report along with
          steps to reproduce the issue, include attachments such as screenshots
          or proof of concept code as necessary.
        </li>
        <li class="textDescription text-xl text-white">
          You must not be a former or current employee of us or one of its
          contractor.
        </li>
        <li class="textDescription text-xl text-white">
          Don’t break any law and stay in the defined scope
        </li>
        <li class="textDescription text-xl text-white">
          ONLY USE the EMAIL under which you registered your HackenProof account
          (in case of violation, no bounty can be awarded)
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from "vue-toast-notification";
const toast = useToast({ position: "top-right", duration: 1500 });
const bountyType = ref<string>("All");
const copyPassword = () => {
  // navigator.clipboard.writeText(password.value);
  toast.success("Copied to clipboard");
};
</script>

<style scoped>
/* .severity-dot::before{
  
} */
.severity-dot::before,
.textDescription::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  background-color: #ffb45c;
  margin: 0 8px 2px 0;
}
</style>
