/* Trier les options dans un Select */        
var $sortedOptions = $select.find('option').not(':first').sort(function(a,b) {
  console.log('a = ', a.text);
    console.log('b = ', b.text);
    if (a.text > b.text) return 1;
    else if (a.text < b.text) return -1;
    else return 0;
});

console.log('$sortedOptions', $sortedOptions);

$select.find('option').not(':first').remove();
$select.append($sortedOptions);
		
