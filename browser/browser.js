/*
 * Author: Bruno Borges
 * Twitter: @brunoborges
 */
if (arguments.length === 0 || arguments[0] === '-h') {
   print('Usage:');
<<<<<<< HEAD
   print(' $> jjs -fx browser.js -- http://www.google.com');
=======
   print(' $> jjs browser.js -- http://www.google.com');
>>>>>>> 87b5b32912120b31b52f987514216864b9471d3c
   exit(1);
}

var WebView   = javafx.scene.web.WebView;
var StackPane = javafx.scene.layout.StackPane;
var Scene     = javafx.scene.Scene;
<<<<<<< HEAD
var url       = arguments[0];
function start(stage) {
    var browser = new WebView();
    browser.getEngine().load(url);
=======
function start(stage) {
    var browser = new WebView();
    browser.getEngine().load(arguments[0]);
>>>>>>> 87b5b32912120b31b52f987514216864b9471d3c
    var root = new StackPane();
    root.children.add(browser);
    stage.scene = new Scene(root, 1080, 800);
    stage.title = "browser.js";
    stage.show();
}

