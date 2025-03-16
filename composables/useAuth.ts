export const useAuth = () => {
  const config = useRuntimeConfig();

  // register
  const register = async (data: {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Accept-Language", "ar");
    var formdata = new FormData();
    formdata.append("firstName", data.firstName);
    formdata.append("lastName", data.lastName);
    formdata.append("email", data.email);
    formdata.append("phone_code", "966");
    formdata.append("password", data.password);
    formdata.append("confirmPassword", data.confirmPassword);

    const Senderdata = {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      email: data.email,
      phoneNumber: "01098765432",
      password: data.password,
    };
    try {
      const response = await $fetch(`${config.public.BaseApi}/register`, {
        method: "POST",
        body: Senderdata,
        // headers: myHeaders,
      });
      return response;
    } catch (error) {
      if (error?.data) {
        throw new Error(error?.data?.errors || "Failed to sign in");
      } else {
        throw new Error("Failed to sign in");
      }
    }
  };

  // login
  const login = async (data: { email: string; password: string }) => {
    // var myHeaders = new Headers();
    // myHeaders.append("Accept", "application/json");
    // myHeaders.append("Accept-Language", "ar");

    var formdata = new FormData();
    formdata.append("email", data.email);
    formdata.append("password", data.password);
    const Senderdata = {
      email: data.email,
      password: data.password,
    };
    try {
      const response = await $fetch(`${config.public.BaseApi}/login`, {
        method: "POST",
        body: Senderdata,
      });
      return response;
    } catch (error: any) {
      if (error?.data?.message) {
        throw new Error(error.data.message);
      } else {
        throw new Error("Failed to sign in");
      }
    }
  };

  // forget password (send code )

  const sendCode = async (data: { email: string }) => {
    // var myHeaders = new Headers();
    // myHeaders.append("Accept", "application/json");
    // myHeaders.append("Accept-Language", "ar");

    // var formdata = new FormData();
    // formdata.append("phone_code", "966");
    // formdata.append("phone", "data.phone");
    const Senderdata = {
      email: data.email,
    };
    try {
      const response = await $fetch(
        `${config.public.BaseApi}/forget-password`,
        {
          method: "POST",
          body: Senderdata,
        }
      );
      return response;
    } catch (error) {
      throw new Error("Failed to Send Code");
    }
  };

  // verify code
  const verifyCodeSend = async (data: { code: number | null }) => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Accept-Language", "ar");

    var formdata = new FormData();
    formdata.append("phone_code", "966");
    formdata.append("phone", "123456789");
    formdata.append("code", " data.code");

    try {
      const response = await $fetch(`${config.public.apiBase}verify`, {
        method: "POST",
        headers: myHeaders,
        body: formdata,
      });
      return response;
    } catch (error) {
      throw new Error("Failed to sign up");
    }
  };

  // reset password

  const resetPassword = async (data: {
    password: string;
    password_confirmation: string;
  }) => {
    // var myHeaders = new Headers();
    // myHeaders.append("Accept", "application/json");
    // myHeaders.append("Accept-Language", "ar");

    // var formdata = new FormData();
    // formdata.append("_method", "PATCH");
    // formdata.append("phone_code", "966");
    // formdata.append("phone", "123456789");
    // formdata.append("code", "1111");
    // formdata.append("password", data.password);

    const Senderdata = {
      password: data.password,
    };

    try {
      const response = await $fetch(`${config.public.BaseApi}/reset-password`, {
        method: "POST",
        body: Senderdata,
      });
      return response;
    } catch (error) {
      throw new Error("Failed to Reset password");
    }
  };

  return { register, login, sendCode, verifyCodeSend, resetPassword };
};
