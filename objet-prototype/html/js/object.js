/** objet global. */
var obj1 = {
	attr:234, 
	str:"abcd", 
	fct : function(param){this.attr = this.attr + param;}
};

var obj2 = {
	attr:345,
	str:"ma chaine",
	fct:function(param){
		this.str = this.str + " " + param;
	}
};

var test = (function(){
	alert("test");
})();

function testObject() {
	// opération objet 1
	console.log("[OBJET 1]");
	console.log("attr = " + obj1.attr);
	console.log("exec fct : obj1.fct(1) " + obj1.fct(1));
	console.log("attr = " + obj1.attr);
	// opération objet 2
	console.log("OBJET 2");
	console.log("Ajout d'un attribut : obj2['stroke-width'] = '200'");
	obj2["stroke-width"] = "200";
	var x = "fct";
	console.log("Execution fonction via variable : x='fct' ==> obj2[x]('pain')" + obj2[x]('pain'));
	console.log("obj2.str = " + obj2.str)
};

//