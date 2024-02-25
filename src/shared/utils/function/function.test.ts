import { formateDate } from "./date";
import { formatTags } from "./functions";

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

describe('formatTags function', () => {
  it('should return an empty string if no tags are provided', () => {
    const tags = [''];
    expect(formatTags(tags)).toEqual('');
  });

  it('should handle empty tags correctly', () => {
    const tags = ['', 'react', '', 'vue', ''];
    expect(formatTags(tags)).toEqual('#react, #vue');
  });

  it('should format a single tag correctly', () => {
    const tags = ['javascript'];
    expect(formatTags(tags)).toEqual('#javascript');
  });

  it('should format multiple tags correctly separated by commas', () => {
    const tags = ['javascript', 'programming', 'coding'];
    expect(formatTags(tags)).toEqual('#javascript, #programming, #coding');
  });

  it('should handle tags with spaces correctly', () => {
    const tags = ['web development', 'front end', 'back end'];
    expect(formatTags(tags)).toEqual('#web development, #front end, #back end');
  });

  it('should handle tags with special characters correctly', () => {
    const tags = ['@openai', 'machine-learning', '#AI'];
    expect(formatTags(tags)).toEqual('#@openai, #machine-learning, ##AI');
  });  
});