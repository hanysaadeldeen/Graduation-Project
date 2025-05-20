import { defineStore } from "pinia";
import { useAuth } from "~/composables/useAuth";

interface LoginResponse {
  token: string;
  userId: string;
  role: string;
  user: any;
}

export const useAuthStore = defineStore("authentication", () => {
  const { register, login, sendCode, verifyCodeSend, resetPassword } =
    useAuth();

  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const user = ref<any>(null);

  const token = useCookie("token", { maxAge: 60 * 60 * 24 * 7 });
  const userId = useCookie("userId", { maxAge: 60 * 60 * 24 * 7 });
  const userRole = useCookie("userRole", { maxAge: 60 * 60 * 24 * 7 });

  // register
  const registerUser = async (data: {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await register(data);
      isLoading.value = false;
      return response;
    } catch (err: any) {
      isLoading.value = false;
      error.value = err;
      return err;
    }
  };

  // login
  const loginUser = async (data: { email: string; password: string }) => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = (await login(data)) as LoginResponse;
      if (response) {
        token.value = response.token;
        userId.value = response.userId;
        userRole.value = response.role;
        user.value = response.user;
      }
      isLoading.value = false;
      return response;
    } catch (err: any) {
      isLoading.value = false;
      error.value = err;
      return err;
    }
  };

  // forgot password (send code)
  const forgetPassword = async (data: { email: string }) => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await sendCode(data);
      isLoading.value = false;
      return response;
    } catch (err: any) {
      isLoading.value = false;
      error.value = err;
      return err;
    }
  };

  // verify code
  const verifyCode = async (data: { code: number | null }) => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await verifyCodeSend(data);
      isLoading.value = false;
      return response;
    } catch (err: any) {
      isLoading.value = false;
      error.value = err;
      return err;
    }
  };

  // reset password
  const resetPass = async (data: {
    password: string;
    password_confirmation: string;
  }) => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await resetPassword(data);
      isLoading.value = false;
      return response;
    } catch (err: any) {
      isLoading.value = false;
      error.value = err;
      return err;
    }
  };

  // logout
  const logout = () => {
    token.value = null;
    userId.value = null;
    userRole.value = null;
    user.value = null;
  };

  return {
    loginUser,
    registerUser,
    forgetPassword,
    verifyCode,
    resetPass,
    logout,
    isLoading,
    error,
    user,
    token,
    userId,
    userRole,
  };
});
