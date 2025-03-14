import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginRequest } from './authService.common';
import { userRolesFromLogin } from "../../../../apps/web/src/components/common";

export const setToken = async (token: string) => {
  await AsyncStorage.setItem('token', token);
};

export const getToken = async (): Promise<string | null> => {
  return await AsyncStorage.getItem('token');
};

export const removeToken = async (): Promise<void> => {
  await AsyncStorage.removeItem('token');
};

export const setUserRole = async (usertype: number) => {
  const role = userRolesFromLogin(usertype);
  AsyncStorage.setItem("role", role);
};

export const getUserRole = () => {
  return AsyncStorage.getItem("role") || null;
};

export const removeUserRole = async () => {
  AsyncStorage.removeItem("role");
};

export const login = async (username: string, password: string): Promise<void> => {
  const data = await loginRequest(username, password);
  await setToken(data.token);
  await setUserRole(data.usertype);
};

export const logout = async (): Promise<void> => {
  await removeToken();
};