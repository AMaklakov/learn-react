import React, {Component} from 'react';
import {PokemonHolder} from '../PokemonHolder';
import SearchField from 'react-search-field';
import {Loader} from '../Loader';
import {getPokemons} from '../../db';
import {Modal} from '../Modal/modal';

export class Root extends Component {
	loader = Loader;

	constructor(props) {
		super(props);

		this.state = {
			pokemons: [],
			showSpinner: false,
			modal: {
				show: false
			}
		};
	}

	componentDidMount() {
		this.findPokemons();
	}

	findCallback = (val) => this.findPokemons(val);

	findCallbackAfterError = () => this.findPokemons();

	findPokemons = async (value) => {
		this.loader.showSpinner(this);

		try {
			const pokemons = await getPokemons(value);

			this.setState({
				pokemons: pokemons
			});
		} catch (e) {
			this.setState({
				errorMessage: e.message,
				modal: {show: true}
			});
		} finally {
			this.loader.hideSpinner(this);
		}
	};

	render() {
		const {pokemons, showSpinner, errorMessage, modal} = this.state;

		return (
			<div className="App">
				{this.loader.getLoader(showSpinner)}

				<SearchField
					placeholder='Start typing'
					onChange={this.findCallback}
				/>

				<PokemonHolder pokemons={pokemons}/>

				<Modal modal={modal} errorMessage={errorMessage} beforeClose={this.findCallbackAfterError}/>
			</div>
		);
	}
}
