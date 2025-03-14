import { getToken, logout } from "./auth/authService.web";

export type FetchOptions = {
  method?: string;
  headers?: Record<string, string>;
  body?: string | FormData | null;
};

export type FetchResponse<T> = {
  data?: T;
  error?: string;
};

export const fetchWithAuth = async <T>(
  url: string,
  options: FetchOptions = {}
): Promise<T | FetchResponse<T>> => {
  const token = await getToken();

  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    ...options.headers,
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (response.status === 401) {
      localStorage.clear();
      window.location.href = "/login";
    }

    if (!response.ok) {
      const errorData = await response.json();
      return { error: errorData.message || "An error occurred" };
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    console.error("Fetch error:", error);
    return { error: "Network error or API call failed" };
  }
};
