import { SERVER_NOT_RESPONDING } from '../constants/constants';

//Получение текста ошибки
export const getErrorText = (error: unknown) => {
  if (typeof error === 'object' && error !== null) {
    if ('message' in error) {
      return (error as Error).message;
    } else if (
      'data' in error &&
      typeof (error as any).data === 'object' &&
      (error as any).data !== null &&
      'message' in (error as any).data
    ) {
      return (error as any).data.message;
    }
    if ('data' in error && typeof (error as any).data === 'string') {
      return error.data;
    }
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
  return tags
    .filter(tag => tag !== '')
    .map(tag => `#${tag}`)
    .join(', ');
};
