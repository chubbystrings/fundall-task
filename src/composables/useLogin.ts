import { ref, Ref } from "vue";
import axiosInstance from "@/services/axios";
import { CURRENT_USER } from "@/types";

const error = ref("");
const isPending = ref(false);
const data = ref<CURRENT_USER | null>(null);

const login = async (email: string, password: string) => {
  error.value = "";
  isPending.value = true;
  try {
    const user = await axiosInstance.post("/login", { email, password });
    isPending.value = false;
    const userData: CURRENT_USER = {
      id: user.data.success.user.id,
      email: user.data.success.user.email,
      firstname: user.data.success.user.firstname,
      lastname: user.data.success.user.lastname,
      access_token: user.data.success.user.access_token,
      avatar: user.data.success.user.avatar,
      expires_at: user.data.success.user.expires_at,
    };
    data.value = userData;
  } catch (err: any) {
    console.log(err);
    error.value = err;
    isPending.value = false;
  }
};

const useLogin = (): {
  error: any;
  isPending: Ref<boolean>;
  login: (email: string, password: string) => void;
  data: Ref<CURRENT_USER | null>;
} => {
  return { error, isPending, login, data };
};

export default useLogin;
