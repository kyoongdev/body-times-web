import { useEffect } from "react";

import { isClient } from "@/utils/window";

const useClientEffect: typeof useEffect = (effect, deps) => {
  useEffect(() => {
    if (!isClient) return;
    effect();
    /* eslint-disable */
  }, deps);
};

export default useClientEffect;
