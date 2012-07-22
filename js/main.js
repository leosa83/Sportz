/* Author:

*/
var _model = new model();
createTestData(_model);
var _mainController = new MainController(_model);
var _mainView = new mainView($("#mainView"),_model,"");
	
$(document).ready(function(){

	_mainView.initiate();
	_mainView.update();
	debugger;
	var match1= new SoccerEvent();
	alert(match1.date+ "  " + match1.id+"  "+match1.description);
	
	
	
	
});
