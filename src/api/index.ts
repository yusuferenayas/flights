import { ApiClient } from "./client";

const apiClient = new ApiClient();

const useApiClient = () => {
  return apiClient;
};

export { useApiClient };
