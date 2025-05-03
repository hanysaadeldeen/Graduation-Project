const getBlogs = async () => {
  interface SectionsJson {
    introduction: string;
    whatIsFog: string;
    Technicalinvestigation: string;
    DataLeakSite_DLS: string;
  }
  interface AddBlogData {
    img: File;
    SectionsJson: SectionsJson;
  }

  const config = useRuntimeConfig();

  const fetchBlog = async (url: string, id?: number) => {
    const { data, error } = await useFetch(
      `${config.public.BaseApi}/${url}/${id}`,
      {
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      },
    );
    return data.value;
  };

  const addBlog = async (data: AddBlogData) => {
    const formdata = new FormData();
    formdata.append("image", data.img);
    formdata.append("SectionsJson", JSON.stringify(data.SectionsJson));
    const { data: response, error } = await useFetch(
      `${config.public.BaseApi}/api/Blog`,
      {
        method: "POST",
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
        body: formdata,
      },
    );
    return response;
  };
  return { fetchBlog, addBlog };
};

export default getBlogs;
