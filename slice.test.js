const { it, expect } = require("@jest/globals");
const { mySlice } = require("./slice");

describe("tests the slice function", () => {
  it("should return a *new* array", () => {
    let testArray = [1, 2, 3, 4];
    expect(mySlice(testArray, 1, 2)).toBe([2, 3]);
    expect(testArray).toBe([1, 2, 3, 4]);
  });
//   it("should startIndex should default to 0.", () => {
//     let array = [1, 2, 3, 4, 5, 6];
//     expect(mySlice(array,7)).toBe([]);
//   });
  it("should throw an error if some index out of the range", () => {
    let array = [1, 2, 3, 4, 5, 6];
    expect(mySlice(array, 6, 7)).toThrow(new Error());
  });
  it("should throw an error if startIndex bigger from endIndex", () => {
    let array = [1, 2, 3, 4, 5, 6];
    expect(mySlice(array, 5, 3)).toThrow(new Error());
  });
  it("should count negative indexes from the end", () => {
    let testArray = [1, 2, 3, 4];
    expect(mySlice(testArray, 1, -1)).toBe([2, 3]);
  })
});
