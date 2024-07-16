const listPokemon = document.querySelectorAll('.pokemon')




listPokemon.forEach(pokemon =>{
    pokemon.addEventListener('click', () =>{
        const pokemonShown = document.querySelector('.shown')
        pokemonShown.classList.remove('shown')

        const idSelectedPokemon = pokemon.attributes.id.value
        console.log(idSelectedPokemon);

        const idCardPokemonToBeShown = 'card-' + idSelectedPokemon
        const cardPokemonToBeShown = document.getElementById(idCardPokemonToBeShown)
        cardPokemonToBeShown.classList.add('shown')

        const listActivePokemon = document.querySelector('.active')
        listActivePokemon.classList.remove('active')

        const listPokemonSelected = document.getElementById(idSelectedPokemon)
        listPokemonSelected.classList.add('active')
    })
})