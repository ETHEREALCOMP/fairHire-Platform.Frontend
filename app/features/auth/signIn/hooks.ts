import { useApiMutation } from "../../../api/useApiMutation";
import type { SignInRequest, SignInResponse } from "./types";

export function useSignIn() {
  return useApiMutation<SignInRequest, SignInResponse>({
    url: "/auth/sign-in",
    method: "POST",
  });
}