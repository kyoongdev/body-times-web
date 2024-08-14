import { useCallback, useEffect } from "react";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";

import { getMeApi } from "@/services/user";
import { meState } from "@/state/user";
import { removeTokens } from "@/utils/tokens";
import { isClient } from "@/utils/window";

const useMe = () => {
  const queryClient = useQueryClient();
  const [me, setMe] = useAtom(meState);

  const { data, refetch, isSuccess, error } = useQuery({
    queryKey: ["getMe"],
    queryFn: () => getMeApi().then((res) => res.data),
    enabled: !me && isClient,
  });

  const onLogout = useCallback(() => {
    removeTokens();
    setMe(null);
    queryClient.clear();
  }, [queryClient, setMe]);

  useEffect(() => {
    if (error) {
      onLogout();
    }
  }, [error, onLogout]);

  useEffect(() => {
    if (isSuccess) {
      setMe(data);
      queryClient.invalidateQueries({
        predicate: (query) => !["getMe"].includes(query.queryKey[0] as string),
      });
    }
  }, [data, isSuccess, queryClient, setMe]);

  return {
    me,
    isLogined: Boolean(me),
    refetchMe: refetch,
    onLogout,
  };
};

export default useMe;
