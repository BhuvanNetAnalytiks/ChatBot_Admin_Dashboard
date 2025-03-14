import { FetchResponse, fetchWithAuth } from "../fetchWithAuth";

export const fetchHrManagarDetails = async (): Promise<any> => {
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

export const fetchHiringManagarDetails = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/fetch-hiring-manager-details"
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const addHrManagerDetails = async (data: any): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/add-hr-manager",
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

export const addHiringManagerDetails = async (data: any): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/add-hiring-manager",
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

export const fetchHRManagerById = async (userId: number): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/get-hr-manager-by-id/${userId}`
    );

    if (response?.error) {
      throw new Error(response.error);
    }

    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const fetchHiringManagerById = async (userId: number): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/get-hiring-manager-by-id/${userId}`
    );

    if (response?.error) {
      throw new Error(response.error);
    }

    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const updateHRManager = async (
  userId: number,
  data: any
): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/update-hr-details-by-id/${userId}`,
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

export const updateHiringManager = async (
  userId: number,
  data: any
): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/update-hiring-manager-details-by-id/${userId}`,
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

export const fetchAdminDetails = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/get-admin-details`
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const updateCompanyAdmin = async (data: any): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/update-admin-details",
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

export const fetchOpenPositionsByCompany = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/get-positions-list-by-company`
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const getAlertsCountsByCompany = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/get-company-alerts-counts`
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const getPositionTitalsDetailsByCompany = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/get-positions-titles-by-company`
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const getProfileSourceAnalysis = async (
  position_id: number
): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/profile-source-analysis/${position_id}`
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCompanyProfileAndInterviewDetailsCompanyAdmin =
  async (): Promise<any> => {
    try {
      const response: FetchResponse<any> = await fetchWithAuth(
        `/api/company-profile`
      );
      if (response?.error) {
        throw new Error(response.error);
      }
      return response?.data;
    } catch (error) {
      throw error;
    }
  };

export const fetchCompanyPositionTitleDetailsByCompanyCompanyAdmin = async (
  days: number
): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/company-position-title-details/${days}`
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const fetchTestDetailsByDaysCompanyAdmin = async (
  days: number
): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/test-details-by-days/${days}`
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCompanyDetailsCountCompanyAdmin = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/company-details`
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const updateCompanyLogoByCompanyAdmin = async (
  data: any
): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/update-company-logo`,
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

export const fetchCompanySkillDistribution = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/skill-distribution`
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCompanyCandidatePipelineGrowth = async (
  position_id: number,
  year: number,
  month: number,
): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/candidate-pipeline/${position_id}/${year}/${month}`
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};
