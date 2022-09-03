import {describe, expect, test} from '@jest/globals';
import {isPalindrome} from './module/solution'

test('palindrome', () => {
    expect(isPalindrome("abba")).toBe(true);
  });

test('palindrome false', () => {
    expect(isPalindrome("abca")).toBe(false);
  });