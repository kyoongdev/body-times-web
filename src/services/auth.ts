import { apiClient } from "./apiClient";

export const kakaoLoginApi = () => apiClient.get("/auth/social/kakao");
