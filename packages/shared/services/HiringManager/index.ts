import { FetchResponse, fetchWithAuth } from "../fetchWithAuth";

export const AddNewPosition = async (data: any): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/add-position",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response?.error) {
      throw new Error(response.error);
    }

    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const getHiringManagerProfile = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/hiring-manager-profile",
      {
        method: "GET",
      }
    );

    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const updateHiringManagerProfile = async (data: any): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/update-hiring-manager-profile",
      {
        method: "PATCH",
        body: data,
      }
    );
    if (response?.error) {
      throw new Error(response.error);
    }

    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const getHiringManagerOpenPosition = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/get-positions-list-by-hiring-manager`,
      {
        method: "GET",
      }
    );

    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const getHiringManagerOpenPositionJdDetails = async (
  position_id: number
): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/get-position-job-description-by-id/${position_id}`,
      {
        method: "GET",
      }
    );

    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const getJobDescriptionAlerts = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/get-job-description-alerts`,
      {
        method: "GET",
      }
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const getMringManagerAlertCards = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/get-hiring-manager-alert-counts`,
      {
        method: "GET",
      }
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const sendCommentApproveJd = async (data: any): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/send-comments-approve-jd",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response?.error) {
      throw new Error(response.error);
    }

    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const getHiringManagerAllJobList = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/get-all-job-list`,
      {
        method: "GET",
      }
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const getCandidateDetailsByPositionId = async (
  position_id: number
): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/get-candidate-details-by-position-id/${position_id}`,
      {
        method: "GET",
      }
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const getPositionTitles = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/get-position-titles-details`,
      {
        method: "GET",
      }
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const updateJobDescriptionByHiringMnager = async (
  data: any
): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/hiring-manager-edit-jd`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response?.error) {
      throw new Error(response.error);
    }

    return response?.data;
  } catch (error) {
    throw error;
  }
};
