class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].depthFirstSearch(array);
    }
    return array;
  }
}

describe("depth first search", () => {
  it("should return [A]", () => {
    const A = new Node("A");
    const actual = A.depthFirstSearch([]);
    const expected = ["A"];
    expect(expected).toEqual(actual);
  });

  it("should return [A,B]", () => {
    const A = new Node("A");
    A.addChild("B");
    const actual = A.depthFirstSearch([]);
    const expected = ["A", "B"];
    expect(expected).toEqual(actual);
  });

  it("should return [A,B,C]", () => {
    const C = new Node("C");
    const B = new Node("B");
    B.children = [C];
    const A = new Node("A");
    A.children = [B];
    const actual = A.depthFirstSearch([]);
    const expected = ["A", "B", "C"];
    expect(expected).toEqual(actual);
  });

  it("should return [A,B,C,G]", () => {
    const C = new Node("C");
    const G = new Node("G");
    const B = new Node("B");
    B.children = [C, G];
    const A = new Node("A");
    A.children = [B];
    const actual = A.depthFirstSearch([]);
    const expected = ["A", "B", "C", "G"];
    expect(expected).toEqual(actual);
  });

  it("should return [A,B,C,G,D,E]", () => {
    const C = new Node("C");
    const G = new Node("G");
    const B = new Node("B");
    B.children = [C, G];
    const A = new Node("A");
    const E = new Node("E");
    const D = new Node("D");
    D.children = [E];
    A.children = [B, D];

    const actual = A.depthFirstSearch([]);
    const expected = ["A", "B", "C", "G", "D", "E"];
    expect(expected).toEqual(actual);
  });
});
