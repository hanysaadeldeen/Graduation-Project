export const report = async () => {
  const config = useRuntimeConfig();
  const Error = ref<any | null>(null);

  interface VulnerabilityReport {
    ProgramId: string;
    UserId: string;
    VulnerabilityTitle: string;
    VulnerabilityTarget: string;
    VulnerabilityCategory: string;
    SeverityLevel: string;
    AttackVector: string;
    AttackComplexity: string;
    PrivilegesRequired: string;
    UserInteraction: string;
    Scope: string;
    Confidentiality: string;
    Integrity: string;
    Availability: string;
    VulnerabilityDetails: string;
    ValidationSteps: string;
    Attachment: File;
  }

  // const token = useCookie("token") as any;
  const userId = useCookie("userId") as any;
  const addReport = async (programID: any, values: VulnerabilityReport) => {
    const formData = new FormData();
    formData.append("ProgramId", programID);
    formData.append("UserId", userId);
    formData.append("VulnerabilityTitle", values.VulnerabilityTitle);
    formData.append("VulnerabilityTarget", values.VulnerabilityTarget);
    formData.append("VulnerabilityCategory", values.VulnerabilityCategory);
    formData.append("SeverityLevel", values.SeverityLevel);
    formData.append("AttackVector", values.AttackVector);
    formData.append("AttackComplexity", values.AttackComplexity);
    formData.append("PrivilegesRequired", values.PrivilegesRequired);
    formData.append("UserInteraction", values.UserInteraction);
    formData.append("Scope", values.Scope);
    formData.append("Confidentiality", values.Confidentiality);
    formData.append("Integrity", values.Integrity);
    formData.append("Availability", values.Availability);
    formData.append("VulnerabilityDetails", values.VulnerabilityDetails);
    formData.append("ValidationSteps", values.ValidationSteps);
    formData.append("Attachment", values.Attachment);

    try {
      const { data, error: fetchError } = await useFetch(
        `${config.public.BaseApi}/api/ReportSubmissions`,
        {
          method: "POST",
          body: formData,
        },
      );
      if (fetchError) {
        console.log(fetchError);
        Error.value = fetchError || null;
        return;
      }
      return data;
    } catch (error) {
      Error.value = error;
    }
  };

  const getAllReports = async (id: any) => {
    try {
      const { data, error: fetchError } = await useFetch(
        `${config.public.BaseApi}/api/ReportSubmissions/${id}`,
        {
          method: "GET",
        },
      );
      if (fetchError) {
        console.log(fetchError);
        Error.value = fetchError || null;
        return;
      }
      return data;
    } catch (error) {
      Error.value = error;
    }
  };
  const getReportId = async (id: any) => {
    try {
      const { data, error: fetchError } = await useFetch(
        `${config.public.BaseApi}/api/ReportSubmissions/${id}`,
        {
          method: "GET",
        },
      );
      if (fetchError) {
        console.log(fetchError);
        Error.value = fetchError || null;
        return;
      }
      return data;
    } catch (error) {
      Error.value = error;
    }
  };

  return { addReport, getReportId, getAllReports };
};
