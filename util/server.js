#!/usr/bin/jjs -scripting
/*
 * Author: Bruno Borges
 * Twitter: @brunoborges
 */
with (new JavaImporter(java.net)) {
  function doWork(s) {
    print('User connected');
  }

  socket = new ServerSocket(9000);
  while (true) {
    s = socket.accept();
    r = new java.lang.Runnable() {
      run: function() {
        doWork(s);
      }
    };
    new java.lang.Thread(r).start();
  }
}
