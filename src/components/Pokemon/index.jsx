import React, {Component} from 'react';
import {BackBtn, PokemonFullDescription} from './styles';
import {getPokemonById} from '../../db';
import {Loader} from '../Loader';
import {Modal} from '../Modal/modal';

export class Pokemon extends Component {
	loader = Loader;

	constructor(props) {
		super(props);

		console.log('props ->', props);

		this.state = {
			pokemon: {},
			modal: {show: false}
		};
	}

	componentDidMount() {
		this.getPokemon();
	}

	getPokemon = async () => {
		this.loader.showSpinner(this);

		const {id} = this.props.match.params;

		try {
			// need a number
			const pokemon = await getPokemonById(+id);

			this.setState({
				pokemon: pokemon
			})
		} catch (e) {
			this.setState({
				errorMessage: e.message,
				modal: {show: true}
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
		const {pokemon: {image, name, fullDescription, food}, errorMessage, showSpinner, modal} = this.state;

		return (
			<div>
				{this.loader.getLoader(showSpinner)}

				<BackBtn onClick={this.back}>&laquo; Back</BackBtn>
				<h1>{name}</h1>

				<PokemonFullDescription>
					<img src={image} alt={name}/>
					<p className="fullDescription">{fullDescription}</p>
				</PokemonFullDescription>

				<Modal modal={modal} errorMessage={errorMessage} beforeClose={this.callbackAfterError}/>
			</div>
		);
	}
}
