function calc(input) {
  let numbers = input.split("+");
  const converted = numbers.map((x) => parseInt(x.trim()));
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return converted.reduce(reducer).toString();
}

describe("string calculator", () => {
  it("should be 3 if given 1+2", () => {
    const input = "1+2";
    const result = "3";
    expect(calc(input)).toBe(result);
  });

  it("should be 14 if given 12 +2", () => {
    const input = "12 +2";
    const result = "14";
    expect(calc(input)).toBe(result);
  });

  it("should be 30 if given 10 +10  +  10", () => {
    const input = "10+10+10";
    const result = "30";
    expect(calc(input)).toBe(result);
  });
});
