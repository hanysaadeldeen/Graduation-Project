import { defineStore } from "pinia";
import { useAuth } from "~/composables/useAuth";

export const useAuthStore = defineStore("authentication", () => {
  const { register, login, sendCode, verifyCodeSend, resetPassword } =
    useAuth();

  const isLoading = ref(false);
  const error = ref<string | null>(null);

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
      isLoading.value = true;
      const response = await register(data);
      isLoading.value = false;
      return response;
    } catch (err: any) {
      isLoading.value = false;
      error.value = err || "Registration failed";
      throw err;
    }
  };

  const token: any = useCookie("token", { maxAge: 60 * 60 * 24 * 7 });
  const userId = useCookie("userId", { maxAge: 60 * 60 * 24 * 7 });
  const usereRole = useCookie("usereRole", { maxAge: 60 * 60 * 24 * 7 });
  // login
  const loginUser = async (data: { email: string; password: string }) => {
    isLoading.value = true;
    error.value = null;
    try {
      isLoading.value = true;
      const response = (await login(data)) as any;
      isLoading.value = false;
      if (response) {
        token.value = response.token;
        userId.value = response.userId;
        usereRole.value = response.role;
      }
      return response;
    } catch (err: any) {
      isLoading.value = false;
      error.value = err.message;
      throw err;
    }
  };

  // forgot password (send code )
  const forgetPassword = async (data: { email: string }) => {
    error.value = null;
    try {
      isLoading.value = true;
      const response = await sendCode(data);
      isLoading.value = false;
      return response;
    } catch (err: any) {
      isLoading.value = false;
      error.value = err.message || "Registration failed";
    }
  };

  // verify code (send)

  const verifyCode = async (data: { code: number | null }) => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await verifyCodeSend(data);
      isLoading.value = false;
    } catch (err: any) {
      isLoading.value = false;
      error.value = err.message || "Registration failed";
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
    } catch (err: any) {
      isLoading.value = false;
      error.value = err.message || "Registration failed";
    }
  };

  return {
    loginUser,
    registerUser,
    forgetPassword,
    verifyCode,
    resetPass,
    isLoading,
    error,
  };
});
