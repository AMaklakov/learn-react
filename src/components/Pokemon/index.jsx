import React, { Component } from 'react';
import { PokemonService } from '../../services/pokemon.service';
import { Loader } from '../Loader';
import { Modal } from '../Modal/modal';
import { BackBtn, PokemonFullDescription } from './styles';

export class Pokemon extends Component {
	loader = Loader;

	constructor(props) {
		super(props);

		this.state = {
			pokemon: {},
			modal: { show: false },
		};
	}

	componentDidMount() {
		this.getPokemon();
	}

	getPokemon = async () => {
		this.loader.showSpinner(this);

		const { id } = this.props.match.params;

		try {
			// need a number
			const pokemonWrapper = await PokemonService.getPokemonById(+id);
			const pokemon = pokemonWrapper[0];

			this.setState({ pokemon });
		} catch (e) {
			this.setState({
				errorMessage: e.message,
				modal: { show: true },
			});
		} finally {
			this.loader.hideSpinner(this);
		}
	};

	back = () => {
		this.props.history.goBack();
	};

	callbackAfterError = () => this.getPokemon();

	render() {
		const {
			pokemon: { image, name, fullDescription },
			errorMessage,
			showSpinner,
			modal,
		} = this.state;

		return (
			<div>
				{this.loader.getLoader(showSpinner)}

				<BackBtn onClick={this.back}>&laquo; Back</BackBtn>
				<h1>{name}</h1>

				<PokemonFullDescription>
					<img src={image} alt={name} />
					<p className="fullDescription">{fullDescription}</p>
				</PokemonFullDescription>

				<Modal modal={modal} errorMessage={errorMessage} beforeClose={this.callbackAfterError} />
			</div>
		);
	}
}
