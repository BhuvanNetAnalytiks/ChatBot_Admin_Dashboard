import Cookies from "js-cookie";
import { FetchResponse, fetchWithAuth } from "../fetchWithAuth";

export const loginRequest = async (
  username: string,
  password: string
): Promise<{ token: string; usertype: number, companyid: number }> => {
  const response = await fetch("/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      loginCred: btoa(JSON.stringify({ username, password })),
    }),
  });

  if (response.ok) {
    const responseJSON = await response.json();
    const {token, usertype, companyid} = responseJSON.data;
    Cookies.set('company_id', companyid)
    return { token, usertype, companyid };
  } else {
    throw new Error("Invalid login credentials");
  }
};

export const checkAuthenticationApi = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(`/api/check-auth`);
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};
