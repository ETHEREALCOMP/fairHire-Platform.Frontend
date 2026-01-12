// src/api/apiCall.ts
import { http } from "./httpClient";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface ApiCallConfig<TBody = unknown> {
  url: string;
  method: HttpMethod;
  body?: TBody;
}

export async function apiCall<TResponse, TBody = unknown>(
  config: ApiCallConfig<TBody>
): Promise<TResponse> {
  const { url, method, body } = config;

  const response = await http.request<TResponse>({
    url,
    method,
    data: body,
  });

  return response.data;
}
