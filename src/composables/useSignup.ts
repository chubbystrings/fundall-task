import { ref, Ref } from "vue";
import axiosInstance from "@/services/axios";
import { SIGNUP_DATA } from "@/types";

const error = ref("");
const isPending = ref(false);

const register = async (data: SIGNUP_DATA) => {
  const { email, password, firstname, lastname, password_confirmation } = data;
  error.value = "";
  isPending.value = true;

  try {
    await axiosInstance.post("/register", {
      email,
      password,
      firstname,
      lastname,
      password_confirmation,
    });
    isPending.value = false;
  } catch (err: any) {
    console.log(err);
    error.value = err;
    isPending.value = false;
  }
};

const useSignup = (): {
  error: any;
  isPending: Ref<boolean>;
  register: (data: SIGNUP_DATA) => void;
} => {
  return { error, isPending, register };
};

export default useSignup;
