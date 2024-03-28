import { formatTags } from "./functions";

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