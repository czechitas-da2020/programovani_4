

class Car {

    constructor (){        
        this.name = "Moje Auto";
        this.pocetkol = 4;
        this.palivo = 0;
    }

    natankovat(pocetPaliva){
        this.palivo += pocetPaliva;
    }

}

let mojeAuto = new Car();

mojeAuto.natankovat(60);
console.log(mojeAuto.palivo);
