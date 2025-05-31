

function uppg8(){
    const personer = [
        { name: "Anna", age: 22 },
        { name: "Johan", age: 35 },
        { name: "Sara", age: 40 },
        { name: "Kalle", age: 18 },
        { name: "Lisa", age: 31 }
    ];

    function skrivUtnamnOver30(arr) {
        for (const person of arr) {

            if (person.age > 30) {
                console.log(person.name);
            }
        }
            
    }

    skrivUtnamnOver30(personer);
// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument


}

module.exports = { uppg8 };