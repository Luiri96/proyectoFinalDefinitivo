let url = "https://pokeapi.co/api/v2/pokemon";

const createCard = async() => {
    try {
        const res = await fetch(url); //await es la promesa despues de hacer la asincrona
        const data = await res.json();
        data.results.forEach(async(pokemon) => {
            const response = await fetch(pokemon.url);
            const dataPokemon = await response.json();
            const [type1,type2]= dataPokemon.types.map(
                (typePokemon)=>typePokemon.type.name
            );
           

            const container = document.querySelector(".container");
            


            let pokecard = document.createElement('div');
            pokecard.className = 'pokecard';
            pokecard.innerHTML= `
            <div class = "headerCard">
            <p>${dataPokemon.name}</p>
            </div>

            <img class = "imgPoke" src = "${dataPokemon.sprites.other["home"].front_default}">
            <div>
            <p>${dataPokemon.base_experience}</p>
            <button>Buy</button>
            </div>


        
            `
            container.appendChild(pokecard);
            pokecard.setAttribute["type1",type1]
            pokecard.setAttribute["type2",type2]

        });
    } catch (error) {
        alert ("error en la url");
    }
}


createCard();

const filter = document.querySelector(`.navFilter`)
filter.forEach((filterType))


