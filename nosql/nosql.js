var oracle = Packages.oracle;
var nosql = new JavaImporter(oracle.kv);

var KVStore = oracle.kv.KVStore;
var KVStoreConfig = oracle.kv.KVStoreConfig;
var KVStoreFactory = oracle.kv.KVStoreFactory;
  
var store = KVStoreFactory.getStore(new KVStoreConfig("kvstore", "localhost:5000"));
