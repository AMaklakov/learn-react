import React from 'react';
import {PokemonCard} from '../PokemonCard';
import {PokemonHolderBlock} from './styles';

export const PokemonHolder = (props) => {
	const {pokemons} = props;

	return (
		<PokemonHolderBlock>
			{pokemons.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)}
		</PokemonHolderBlock>
	)
};
