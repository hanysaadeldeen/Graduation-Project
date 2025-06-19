// export const useUserPage = () => {
//   const config = useRuntimeConfig();

//   const isLoading = ref(false);
//   const userData = reactive({
//     name: "",
//     email: "",
//     avatar: "",
//   });
//   const getAdminData = async () => {
//     isLoading.value = true;
//     try {
//       const response = await $fetch(
//         `${config.public.BaseApi}/account/register`,
//         {
//           method: "GET",
//         },
//       );

//       if (response) {
//         userData.name = response.name;
//         userData.email = response.email;
//         userData.avatar = response.avatar;
//       }
//     } catch (error: any) {
//       if (error?.response?._data) {
//         return error.response._data;
//       }
//       return error;
//     } finally {
//       isLoading.value = false;
//     }
//   };

//   return {
//     getAdminData,
//     userData,
//     isLoading,
//   };
// };

export const useUserPage = () => {
  const config = useRuntimeConfig();
  const userRole = useCookie("userRole");
  const fetchUserData = async () => {
    try {
      if (userRole.value === "admin") {
        const response = await $fetch(`${config.public.BaseApi}/Blog`);
        return response;
      } else {
        const response = await $fetch(`${config.public.BaseApi}/Blog`);
        return response;
      }
    } catch (error: any) {
      return error?.response?._data ?? error;
    }
  };

  return {
    fetchUserData,
  };
};
