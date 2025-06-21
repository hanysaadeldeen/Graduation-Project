export const useUserPage = () => {
  const runtimeConfig = useRuntimeConfig();
  const userRole = useCookie("userRole");
  const token = useCookie("token");
  const loading = ref(false);

  const fetchUserDataTest = async () => {
    console.log(token.value);
    console.log(userRole.value);
    console.log(runtimeConfig.public.BaseApi);
    loading.value = true;
    try {
      const response = await $fetch(
        `${runtimeConfig.public.BaseApi}/Users/e4ce4664-986f-49bc-22bc-08dd9593d07f`,
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        },
      );
      return response;
    } catch (err: any) {
      console.error("Fetch error:", err);
    } finally {
      loading.value = false;
    }
  };

  const fetchPrograms = async () => {
    loading.value = true;
    try {
      const response = await $fetch(
        `${runtimeConfig.public.BaseApi}/BBPrograms`,
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        },
      );
      return response;
    } catch (err: any) {
      console.error("Fetch error:", err);
    } finally {
      loading.value = false;
    }
  };

  return {
    fetchUserDataTest,
    fetchPrograms,
  };
};
