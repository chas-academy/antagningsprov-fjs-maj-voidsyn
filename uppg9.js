

function uppg9 (){
    function sort(arr) {
        for (let i =0; i < arr.length; i++) {
            const tal = arr[i];
            if (tal % 2 === 0) {
                console.log(tal, "jämt");
            } else {
                console.log(tal, "udda");
            }
        }
    }

    sort([3,8,5,12,7]);
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

  
}

module.exports = { uppg9 };