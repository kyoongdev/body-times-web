import { atomWithStorage } from "jotai/utils";

import { USER_INFO } from "@/common/constants/storate";
import { Me } from "@/common/types/users";

export const meState = atomWithStorage<Me | null>(USER_INFO, null);
