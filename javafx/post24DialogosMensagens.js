/*
 * Como executar: jjs -fx post24DialogosMensagens.js
 */
load("fx:base.js");
load("fx:graphics.js");
load("fx:controls.js");

btnInfo = new Button("Mostrar diálogo de informação");
btnErro = new Button("Mostrar diálogo de error");
btnAviso = new Button("Mostrar diálogo de aviso"); 

btnInfo.setOnAction(function(e) {
	dialogoInfo = new Alert(Alert.AlertType.INFORMATION);
	dialogoInfo.setTitle("Diálogo de informação");
	dialogoInfo.setHeaderText("Esse é o cabeçalho...");
	dialogoInfo.setContentText("Informação importante!");
	dialogoInfo.showAndWait();
});
btnErro.setOnAction(function(e) {
	dialogoErro = new Alert(Alert.AlertType.ERROR);
	dialogoErro.setTitle("Diálogo de Error");
	dialogoErro.setHeaderText("Esse é o cabeçalho...");
	dialogoErro.setContentText("UM ERROR!!! UM ERRO ACONTECEU!!! GEZUIS!");
	dialogoErro.showAndWait();
});
btnAviso.setOnAction(function(e) {
	dialogoAviso = new Alert(Alert.AlertType.WARNING);
	dialogoAviso.setTitle("Diálogo de Aviso");
	dialogoAviso.setHeaderText("Esse é o cabeçalho...");
	dialogoAviso.setContentText("AVISO IMPORTANTE! TENHA EM MENTE ISSO!");
	dialogoAviso.showAndWait();
}); 

raiz = new VBox(20);
raiz.setAlignment(Pos.CENTER);
raiz.getChildren().addAll(btnInfo, btnErro, btnAviso); 

$STAGE.title = "Diálogos de erro e informação";
$STAGE.scene = new Scene(raiz, 450, 200);
$STAGE.show();
