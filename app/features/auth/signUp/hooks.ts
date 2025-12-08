import { useApiMutation } from "../../../api/useApiMutation";
import type { SignUpRequest } from "./types";
import type { GetUserDataResponse } from "./types";

export function useSignUp() {
  return useApiMutation<SignUpRequest, GetUserDataResponse>({
    url: "/auth/sign-up",
    method: "POST",
  });
}
