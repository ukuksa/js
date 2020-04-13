class Osoba{
  
    set Imie(name) { 
        if(name[0] === name[0].toUpperCase()) {
           
            this.imie = name;
        }
        else{
            this.imie = Osoba.formatujImie(name);
        }
        }
    static formatujImie(name) {
        return name.replace(name[0], name[0].toUpperCase());
    }
    get Imie() { return this.imie;}
    set Wiek(age) {
        this.wiek = age;
        }
    get Wiek() { return this.wiek;}  
    Przedstaw() {
        return "Jestem " + this.imie + ",mam " + this.wiek + " lat";
    }
}
  
let person = new Osoba();
person.Imie = "ilia";
let age = 40;
try{
    if(Number.isInteger(age)) {
        console.log("Yes");
        try{
            if(age > 0){
                person.Wiek = age;
            }
            else {
                throw new RangeError();
            }
        }catch(err2){
            console.log("Musisz jeszcze czekać " + age*(-1) + " lat i tylko wtedy zmozesz wpisac sie");
        }
        
    }
    else {
        console.log("no");
        throw new TypeError();
    }
}catch(err){
    console.log("Trzaba podać liczbu");
    
}

console.log(person.Przedstaw());

person.Imie = "wania";
console.log(person.Przedstaw());



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
let person2 = new Pracownik("illia",640,"nauczyciel");
console.log(person2.Przedstaw());

person2.Imie = "ivan";
age = 34;
try{
    if(Number.isInteger(age)) {
        console.log("Yes");
        try{
            if(age > 0){
                person2.Wiek = age;
            }
            else {
                throw new RangeError();
            }
        }catch(err2){
            console.log("Musisz jeszcze czekać " + age*(-1) + " lat i tylko wtedy zmozesz wpisac sie");
        }
        
    }
    else {
        console.log("no");
        throw new TypeError();
    }
}catch(err){
    console.log("Trzaba podać liczbu");
    
}
console.log(person2.Przedstaw());



