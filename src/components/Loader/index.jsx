import React from 'react';
import * as Spinner from 'react-spinkit';

export class Loader {
	static getLoader(show) {
		return (
			<Spinner
				style={{
					display: show ? 'block' : 'none',
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: '10vw',
					height: '10vw',
					zIndex: 1000,
				}}
				color={'#' + Math.floor(Math.random() * 16777215).toString(16)}
				name="circle"
				fadeIn="none"
			/>
		);
	}

	static showSpinner(that, callback) {
		that.setState(
			{
				showSpinner: true,
			},
			() => {
				if (callback) {
					callback();
				}
			}
		);
	}

	static hideSpinner(that, callback) {
		that.setState(
			{
				showSpinner: false,
			},
			() => {
				if (callback) {
					callback();
				}
			}
		);
	}
}
