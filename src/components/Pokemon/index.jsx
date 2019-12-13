import React, { useEffect, useState } from 'react';
import { PokemonService } from '../../services/pokemon.service';
import { Loader } from '../Loader';
import { Modal } from '../Modal';
import { BackBtn, PokemonFullDescription } from './styles';

const getPokemonById = id => {
	return PokemonService.getPokemonById(+id).then(pokemonWrapper => pokemonWrapper[0]);
};

export const Pokemon = props => {
	const [showSpinner, setShowSpinner] = useState(true);

	const [pokemon, setPokemon] = useState({});
	const [showModal, setShowModal] = useState({});
	const [errorMessage, setErrorMessage] = useState();

	const back = () => props.history.goBack();

	const fetchPokemon = () => {
		const { id } = props.match.params;

		setShowSpinner(true);
		setShowModal(false);

		getPokemonById(id)
			.then(res => setPokemon(res))
			.catch(e => {
				setErrorMessage(e);
				setShowModal(true);
			})
			.finally(() => setShowSpinner(false));
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

			<Modal modal={{ show: showModal }} errorMessage={errorMessage} beforeClose={fetchPokemon} />
		</div>
	);
};
