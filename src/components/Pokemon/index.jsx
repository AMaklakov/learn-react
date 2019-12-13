import React, { useEffect, useState } from 'react';
import { PokemonService } from '../../services/pokemon.service';
import { Loader } from '../Loader';
import { Modal } from '../Modal/modal';
import { BackBtn, PokemonFullDescription } from './styles';

const getPokemonById = async id => {
	const pokemonWrapper = await PokemonService.getPokemonById(+id);
	return pokemonWrapper[0];
};

export const Pokemon = props => {
	const [showSpinner, setShowSpinner] = useState(true);

	const [pokemon, setPokemon] = useState({});
	const [modal, setModal] = useState({});
	const [errorMessage, setErrorMessage] = useState();

	const back = () => props.history.goBack();

	const fetchPokemon = () => {
		setShowSpinner(true);
		const { id } = props.match.params;

		try {
			// need a number
			getPokemonById(id).then(res => setPokemon(res));
		} catch (e) {
			setErrorMessage(e.message);
			setModal({ show: true });
		} finally {
			console.log('show false');
			setShowSpinner(false);
		}
	};

	useEffect(() => fetchPokemon(), []);

	return (
		<div>
			<Loader needShow={showSpinner}></Loader>

			<BackBtn onClick={back}>&laquo; Back</BackBtn>
			<h1>{pokemon.name}</h1>

			<PokemonFullDescription>
				<img src={pokemon.image} alt={pokemon.name} />
				<p className="fullDescription">{pokemon.fullDescription}</p>
			</PokemonFullDescription>

			<Modal modal={modal} errorMessage={errorMessage} beforeClose={fetchPokemon} />
		</div>
	);
};
