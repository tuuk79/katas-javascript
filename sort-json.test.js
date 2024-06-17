function sortJson(json) {
    const entries = Object.entries(json);
    Object.keys(json).forEach(key => console.log(key));
}

fdescribe('sort-json', () => {
  it('should sort the keys of a JSON object', () => {
    const thing = {
      c: 1,
      b: 2,
      a: 3,
    };

    console.log('sorted object keys', Object.keys(thing).sort())

    // sort object keys
    // reduce to create a new object
    // iterate through sorted object keys and create entries by looking up value by sorted key

    const ordered = Object.keys(thing).sort().reduce(function (result, key) {
        console.log('result', result)
        result[key] = thing[key];
        return result;
    }, {});

    console.log(JSON.stringify(ordered));

    expect(ordered).toEqual({
      a: 3,
      b: 2,
      c: 1,
    });
  });
});