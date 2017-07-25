var Classe = (function(){
	
	var variable1;
	
	var myPrivateFunction = function(){
		
	}
	
	this.getVariable1 = function(){
		return this.variable1;
	}
	this.setVariable1 = function(param){
		this.variable1 = param;
	}
	

});

// création d'objet.
var firstInstance = new Classe();
// recuperaiton de la fonction.
var secondInstance = Classe;

function testClasse(){
	console.log("firstInstance = " + firstInstance);
	console.log("function Classe = " + secondInstance);
    firstInstance.setVariable1("toto");
    console.log("firstInstance['variable1'] = " + firstInstance.getVariable1());
}
