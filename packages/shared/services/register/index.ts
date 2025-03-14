export const registerUser = async (data: any): Promise<any> => {
  try {
    const response = await fetch("/auth/user_reg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Register failed");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
