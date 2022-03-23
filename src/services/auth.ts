import axios from 'axios';

const baseUrl = 'https://mistho-assignment-api.herokuapp.com/api';

const accessTokenKey = 'access_token';

const storeAccessToken = (accessToken: string) => localStorage.setItem(accessTokenKey, accessToken);
const getAccessToken = () => localStorage.getItem(accessTokenKey);

interface AuthApiResponse {
  user: {
    email: string;
  };
  session: {
    access_token: string;
  };
}

const signIn = async (email: string, password: string) => {
  const { data } = await axios.post<AuthApiResponse>(`${baseUrl}/auth/login`, { email, password });
  storeAccessToken(data.session.access_token);
  return data;
};

const signUp = async (email: string, password: string) => {
  const { data } = await axios.post<AuthApiResponse>(`${baseUrl}/auth/register`, { email, password });
  storeAccessToken(data.session.access_token);
  return data;
};

const signOut = () => {
  localStorage.removeItem(accessTokenKey);
  location.reload();
};

const isSignedIn = () => (getAccessToken() ? true : false);

const authHeader = () => ({ Authorization: `Bearer ${getAccessToken()}` });

export const authService = {
  signIn,
  signUp,
  signOut,
  isSignedIn,
  authHeader,
};
