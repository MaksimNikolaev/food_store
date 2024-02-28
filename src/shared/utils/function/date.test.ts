import { formateDate } from "./date";

describe('formateDate function', () => {
  it('should format minutes less than 60 correctly', () => {
    expect(formateDate(30)).toBe('30 min');
  });

  it('should format minutes equal to 60 correctly', () => {
    expect(formateDate(60)).toBe('1 hour 0 min');
  });

  it('should format minutes between 60 and 119 correctly', () => {
    expect(formateDate(90)).toBe('1 hour 30 min');
  });

  it('should format minutes between 120 and 179 correctly', () => {
    expect(formateDate(150)).toBe('2 hour 30 min');
  });

  it('should return "0 hour 0 min" for negative numeric input', () => {
    expect(formateDate(-50)).toBe('0 hour 0 min');
  });

  it('should return "1 hour 30 min" correctly', () => {
    expect(formateDate(90.5)).toBe('1 hour 30 min');
  });
});
