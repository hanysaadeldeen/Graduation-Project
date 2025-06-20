export const useUserPage = () => {
  const config = useRuntimeConfig();
  const userRole = useCookie("userRole");
  const token = useCookie("token");
  const userId = useCookie("userId");

  const fetchUserData = async () => {
    try {
      if (userRole.value === "admin") {
        const response = await $fetch(`${config.public.BaseApi}/Admins`);
        return response;
      } else {
        const response = await $fetch(`${config.public.BaseApi}/Users`);
        return response;
      }
    } catch (error: any) {
      return error?.response?._data ?? error;
    }
  };
  const fetchAdminById = async () => {
    try {
      const response = await $fetch(
        `${config.public.BaseApi}/Admins/${userId.value}`,
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        },
      );
      return response;
    } catch (error: any) {
      return error?.response?._data ?? error;
    }
  };
  const fetchUserById = async () => {
    try {
      const response = await $fetch(
        `${config.public.BaseApi}/Users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        },
      );
      return response;
    } catch (error: any) {
      return error?.response?._data ?? error;
    }
  };

  return {
    fetchUserData,
    fetchAdminById,
    fetchUserById,
  };
};
