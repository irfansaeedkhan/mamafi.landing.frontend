import axios, { type AxiosError, type AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 20000,
  // Never throw on HTTP status — callers branch on response.status
  validateStatus: () => true,
});

function networkFallbackResponse(error: AxiosError): AxiosResponse {
  return {
    data: null,
    status: 0,
    statusText: "Network Error",
    headers: {},
    config: error.config ?? { headers: {} as never },
  };
}

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Never reject / console.error(Error) — Next.js overlays treat those as runtime errors
    const message =
      error?.code === "ERR_NETWORK"
        ? "Network unavailable"
        : error?.message || "Request failed";
    if (process.env.NODE_ENV === "development") {
      console.warn(`[api] ${message}`);
    }
    return networkFallbackResponse(error);
  }
);

export default axiosInstance;
