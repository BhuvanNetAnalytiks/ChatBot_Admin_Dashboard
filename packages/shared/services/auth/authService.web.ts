import Cookies from "js-cookie";
import { checkAuthenticationApi, loginRequest } from "./authService.common";
import { userRolesFromLogin } from "../../../../apps/web/src/components/common";

export const setToken = async (token: string) => {
  // Cookies.set("token", token);
  localStorage.setItem("token", token);
};

export const getToken = async (): Promise<string | null> => {
  // const token = Cookies.get("token") || null;
  const token = localStorage.getItem("token");
  return token;
};

export const removeToken = async (): Promise<void> => {
  // Cookies.remove("token");
  localStorage.removeItem("token");
};

export const setUserRole = async (usertype: number) => {
  const role = userRolesFromLogin(usertype);
  Cookies.set("role", role);
};

export const getUserRole = () => {
  return Cookies.get("role") || null;
};

export const removeUserRole = async () => {
  Cookies.remove("role");
};

export const login = async (
  username: string,
  password: string
): Promise<void> => {
  const data = await loginRequest(username, password);
  await setToken(data.token);
  await setUserRole(data.usertype);
};

export const logout = async (): Promise<void> => {
  await removeToken();
  await removeUserRole();
};

export const checkAuth = async (): Promise<void> => {
  const data = await checkAuthenticationApi();
  return data;
};
