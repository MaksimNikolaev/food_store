/**
 * Форматирует заданную длительность в минутах в удобно читаемую строку
 *
 * @param {number} minutes - Длительность в минутах для форматирования
 * @returns {string} Строка, представляющая отформатированную длительность
 */

/* P.S.Паттерн Стратегия В этом случае мы имеем два возможных способа форматирования данных 
в зависимости от входного параметра минут. */
export const formateDate = (minutes: number) => {
  if (minutes < 60) {
    return minutes + ' min';
  } else {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return hours + ' hour ' + remainingMinutes + ' min';
  }
};
