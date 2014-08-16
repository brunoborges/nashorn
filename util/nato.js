/*
 * Author: Bruno Borges
 * Twitter: @brunoborges
 */
if (arguments.length === 0 || arguments[0] === '-h') {
   print('Usage:');
   print(' $> jjs nato.js -- words');
   exit(1);
}
var Collectors=java.util.stream.Collectors;
var nw=java.util.Arrays.asList(["Alpha","Bravo","Charlie","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliet","Kilo", "Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-ray","Yankie","Zulu"]);
var ni=nw.stream().collect(Collectors.toMap(function(w)new java.lang.Character(w.charAt(0)),function (w)w));
for each (var aWord in arguments) {
   printNato(aWord);
   print('---------');
}
function wordToNato(word) {
   var chars=word.toUpperCase().toCharArray();
   var nato = new java.util.ArrayList();
   for each (var c in chars) {
      if (java.lang.Character.isDigit(c)) nato.add(java.lang.Character.toString(c));
      else nato.add(ni.get(new java.lang.Character(c)));
   }
   return nato.stream().collect(Collectors.joining(" "));
}
function printNato(word) {
   print('Word: '+ word);
   print('NATO: '+ wordToNato(word));
}