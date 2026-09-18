import axiosInstance from "@/utils/axiosInstance";
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
  const response = await axiosInstance.post("auth/register", data);

  if (response.status === 200 || response.status === 201) {
    return { message: "details submitted" };
  }

  const apiMessage =
    response.data &&
    typeof response.data === "object" &&
    "message" in response.data &&
    typeof (response.data as { message?: unknown }).message === "string"
      ? (response.data as { message: string }).message
      : undefined;

  if (response.status === 400 || response.status === 500) {
    toast.error(apiMessage ?? "Failed to register");
  } else {
    toast.error("Unable to reach the server. Please try again later.");
  }

  return undefined;
};
