import React, {Component} from 'react';

export class ErrorHandler extends Component {
	componentDidCatch(error, info) {
		console.log('heres ->', error);
		// show smth
		this.animated.show();
	}

	render() {
		return (
			<div>
				{this.props.children}


			</div>
		);
	}
}
