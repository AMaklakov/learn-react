import React, { Component } from 'react';

export class ErrorHandler extends Component {
	componentDidCatch(error, info) {
		console.error('Error happened ->', error);
		// show smth
		this.animated.show();
	}

	render() {
		return <div>{this.props.children}</div>;
	}
}
