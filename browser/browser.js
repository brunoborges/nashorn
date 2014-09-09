/*
 * Author: Bruno Borges
 * Twitter: @brunoborges
 */
if (arguments.length === 0 || arguments[0] === '-h') {
   print('Usage:');
   print(' $> jjs browser.js -- http://www.google.com');
   exit(1);
}

var WebView   = javafx.scene.web.WebView;
var StackPane = javafx.scene.layout.StackPane;
var Scene     = javafx.scene.Scene;
function start(stage) {
    var browser = new WebView();
    browser.getEngine().load(arguments[0]);
    var root = new StackPane();
    root.children.add(browser);
    stage.scene = new Scene(root, 1080, 800);
    stage.title = "browser.js";
    stage.show();
}

