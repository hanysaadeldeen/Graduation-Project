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
  const addProgram = async (values: any, goldStandard: any) => {
    console.log("addProgram function");

    loading.value = true;
    error.value = null;
    const formData = new FormData();
    const runtimeConfig = useRuntimeConfig();

    formData.append("title", values.programtitle);
    formData.append("companyName", values.companyName);
    formData.append("collaborationType", values.collaborationType);
    formData.append("goldStandard", String(goldStandard));
    formData.append("focusArea", values.focusArea);
    formData.append("inScopeVulnerabilities", values.inScopeVulnerabilities);
    formData.append(
      "outOfScopeVulnerabilities",
      values.outOfScopeVulnerabilities,
    );
    formData.append("programRules", values.programRules);
    formData.append("disclosureGuidelines", values.disclosureGuidelines);
    formData.append("eligibility", values.eligibility);

    formData.append("targets", JSON.stringify(values.targets));
    formData.append("rewards", JSON.stringify(values.rewards));

    if (values.image instanceof File) {
      formData.append("image", values.image);
    } else if (typeof values.image === "string") {
      formData.append("image", values.image);
    }

    console.log(values);

    const allvalue = {
      name: values.programtitle,
      logoUrl: "https://example.com/logo.png",
      collaborationType: values.collaborationType,
      goldStandard: goldStandard,
      vulnerabilitiesCount: 50,
      hackersPaid: 20,
      responseEfficiency: 95,
      companyName: values.companyName,
      programStatus: "Active",
    };
    console.log(allvalue);

    try {
      console.log("before fetch");

      const { data, error: fetchError } = await useFetch(
        `${runtimeConfig.public.BaseApi}/api/BBPrograms`,
        {
          method: "POST",
          body: allvalue,
        },
      );

      if (fetchError) {
        console.log("Error:", fetchError);

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
