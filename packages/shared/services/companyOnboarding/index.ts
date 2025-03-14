import { FetchResponse, fetchWithAuth } from "../fetchWithAuth";

export const fetchCompanyDetails = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/get-company-details"
    );

    if (response?.error) {
      throw new Error(response.error);
    }

    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCompanyById = async (companyId: number): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/get-company-by-id/${companyId}`
    );

    if (response?.error) {
      throw new Error(response.error);
    }

    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const updateCompanyDetails = async (
  companyId: number,
  companyData: any
): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/update-company/${companyId}`,
      {
        method: "PATCH",
        body: companyData,
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

export const submitCompanyOnboarding = async (
  companyData: any
): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/company-onboarding",
      {
        method: "POST",
        body: companyData,
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

export const fetchSuperAdminDetails = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/get-super-admin-details`
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const updateSuperCompanyAdmin = async (data: any): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      "/api/update-super-admin-details",
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

export const fetchIndustryTypes = async (): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/get-industry-type`
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const DeleteCompanyDetails = async (companyId: number): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/delete-company/${companyId}`,
      {
        method: "DELETE",
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

export const fetchCompanyProfileAndInterviewDetails = async (
  company_id: number
): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/company-profile-by-id/${company_id}`
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCompanyPositionTitleDetailsByCompany = async (
  days: number,
  company_id: number
): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/company-position-title-details-by-id/${days}/${company_id}`
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const fetchTestDetailsByDaysAndCompanyId = async (
  days: number,
  company_id: number
): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/test-details-by-days-by-id/${days}/${company_id}`
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCompanyDetailsCountByCompanyId = async (
  company_id: number
): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/company-details-by-id/${company_id}`
    );
    if (response?.error) {
      throw new Error(response.error);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const updateCompanyLogoBySuperAdmin = async (
  data: any,
  company_id: number
): Promise<any> => {
  try {
    const response: FetchResponse<any> = await fetchWithAuth(
      `/api/update-company-logo-by-id/${company_id}`,
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
