#!/usr/bin/jjs -fx -scripting
load("fx:web.js")
var wv = new WebView()
wv.engine.load("http://java.com")
$STAGE.scene = new Scene(wv, 800, 600)
$STAGE.show()
