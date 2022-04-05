realm.write(() => {
  realm.create("Dog", { name: "Jasper", age: 6, type: "Golden Retriever" });
  realm.create("Dog", { name: "Maggie", age: 10, type: "Collie" });
});
