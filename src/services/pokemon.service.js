import { DatabaseUrlConst } from '../const/data-base-urls.const';

export class PokemonService {
	static createDelayOrError() {
		if (Math.random() < 0.1) {
			return Promise.reject(`Backend error, try again`);
		}

		const timeToWait = Math.floor(250 + Math.random() * (1000 - 250));

		return new Promise(resolve => setTimeout(() => resolve(), timeToWait));
	}

	/**
	 * We need to decide: do we want to get the data:
	 * chance of it should be 90%.
	 *
	 * If we want to, we shout get data with random delay
	 */
	static async getPokemons(filter) {
		await PokemonService.createDelayOrError();

		filter = (filter && filter.toLowerCase()) || '';
		const link = filter ? DatabaseUrlConst.GET_POKEMONS + `?name=${filter}` : DatabaseUrlConst.GET_POKEMONS;

		const res = await fetch(link);
		return await res.json();
	}

	static async getPokemonById(id) {
		await PokemonService.createDelayOrError();

		if (id === undefined || id === null || id === '') {
			throw new Error('No id in request');
		}

		if (typeof id !== 'number') {
			throw new Error('Id must be number');
		}

		const res = await fetch(DatabaseUrlConst.GET_POKEMON_BY_ID + id);
		return await res.json();
	}
}
