function oblicz(){
    var k = document.getElementById("k").checked;
    var m = document.getElementById("m").checked;

    var wiek = document.getElementById("wiek").value ;
    wiek = parseInt(wiek);

    var waga = document.getElementById("waga").value ;
    waga = parseInt(waga);

    var wzrost = document.getElementById("wzrost").value ;
    wzrost = parseInt(wzrost);

    var aktywnosc = document.getElementById("aktywnosc").value;

    if(m){
       var bmr = (9.99 * waga) + (6.25*wzrost) - (4.92 *wiek) +5;
    }
    if(k){
        var bmr = (9.99 * waga) + (6.25*wzrost) - (4.92 *wiek) -161;
     }
     document.getElementById("wynik").innerHTML = "BMR: " + bmr.toFixed(2) + " kcal/dzień" ;

     if (aktywnosc=="1"){
        cpm=bmr*1.2;
     }
     else if(aktywnosc=="2"){
        cpm=bmr*1.35;
     }
     else if(aktywnosc=="3"){
      cpm=bmr*1.55;
   }
   else if(aktywnosc=="4"){
      cpm=bmr*1.75;
   }
   else if(aktywnosc=="5"){
      cpm=bmr*2.05;
   }

  document.getElementById("wynik2").innerHTML = "CPM: " + cpm.toFixed(2) + " kcal/dzień" ; 
}