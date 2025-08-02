import { Sum } from "../Sum";

test("The sum function should return the sum of two inputs", () => {
  const result = Sum(4, 6);

  expect(result).toBe(10); //=> This statement is called Assertion. 
});
