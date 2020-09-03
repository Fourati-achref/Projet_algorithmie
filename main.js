console.log("Salut, bienvenue dans ma super pyramide ! Combien d'etages veux-tu ?");  
var elet = prompt("Combien d'etages veux-tu ?");

var ch ;
var che;
var k;
var j;
var m;
var i;

var etage = parseInt(elet);
if (etage>25){
	console.log("nombre d'etage est supérieur à 25 !!!!");
}
else{
	console.log("voici la pyramide");
	
	l=etage-1;
	che="";
	ch="#";
	for (j = 0; j < l; j++){
			che=che+" ";
		} 
	console.log(che+ch);

	
	
	l=l-1;

	for (i = 2 ; i < etage+1 ; i++){

		
		k=l;
		che="";
		
		for (j = 0; j < k; j++){
			che=che+" ";
		}
		
		

		
		ch=ch+"##";
		

		

		console.log(che+ch);
		l=l-1;
}
}
