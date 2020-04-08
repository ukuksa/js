// czw 1
class Osoba{
    set imie(imie) { this._imie = imie}
    get imie() { return this._imie}
    set wiek(wiek) {this._wiek = wiek}
    get wiek() { return this._wiek}  
    Przedstaw() {
        return "Jestem " + this.imie + ",mam " + this.wiek + " lat";
    }
}
  
let person = new Osoba("Illia",640);
console.log(person.Przedstaw());

person.imie = "Wania";
console.log(person.Przedstaw());

//czw 2

class Pracownik extends Osoba {
    constructor(imie, wiek, praca) {
        super();
        super.imie = imie;
        super.wiek = wiek;
        this.praca = praca;
    }
    
    Przedstaw() {
        return super.Przedstaw() + " pracuje jako " + this.praca;
    }
}
let person2 = new Pracownik("Illia",640,"nauczyciel");
console.log(person2.Przedstaw());

person2.imie = "Ivan";
person2.wiek = 34;

console.log(person2.Przedstaw());

//czw 3
