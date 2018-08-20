// Tutaj umieść kod.
// var zmienna 
// alert wyswietl
// === porownanie czy wartosci dwoch zmiennych sa IDENTYCZNE
// function --- podanie nazwy funkcji

var div = document.getElementsByClassName("pic_1");
//--- Obiekt
var osoba =
    {
        imie: "Arek",
        nazwisko: "Włodarczyk",
	    pobierzInformacje: function () {
            return this.imie + " " + this.nazwisko;
        }
    };

//--- Klasy
function osoba(imie, nazwisko)		//klasa wyglada jak funkcja
{
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.toString = function () {
        return this.imie + " " + this.nazwisko;
    }

    var x = new osoba("Arek", "Włodarczyk");
    var y = new osoba("Arek", "Włodarczyk");
    var z = new osoba("Arek", "Włodarczyk");

    div.innerHTML = x + "<br>" + y + "<br>" + z;