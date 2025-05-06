const getBlogs = async () => {
  interface SectionsJson {
    introduction: string;
    whatIsFog: string;
    Technicalinvestigation: string;
    DataLeakSite_DLS: string;
  }

  interface AddBlog {
    image: string;
    introduction: string;
    whatIsFog: string;
    technicalInvestigation: string;
    dataLeakSite: string;
  }

  const runtimeConfig = useRuntimeConfig();
  const loading = ref(false);
  const error = ref<string | null>(null);
  const fetchBlog = async (url: string, id?: number) => {
    const { data, error } = await useFetch(
      `${runtimeConfig.public.BaseApi}/${url}/${id}`,
      {
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      },
    );
    return data.value;
  };

  const addBlog = async (data: AddBlog) => {
    loading.value = true;
    error.value = null;
    const formdata = new FormData();
    formdata.append("image", data.image);
    formdata.append("introduction", data.introduction);
    formdata.append("whatIsFog", data.whatIsFog);
    formdata.append("technicalInvestigation", data.technicalInvestigation);
    formdata.append("dataLeakSite", data.dataLeakSite);
    try {
      const { data, error: fetchError } = await useFetch<AddBlog>(
        `${runtimeConfig.public.BaseApi}/api/Blog`,
        {
          method: "POST",
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
          body: formdata,
        },
      );
      if (fetchError.value) {
        error.value = fetchError.value.message;
        return;
      }
      console.log(data.value);
    } catch (err: any) {
      error.value = err.message || "Unknown error";
    } finally {
      loading.value = false;
    }
  };
  return { fetchBlog, addBlog };
};

export default getBlogs;
