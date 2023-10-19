import { fetchUrl } from "../../Utils/fetch";

export const userLogin = async ({ email, password }) => {
  const url = process.env.REACT_APP_BASE_URL + '/api/v1/user/login';
  const headers = new Headers();
  headers.append('Content-type', 'application/json');

  const body = JSON.stringify({ userEmail: email, password });
  const requestOptions = {
    method: 'POST', headers, body, redirect: 'follow',
  };
  return await fetchUrl(url, requestOptions);
};

export const createUserAccount = async ({ email, password, name }) => {
  const url = process.env.REACT_APP_BASE_URL + '/api/v1/user/signup';
  const headers = new Headers();
  headers.append('Content-type', 'application/json');

  const body = JSON.stringify({ userEmail: email, password, name });
  const requestOptions = {
    method: 'POST', headers, body, redirect: 'follow',
  };
  return await fetchUrl(url, requestOptions);
};