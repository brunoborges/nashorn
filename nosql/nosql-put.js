if (arguments.length == 0) {
    print("Usage: jjs -cp lib/kvclient.jar nosql-put.js -- key value");
    exit(1);
}

load("nosql.js");

with(nosql) {
  var key = Key.createKey(arguments[0].toString());
  var value = Value.createValue(arguments[1].toString().getBytes("UTF-8"));

  store.put(key, value);
  store.close();

  print("key inserted/updated!");
}
