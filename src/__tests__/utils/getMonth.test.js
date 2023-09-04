import { getMonth } from "../../utils/getMonth.js";

describe("tests for getMonth function", () => {
    const jan = 1;
    const sep = 9;
    const und = 100;
    const und2 = 'abc';
  
    it("should operate correctly with month numbers or other data", () => {
      expect(getMonth(jan)).toBe('январь');
      expect(getMonth(sep)).toBe('сентябрь');
      expect(getMonth(und)).toBe('неизвестно');
      expect(getMonth(und2)).toBe('неизвестно');
    });
  });