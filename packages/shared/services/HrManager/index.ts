import { FetchResponse, fetchWithAuth } from "../fetchWithAuth";

export const fetchHrJobDetailsCompanyById = async (
  companyId: number
): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/fetch_details/${companyId}`
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const generateJD = async (data: any): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/generate_and_store_jd",
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

export const matchResume = async (data: any): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/match-resume",
      {
        method: "POST",
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

export const sendInterviewLink = async (data: any): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/send-interview-link",
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

export const fetchHrDetails = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/fetch-hr-details"
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const fetchHrPositionDetails = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/get-open-hr-positions"
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const getHRManagerProfile = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/hr-manager-profile",
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

export const updateHRManagerProfile = async (data: any): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/update-hr-manager-profile",
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

export const getHRManagerAlertCounts = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/get-hr-manager-alert-counts",
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

export const getHRManagerNewJDAlerts = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/get-hr-job-description-alerts",
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

export const getHRManagerPositionsList = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/get-positions-list-by-hr-manager",
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

export const getHRManagerJobDescriptionDetails = async (
  position_id: number
): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/hr-manager-get-jd-details/${position_id}`,
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

export const sendCorrectionForApproval = async (data: any): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/send-correction-for-approval",
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


export const getHRManagerAllJDAlerts = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/hr-all-job-description-alerts",
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


export const getApprovedNewPositionDetails = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/hr-manager-new-positions",
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

export const getAllApprovedNewPositionDetails = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/hr-manager-all-new-positions",
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
