import React from "react";

import Spinner from "@/components/Common/Spinner";

import Handler from "./Handler";

const KakaoLogin: React.FC = () => {
  return (
    <>
      <Spinner />
      <Handler />
    </>
  );
};

export default KakaoLogin;
