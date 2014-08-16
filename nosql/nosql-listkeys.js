load("nosql.js");

with(nosql) {
  var batchSize = 10;
  var keys = store.storeKeysIterator(Direction.UNORDERED, batchSize);

  while (keys.hasNext()) {
    print(keys.next());
  }

  store.close();
}

