if (arguments.length == 0) {
    print("Usage: jjs -cp lib/kvclient.jar nosql-get.js -- key");
    exit(1);
}

load("nosql.js");

with(nosql) {
  var key = Key.createKey(arguments[0].toString());
  var valueVersion = store.get(key);

  print(valueVersion);
  print('ACTUAL VALUE:' + new java.lang.String(valueVersion.getValue().getValue(), "UTF-8"));

  store.close();
}
