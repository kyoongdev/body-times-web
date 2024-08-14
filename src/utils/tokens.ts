import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/common/constants/tokens";
import { Nullable } from "@/common/types/nullable";
import { Token } from "@/common/types/tokens";

export const setTokens = (tokens: Token) => {
  setAccessToken(tokens.accessToken);
  setRefreshToken(tokens.refreshToken);
};

export const setAccessToken = (accessToken: string) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
};

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};

export const setRefreshToken = (refreshToken: string) => {
  localStorage.setItem(REFRESH_TOKEN, refreshToken);
};

export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN);
};

export const removeTokens = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
};

export const getTokens = (): Nullable<Token> => {
  return {
    accessToken: getAccessToken(),
    refreshToken: getRefreshToken(),
  };
};
