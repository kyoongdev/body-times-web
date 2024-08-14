import axios, { type AxiosError, isAxiosError as isAxiosErrorApp } from "axios";

import { TOKEN_EXPIRED_MESSAGE, UNAUTHORIZED_STATUS } from "@/common/constants/tokens";
import { ErrorDTO } from "@/common/types/axios";
import { Token } from "@/common/types/tokens";
import { getAccessToken, getTokens, removeTokens, setTokens } from "@/utils/tokens";
import { isClient } from "@/utils/window";

import { holder } from "./helper/promiseHolder";

export const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  timeout: 5000,
});

apiClient.interceptors.request.use(async (config) => {
  if (!isClient) return config;
  if (holder.isLocked) await holder.promise;

  const accessToken = getAccessToken();
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

  const abortController = new AbortController();

  return { ...config, signal: abortController.signal };
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (!isClient) return Promise.reject(error);
    if (isAxiosError<ErrorDTO>(error) && error?.response?.data) {
      const { message, status } = error.response.data;

      if (message === TOKEN_EXPIRED_MESSAGE && status === UNAUTHORIZED_STATUS) {
        try {
          const { accessToken, refreshToken } = getTokens();
          if (!accessToken || !refreshToken) throw new Error();

          if (!holder.isLocked) {
            holder.hold();

            const refreshResponse = await axios.post<Token>(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/refresh`, {
              accessToken,
              refreshToken,
            });

            const { accessToken: newAccessToken, refreshToken: newRefreshToken } = refreshResponse.data;
            setTokens({ accessToken: newAccessToken, refreshToken: newRefreshToken });

            error.config!.headers.Authorization = `Bearer ${newAccessToken}`;
            holder.successRelease();
          } else await holder.promise;

          return await apiClient(error.config!);
        } catch {
          holder.failRelease();
          removeTokens();
        }
      }
    }

    return Promise.reject(error);
  },
);

export const isAxiosError = <T>(err: unknown | AxiosError<T>): err is AxiosError<T> => {
  return isAxiosErrorApp(err);
};

export const getErrorMessage = (err: unknown, fallbackMessage: string) => {
  return isAxiosError<ErrorDTO>(err) && err.response ? err.response.data.message : fallbackMessage;
};
