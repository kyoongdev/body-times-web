import { apiClient } from "./apiClient";

export const getMeApi = () => apiClient.get("/users/me");
