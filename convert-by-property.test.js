function convertByProperty(arr, field) {
  // want this to return
  // {
  //   1: { name: "steve", age: 40 },
  //   2: { name: "yoo", age: 3 }
  // };

  arr.map(x => console.log(`{ age: ${x.age}, name:  ${x.name} }`));

  return null;
}

describe("convert by property", () => {
  it("should call convertByProperty", () => {
    const arr = [
      {
        id: 1,
        name: "steve",
        age: 40
      },
      {
        id: 2,
        name: "yoo",
        age: 3
      }
    ];

    const field = "id";

    const expected = {
      1: { name: "steve", age: 40 },
      2: { name: "yoo", age: 3 }
    };

    const result = convertByProperty(arr, field);

    expect(result).toEqual(expected);
  });
});
