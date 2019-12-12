import React, {Component} from 'react';

export class SearchBar extends Component {
	search = (event) => {
		const value = event.target.value;

		this.props.change(value);
	};

	render() {
		return (
			<input type="text" onChange={this.search}/>
		);
	}
}
