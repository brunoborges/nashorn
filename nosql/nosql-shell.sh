#!/usr/bin/jjs -J-Djava.class.path=/home/bruno/Work/tools/oracle/nosql-kv-3.0.14/lib/kvclient.jar
var oracle = Packages.oracle;
var KVStore = oracle.kv.KVStore;
var KVStoreConfig = oracle.kv.KVStoreConfig;
var KVStoreFactory = oracle.kv.KVStoreFactory;
var Direction = oracle.kv.Direction;
  
var store = KVStoreFactory.getStore(new KVStoreConfig("kvstore", "localhost:5000"));

var batchSize = 10;
var keys = store.storeKeysIterator(Direction.UNORDERED, batchSize);

while (keys.hasNext()) {
  print(keys.next());
}

store.close();

