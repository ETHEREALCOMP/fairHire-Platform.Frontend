import { useMutation, UseMutationOptions, UseMutationResult } from "@tanstack/react-query";
import { apiCall, ApiCallConfig } from "./apiCall";

export interface MutationConfig<TRequest, TResponse> {
  url: string;
  method: "POST" | "PUT" | "PATCH" | "DELETE";
}

export function useApiMutation<TRequest, TResponse>(
  mutationConfig: MutationConfig<TRequest, TResponse>,
  options?: UseMutationOptions<TResponse, unknown, TRequest>
): UseMutationResult<TResponse, unknown, TRequest> {
  return useMutation<TResponse, unknown, TRequest>({
    mutationFn: (payload: TRequest) =>
      apiCall<TResponse, TRequest>({
        url: mutationConfig.url,
        method: mutationConfig.method,
        body: payload,
      }),
    ...options,
  });
}