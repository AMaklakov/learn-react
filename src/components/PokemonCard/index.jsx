import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { LearnMore, Pokemon } from './styles';

export class PokemonCard extends Component {
	goToPokemonPage = ({ history }) => {
		const {
			pokemon: { id },
		} = this.props;

		return <LearnMore onClick={() => history.push(`/pokemon/${id}`)}>More info</LearnMore>;
	};

	render() {
		const {
			pokemon: { name, image, description },
		} = this.props;

		return (
			<Pokemon>
				<div className="side front">
					<img src={image} alt={name} />
					<div className="title">
						<b>{name}</b>
					</div>
				</div>
				<div className="side back">
					<div className="description">
						<p>{description}</p>

						<div className="buttons">
							<Route render={this.goToPokemonPage} />
						</div>
					</div>
				</div>
			</Pokemon>
		);
	}
}
