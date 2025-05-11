export const programsController = async () => {
  const runtimeConfig = useRuntimeConfig();
  const loading = ref(false);
  const error = ref<string | null>(null);

  interface ProgramCard {
    id: number;
    companyName: string;
    image: string;
    title: string;
    collaborationType: string;
    goldStandard: boolean;
    minPrice: number;
    maxPrice: number;
    vulnerabilitiesCount: string;
    hackersPaid: string;
    responseEfficiency: string;
  }

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

  interface ProgramDetails {
    id: number;
    title: string;
    companyName: string;
    image: string;
    rewards: Rewards;
    targets: Target[];
    inScopeVulnerabilities: string;
    outOfScopeVulnerabilities: string;
    programRules: string;
    disclosureGuidelines: string;
    eligibility: string;
  }

  interface FormProgramValues {
    title: string;
    companyName: string;
    image: string;
    collaborationType: string;
    goldStandard: string;
    targets: Target[];
    focusArea: string;
    inScopeVulnerabilities: string;
    outOfScopeVulnerabilities: string;
    programRules: string;
    disclosureGuidelines: string;
    eligibility: string;
    rewards: Rewards;
  }

  const fetchPrograms = async () => {
    try {
      loading.value = true;

      const { data, error: fetchError } = await useFetch<ProgramCard[]>(
        `${runtimeConfig.public.BaseApi}/api/BBPrograms`,
        {
          method: "GET",
        },
      );
      if (fetchError.value) {
        error.value = fetchError.value.message;
        return;
      }
      loading.value = false;
      return data.value;
    } catch (err: any) {
      error.value = err.message || "Unknown error";
    } finally {
      loading.value = false;
    }
  };
  const fetchProgramId = async (id: string) => {
    try {
      loading.value = true;

      const { data, error: fetchError } = await useFetch<ProgramDetails>(
        `${runtimeConfig.public.BaseApi}/api/BBPrograms/${id}`,
        {
          method: "GET",
        },
      );
      if (fetchError.value) {
        error.value = fetchError.value.message;
        return;
      }
      loading.value = false;
      return data.value;
    } catch (err: any) {
      error.value = err.message || "Unknown error";
    } finally {
      loading.value = false;
    }
  };
  const addProgram = async (values: any) => {
    loading.value = true;
    error.value = null;
    const formData = new FormData();
    const runtimeConfig = useRuntimeConfig();

    // Append top-level string fields
    formData.append("focusArea", values.focusArea);
    formData.append("inScopeVulnerabilities", values.inScopeVulnerabilities);
    formData.append(
      "outOfScopeVulnerabilities",
      values.outOfScopeVulnerabilities,
    );
    formData.append("programRules", values.programRules);
    formData.append("disclosureGuidelines", values.disclosureGuidelines);
    formData.append("eligibility", values.eligibility);

    // Append rewards fields
    formData.append("rewards[critical]", values.rewards.critical);
    formData.append("rewards[high]", values.rewards.high);
    formData.append("rewards[medium]", values.rewards.medium);
    formData.append("rewards[low]", values.rewards.low);

    // Append targets array
    values.targets.forEach((target: Target, index: number) => {
      formData.append(`targets[${index}][url]`, target.url);
      formData.append(`targets[${index}][type]`, target.type);
      formData.append(`targets[${index}][severity]`, target.severity);
      formData.append(`targets[${index}][reward]`, target.reward);
    });

    try {
      const { data, error: fetchError } = await useFetch(
        `${runtimeConfig.public.BaseApi}/`,
        {
          method: "POST",
          body: formData,
        },
      );

      if (fetchError.value) {
        console.error("Submission failed:", fetchError.value);
        error.value = fetchError.value.message || "Submission failed";
        return;
      }

      console.log("Form submitted successfully:", data.value);
      return data.value;
    } catch (err) {
      console.error("Submission error:", err);
      error.value = err instanceof Error ? err.message : "An error occurred";
    } finally {
      loading.value = false;
    }
  };

  return {
    addProgram,
    fetchPrograms,
    fetchProgramId,
  };
};
