#!/usr/bin/jjs -J-Dnashorn.args="-scripting"
/*
 * Author: Bruno Borges
 * Twitter: @brunoborges
 */
if (arguments.length === 0 || arguments[0] === '-h') {
   print('Usage:');
   print(' $> ./base64.js -- text');
   exit(1);
}

var Base64 = Packages.java.util.Base64;
var String = Packages.java.lang.String;
print('Base64: ' + new String(Base64.getEncoder().encode(arguments[0].getBytes()), "UTF-8"));
