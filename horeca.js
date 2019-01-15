var input = 0;

var fris = 0;
var wijn = 0;
var bier = 0;

var aantalfris = 0;
var aantalwijn = 0;
var aantalbier = 0;

var frisprijs = 2.50;
var wijnprijs = 5.50;
var bierprijs = 3.50;

var kleineschalen = 0;
var groteschalen = 0;

var kleineschaalprijs = 2.50;
var groteschaalprijs = 4.50;

var keuze = prompt("wat wilt u drinken?");

while(keuze != 'stop'){
    if(keuze == "fris"){
        input = parseInt(prompt("Hoeveel " + keuze + " wilt u bestellen?"));
        aantalfris= aantalfris + input;

        var keuze = prompt("Wilt u nog wat bestellen?");
        console.log('aantalfris:'+ aantalfris);
    }
    else if(keuze == "wijn"){
        input = parseInt(prompt("Hoeveel " + keuze + " wilt u bestellen?"));
        aantalwijn= aantalwijn + input;

        var keuze = prompt("Wilt u nog wat bestellen?");
        console.log('aantalwijn:'+ aantalwijn);
    }
    else if(keuze == "bier"){
        input = parseInt(prompt("Hoeveel " + keuze + " wilt u bestellen?"));
        aantalbier= aantalbier + input;

        var keuze = prompt("Wilt u nog wat bestellen?");
        console.log('aantalbier:'+ aantalbier);
    }
    else if(keuze == "snack"){
        var snacks = prompt("Hoeveel snacks wilt u?","kies uit een schaal van '8' of '16'")

        if(snacks == "8"){
            var kleineschalen = kleineschalen+1;
            var keuze = prompt("Wilt u nog wat bestellen?");
            console.log('kleineschalen:'+ kleineschalen);
        }
        else if(snacks == "16"){
            var groteschalen = groteschalen+1;
            var keuze = prompt("Wilt u nog wat bestellen?");
            console.log('groteschalen:'+ groteschalen);
        }
        else{
            alert("dit is een ongeldige invoer");
            var snacks = prompt("Hoeveel snacks wilt u?","kies uit een schaal ban '8' of '16'")
        }
    }
    else{
        alert("Ik ben bang dat we geen "+ keuze+ " hebben...");
        var keuze = prompt("wat wilt u drinken?");
    }
}

var totalefrisprijs = aantalfris*frisprijs;
var totalewijnprijs = aantalwijn*wijnprijs;
var totalebierprijs = aantalbier*bierprijs;

var totalekleineschaalprijs = kleineschalen*kleineschaalprijs;
var totalegroteschaalprijs = groteschalen*groteschaalprijs;

console.log(totalefrisprijs);
console.log(totalewijnprijs);
console.log(totalebierprijs);
console.log(totalekleineschaalprijs);
console.log(totalegroteschaalprijs);

var totaalprijs = totalefrisprijs+totalewijnprijs+totalebierprijs+totalekleineschaalprijs+totalegroteschaalprijs;

if(aantalfris == 0){
    document.getElementById('fris').innerHTML='';
}else{
    document.getElementById('fris').innerHTML='fris: '+aantalfris+'x, &euro;'+totalefrisprijs+'.';
}
if(aantalwijn == 0){
    document.getElementById('wijn').innerHTML='';
}else{
    document.getElementById('wijn').innerHTML='wijn: '+aantalwijn+'x, &euro;'+totalewijnprijs+'.';
}
if(aantalbier == 0){
    document.getElementById('bier').innerHTML='';
}else{
    document.getElementById('bier').innerHTML='bier: '+aantalbier+'x, &euro;'+totalebierprijs+'.';
}

if(kleineschalen == 0){
    document.getElementById('kleineschaal').innerHTML='';
}else{
    document.getElementById('kleineschaal').innerHTML='Kleine totalekleineschaalprijs: '+kleineschalen+'x, &euro;'+totalekleineschaalprijs+'.';
}
if(groteschalen == 0){
    document.getElementById('groteschaal').innerHTML='<br>';
}else{
    document.getElementById('groteschaal').innerHTML='Grote totalekleineschaalprijs: '+groteschalen+'x, &euro;'+totalegroteschaalprijs+'.';
}




document.getElementById('totaalprijs').innerHTML='totaalprijs: &euro;'+totaalprijs+'.';