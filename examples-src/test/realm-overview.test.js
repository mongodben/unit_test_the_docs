const Realm = require("realm");

const Dog = {
  name: "Dog",
  properties: {
    name: "string",
    age: "int",
    type: "string",
  },
};

describe("Local Realm", () => {
  let realm;
  const config = {
    schema: [Dog],
  };
  beforeEach(async () => {
    // open a local realm with the 'Dog' schema
    realm = await Realm.open(config);
  });
  afterEach(() => {
    // clean up
    !realm.isClosed && realm.close();
    Realm.deleteFile(config);
  });
  test("Open Realm", async () => {
    expect(realm.isClosed).toBe(false);
  });
  test("Create data", () => {
    realm.write(() => {
      realm.create("Dog", { name: "Jasper", age: 6, type: "Golden Retriever" });
      realm.create("Dog", { name: "Maggie", age: 10, type: "Collie" });
    });

    expect(dogs.length).toBe(2);
    expect(jasper.age).toBe(6);
  });
});
