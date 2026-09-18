import axios from "axios";
import toast from "react-hot-toast";

interface SignupData {
  email: string;
  password: string;
  referralCode: string;
  mobile: string;
  countryCode: string;
  confirmPassword: string;
  name: string;
}

interface RegisterResponse {
  message: string;
}

export const requestSubmit = async (
  data: SignupData
): Promise<RegisterResponse | undefined> => {
  try {
    const res = await axios.post("auth/register", data);

    return { message: "details submitted" };
  } catch (error: any) {
    const errorMessage = "Failed to register";
    if (error.response?.status === 500) {
      toast.error(error.response?.data?.message ?? errorMessage);
    } else if (error.response?.status === 400) {
    } else {
      console.error(error, error.response?.data?.message, "register");
    }
  }
};
