// variables goblales
var myArray = [52, 97, 39, -22];
var myArray2 = [78, 79];

$(function(){

	var $infoTable1;
	var $infoTable2
	
	// affichage des infos du premier tableau.
	$infoTable1 = $('<div class="table1">Valeur du premier tableau : </div>');
	$infoTable1.append(myArray.join('|'));
	$('.tables').append($infoTable1);
	
	// affichage des infos du second tableau.
	$infoTable2 = $('<div class="table2">Valeur du second tableau : </div>');
	$infoTable2.append(myArray2.join('|'));
	$('.tables').append($infoTable2);
	
	// concatentation des tableaux.
	$('.concat').click(function(){
		var $result = $('.concat-result');
		if ($result.text().length == 0) {
			var newTab = myArray.concat(myArray2); // concatener les valeurs du tableau.
			$result.append(newTab.join('|'));		
		}
	});
	
});