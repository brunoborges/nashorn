#!/usr/bin/jjs -fx
load("fx:web.js")
v=new WebView()
v.engine.load("http://java.com")
$STAGE.scene=new Scene(v,800,600)
$STAGE.show()
