var globalVar;
var globalVarCounter = 0;
(function($){

	$(function(){
		
		// exemple-1
		$('#example').print('salut: exemple du plugin Print! Ca marche!');
		
		// exemple-2
		$('#example-2').print('outerFn():');
		outerFn();
		
		// exemple-3 : Fermeture - fuite dans une variable global.
		$('#example-3').print('outerFn():');
		outerFnFuiteVariableGlobal();
		$('#example-3').print('globalVar:');
		globalVar();
		
		// exemple 4 : Fermeture- fuite par retour de fonction.
		$('#example-4').print('outerFn():');
		var fnRef = outerFnFuiteParReturnValue();
		$('#example-4').print('fnRef():')
		fnRef();
	
		// exemple-5 : variable locale de la fonction interne.
		$('#example-5').print('outerFn():');
		var fnRef = outerFnReferenceVariableLocaleFonctionInterne();
		fnRef();
		fnRef();
		var fnRef2 = outerFnReferenceVariableLocaleFonctionInterne();
		fnRef2();
		fnRef2();
		
		// exemple-6 : Portée de variable - partagée via variable globale.
		$('#example-6').print('outerFn():');
		var fnRef = outerFnReferenceVariableGlobale();
		fnRef();
		fnRef();
		var fnRef2 = outerFnReferenceVariableGlobale();
		fnRef2();
		fnRef2();
		
		// exemple-7 : variable locale de la fonction externe.
		var fnRef = outerFnReferenceVariableLocaleFonctionExterne();
		fnRef();
		fnRef();
		var fnRef2 = outerFnReferenceVariableLocaleFonctionExterne();
		fnRef2();
		fnRef2();
		
		// exemple-8 : interaction entre fermeture.
		var fnRef = outerFnInteractionFermeture();
		fnRef.fn1();
		fnRef.fn2();
		fnRef.fn1();
		var fnRef2 = outerFnInteractionFermeture();
		fnRef2.fn1();
		fnRef2.fn2();
		fnRef2.fn1();
		
	});
	
	function outerFn(){
		$('#example-2').print('Fonction externe');
		function innerFn(){
			$('#example-2').print('Fonction interne');
		}
		innerFn();
	}
	
	function outerFnFuiteVariableGlobal(){
		$('#example-3').print('Fonction externe');
		var innerFn = function(){
			$('#example-3').print('Fonction interne');
		}
		globalVar = innerFn;		
	}

	function outerFnFuiteParReturnValue(){
		$('#example-4').print('Fonction externe');
		function innerFn(){
			$('#example-4').print('Fonction interne');
		}
		return innerFn;		
	}	
	
	function outerFnReferenceVariableLocaleFonctionInterne() {
		$('#example-5').print('Fontion externe : variable locale dans la fonction interne');
		function innerFn() {
			var innerVar = 0;
			innerVar ++;
			$('#example-5').print('innerVar = ' + innerVar);
		}
		return innerFn;
	}
	
	function outerFnReferenceVariableGlobale(){
		$('#example-6').print('Fonction externe : référence à fonction globale.');
		function innerFn(){
			$('#example-6').print('fonction interne : globalVarCounter = ' + globalVarCounter++);
		}
		return innerFn;
	}
	
	function outerFnReferenceVariableLocaleFonctionExterne() {
		$('#example-7').print('Fonction externe : variable locale dans la fonction externe ');
		var outerVar = 0;
		function innerFn(){
			outerVar ++;
			$('#example-7').print('fonction interne : ' + outerVar)
		}
		return innerFn;
	}
	
	function outerFnInteractionFermeture() {
		var $example8 = $('#example-8');
		$example8.print('Fonction externe : interaction entre fermeture');
		var outerVar = 0;
		function innerFn1(){
			outerVar++;
			$example8.print('(1) - outerVar = ' + outerVar);
		}
		function innerFn2(){
			outerVar += 2;
			$example8.print('(2) - outerVar = ' + outerVar);
		}
		return {'fn1':innerFn1, 'fn2':innerFn2};
	}
	
})(jQuery);