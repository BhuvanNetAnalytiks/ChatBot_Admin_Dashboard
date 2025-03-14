import { FetchResponse, fetchWithAuth } from "../fetchWithAuth";

export const fetchUserProfile = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(`/api/get-user-details`);
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};