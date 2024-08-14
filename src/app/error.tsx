"use client";

import { useRouter } from "next/navigation";

import { useQueryErrorResetBoundary } from "@tanstack/react-query";

import Button from "@/components/Common/Button";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const { replace } = useRouter();
  const { reset: resetReactQueryError } = useQueryErrorResetBoundary();

  // const [code, title, desc] = (() => {
  //   const isAxiosError = isAxiosErrorApp<ErrorDTO>(error);
  //   if (error.message.includes("canceled") || error.message.includes("TOKEN_EMPTY"))
  //     return [401, "권한이 없습니다.", ""];
  //   if (error.message.includes("Unexpected token < in")) return [503, "Service Unavailable", "서버 점검 중입니다."];
  //   if (isAxiosError && error.response?.data) {
  //     return [error.response.data.status, error.response.data.message, ""];
  //   }
  //   return [500, error.name, error.message];
  // })();

  const clearError = () => {
    return new Promise<void>((res) => {
      resetReactQueryError();
      reset();
      res();
    });
  };

  const onClickButton = async () => {
    await clearError();
    replace("/");
    clearError();
  };

  return (
    <>
      <Button type="button" color="primary" onClick={onClickButton}>
        홈으로 돌아가기
      </Button>
    </>
  );
}
