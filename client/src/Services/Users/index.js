import { fetchUrl } from "../../Utils/fetch";

export const getListUsers = async () => {
  const url = process.env.REACT_APP_BASE_URL + '/api/v1/user/listUsers';
  const headers = new Headers();
  headers.append('Content-type', 'application/json');
  headers.append('auth-token', localStorage.token);

  const requestOptions = {
    method: 'GET', headers, redirect: 'follow',
  };
  return await fetchUrl(url, requestOptions);
};