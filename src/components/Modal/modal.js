import React, { Component } from 'react';
import SkyLight from 'react-skylight';

export class Modal extends Component {

	onBeforeClose = () => {
		const {modal, beforeClose} = this.props;

		modal.show = false;
		beforeClose();
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.modal.show) {
			this.animated && this.animated.show();
		}
	};

	render() {
		const {errorMessage} = this.props;

		return <SkyLight
			hideOnOverlayClicked
			ref={ref => this.animated = ref}
			beforeClose={this.onBeforeClose}
			transitionDuration={100}>
			{errorMessage}
		</SkyLight>;
	}
}
