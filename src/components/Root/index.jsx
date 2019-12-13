import React, { Component } from 'react';
import SearchField from 'react-search-field';
import { PokemonService } from '../../services/pokemon.service';
import { Loader } from '../Loader';
import { Modal } from '../Modal/modal';
import { PokemonHolder } from '../PokemonHolder';

export class Root extends Component {
	loader = Loader;

	constructor(props) {
		super(props);

		this.state = {
			pokemons: [],
			showSpinner: false,
			modal: {
				show: false,
			},
		};
	}

	componentDidMount() {
		this.findPokemons();
	}

	findCallback = val => this.findPokemons(val);

	findCallbackAfterError = () => this.findPokemons();

	findPokemons = async value => {
		this.setState({ showSpinner: true });

		try {
			const pokemons = await PokemonService.getPokemons(value);

			this.setState({ pokemons });
		} catch (e) {
			this.setState({
				errorMessage: e.message,
				modal: { show: true },
			});
		} finally {
			this.setState({ showSpinner: false });
		}
	};

	render() {
		const { pokemons, showSpinner, errorMessage, modal } = this.state;

		return (
			<div className="App">
				<Loader needShow={showSpinner}></Loader>

				<SearchField placeholder="Start typing" onChange={this.findCallback} />

				<PokemonHolder pokemons={pokemons} />

				<Modal modal={modal} errorMessage={errorMessage} beforeClose={this.findCallbackAfterError} />
			</div>
		);
	}
}
