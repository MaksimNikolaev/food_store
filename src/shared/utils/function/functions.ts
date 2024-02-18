import { SERVER_NOT_RESPONDING } from '../constants/constants';

//Получение текста ошибки
export function getErrorText(error: unknown) {
  if (typeof error === 'object' && error && 'data' in error && error.data) {
    return error.data;
  }
  return SERVER_NOT_RESPONDING;
}

export default function checkResponse(res: Response) {
  return res.ok
    ? res.json()
    : res.json().then(err => {
        return Promise.reject(err);
      });
}
