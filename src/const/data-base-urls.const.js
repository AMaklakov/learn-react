export class DatabaseUrlConst {
	static BASE_URL = 'http://localhost:3001';

	static GET_POKEMONS = `${DatabaseUrlConst.BASE_URL}/pokemon`;

	static GET_POKEMON_BY_ID = `${DatabaseUrlConst.GET_POKEMONS}?id=`;

	static CREATE_POKEMON = DatabaseUrlConst.GET_POKEMONS;
}
