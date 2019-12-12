const POKEMONS = require('./pokemons');

export function getPokemons(filter) {
	return new Promise(resolve => {
		filter = (filter && filter.toLowerCase()) || '';

		if (Math.random() < 0.1) {
			throw new Error(`Backend error, try again`);
		}

		setTimeout(() => {
			const currentPokemons = POKEMONS.filter(({ name }) => name.toLowerCase().includes(filter)).map(item => ({
				...item,
			}));

			resolve(currentPokemons);
		}, Math.floor(250 + Math.random() * (1000 - 250)));
	});
}

export function getPokemonById(id) {
	return new Promise(resolve => {
		if (id === undefined || id === null || id === '') {
			throw new Error('No id in request');
		}

		if (typeof id !== 'number') {
			throw new Error('Id must be number');
		}

		if (Math.random() < 0.1) {
			throw new Error(`Backend error, try again`);
		}

		setTimeout(() => {
			const currentPokemon = POKEMONS.find(pokemon => pokemon.id === id);

			resolve(currentPokemon);
		}, Math.floor(250 + Math.random() * (1000 - 250)));
	});
}
