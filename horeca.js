var aantalbier	 = 0;
var aantalwijn	 = 0;
var aantalfris	 = 0;
var bierprijs = 5;
var wijnprijs = 8;
var frisprijs = 2;
var drinkenprijs = 0;
var bitterballen = 0;
var bitterbalprijs = 1;
var iserbier = 0
var iserwijn = 0
var iserfris = 0
var zijnersnacks = 0


var drinken = prompt("Welke bestelling wilt u toevoegen?");


while(drinken != "stop"){																								//zolang je geen 'stop' invoert zal hij de volgende code uitvoeren
	if(drinken=="bier"){																								//als je bier besteld gaat die deze code uitvoeren
		var aantalbier = prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?");
		var drinken = iserbier("wat wilt u drinken?");
		iserbier = 1																									//als je bier besteld veranderd dit variabel naar 1 zodat de prijs genoteerd kan worden, als het niet besteld wordt zal hij het dus ook niet noteren.
	}
	else if(drinken=="wijn"){																							//als je wijn besteld gaat die deze code uitvoeren
		var aantalwijn = prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling?");
		var drinken = prompt("wat wilt u drinken?");
		iserwijn = 1																									//als je wijnbesteld veranderd dit variabel naar 1 zodat de prijs genoteerd kan worden, als het niet besteld wordt zal hij het dus ook niet noteren.
	}
	else if(drinken=="fris"){																							//als je fris besteld gaat die deze code uitvoeren
		var aantalfris = prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?");
		var drinken = prompt("wat wilt u drinken?");
		iserfris = 1																									//als je fris besteld veranderd dit variabel naar 1 zodat de prijs genoteerd kan worden, als het niet besteld wordt zal hij het dus ook niet noteren.
	}
	else if(drinken != "bier","wijn","fris"){																			//als je geen bier,fris of wijn besteld voert hij deze code uit
		alert("ik weet niet zeker of dat we dit hebben");
		var drinken = prompt("wat wilt u drinken?");
	}
	else{
		alert("oke");
	}
}

var totaalbierprijs = aantalbier*bierprijs																				//telt de bestelde drankjes + de prijs op
var totaalwijnprijs = aantalwijn*wijnprijs																				//telt de bestelde drankjes + de prijs op
var totaalfrisprijs = aantalfris*frisprijs																				//telt de bestelde drankjes + de prijs op

var totaalprijsdrinken 	= totaalbierprijs+totaalwijnprijs+totaalfrisprijs												//telt alle prijzen van het drinken bij elkaar op voor de totaalprijs van 't drinken

if(iserbier == 1) {
	document.write("<br>" + aantalbier + "x bier: €" + totaalbierprijs);												//als er bier is besteld gaat die de prijs opschrijven, als dit drankje (bier) niet is besteld noteert hij alleen een <br>
}else{
	document.write("<br>")
}
if(iserwijn == 1) {
	document.write("<br>" + aantalwijn + "x wijn: €" + totaalwijnprijs);												//als er wijn is besteld gaat die de prijs opschrijven, als dit drankje (wijn) niet is besteld noteert hij alleen een <br>
}else{
	document.write("<br>")
}
if(iserfris == 1) {
	document.write("<br>" + aantalfris + "x fris: €" + totaalfrisprijs);												//als er fris is besteld gaat die de prijs opschrijven, als dit drankje (fris) niet is besteld noteert hij alleen een <br>
}else{
	document.write("<br>")
}

document.write("<br><br>Totaal prijs voor het drinken: €" + totaalprijsdrinken);										//noteert de totaalprijs van alleen het drinken


var eten = prompt("Wilt u nog wat eten?");


while(eten != "stop"){																									//zolang je geen 'stop' invoert zal hij de volgende code uitvoeren
	if(eten == "snack"){
		var hoeveelsnacks = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?");
		if(hoeveelsnacks == "8"){																						//als je 8 bitterballen invoert gaat hij de volgende code uitvoeren
			var achtballen = prompt("hoeveel schalen van 8 bitterballen wilt u?");
			bitterballen = 8*achtballen+bitterballen
			var eten = prompt("Wilt u nog wat eten?");
			var zijnersnacks = 1																						//als je snacks besteld veranderd dit variabel naar 1, zodat die genoteerd kan worden.
		}
		else if(hoeveelsnacks == "16"){																					//als je 16 bitterballen invoert gaat hij de volgende code uitvoeren
			var zestienballen = prompt("hoeveel schalen van 16 bitterballen wilt u?");
			bitterballen = 16*zestienballen+bitterballen
			var eten = prompt("Wilt u nog wat eten?");
			var zijnersnacks = 1																						//als je snacks besteld veranderd dit variabel naar 1, zodat die genoteerd kan worden.
		}
		else{
			alert("u heeft mogelijk een ongeldig getal ingevoerd...");													//foutmelding
		}
	}else{
		alert("ik weet niet zeker of dat we dit hebben")																//foutmelding
		var eten = prompt("Welke bestelling wilt u toevoegen?");
	}
}




totaalbitterbalprijs = bitterballen*bitterbalprijs/4																	//berekent de prijs aan de hand van het aantal bestelde bitterballen
if(zijnersnacks == 1){																									//als er snacks zijn besteld gaat die deze code uitvoeren
document.write("<br><br><br>" + bitterballen + " bitterballen = "+ totaalbitterbalprijs + "euro");
}else{																													//als er geen snacks zijn besteld wordt er alleen een <br> genoteerd
	document.write("<br>")							
}
document.write("<br><br>Bruto: 	€" + (totaalprijsdrinken+totaalbitterbalprijs) )										//berekent + noteert de totaalrpijs van het drinken en de snacks