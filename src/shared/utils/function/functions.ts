import { SERVER_NOT_RESPONDING } from '../constants/constants';

//Получение текста ошибки
export const getErrorText = (error: unknown) => {
  if (typeof error === 'object' && error && 'data' in error && error.data) {
    return error.data;
  }
  return SERVER_NOT_RESPONDING;
};

export const checkResponse = (res: Response) => {
  return res.ok
    ? res.json()
    : res.json().then(err => {
        return Promise.reject(err);
      });
};

// Функция для преобразования массива тегов в строку с символами # и запятыми
export const formatTags = (tags: string[]): string => {
  return tags.filter(tag => tag !== '').map(tag => `#${tag}`).join(', ');
};
