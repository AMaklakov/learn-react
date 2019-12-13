import React, { useEffect, useState } from 'react';
import * as Spinner from 'react-spinkit';

export const Loader = ({ needShow }) => {
	const [show, setShow] = useState(needShow);

	useEffect(() => {
		setTimeout(() => setShow(needShow), needShow ? 0 : 500);
	}, [needShow]);

	if (show) {
		return (
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100vw',
					height: '100vh',
					backgroundColor: 'rgba(255, 255, 255, 0.7)',
				}}
			>
				<Spinner
					style={{
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
			</div>
		);
	}

	return null;
};
