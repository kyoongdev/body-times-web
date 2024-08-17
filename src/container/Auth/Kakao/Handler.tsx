"use client";

import React from "react";

import { useRouter, useSearchParams } from "next/navigation";

import useClientEffect from "@/hooks/useClientEffect";
import { setTokens } from "@/utils/tokens";

const Handler: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useClientEffect(() => {
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");

    if (accessToken && refreshToken) {
      setTokens({ accessToken, refreshToken });
      router.replace("/main");
    } else router.replace("/auth/failed");
  }, [searchParams, router]);

  return null;
};

export default Handler;
