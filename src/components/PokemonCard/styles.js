import styled from 'styled-components';

// const randomRGBNumber = () => Math.round(Math.random() * 255);

export const Pokemon = styled.div`
	width: 25%;
	position: relative;
	height: 25em;
	perspective: 150em;
	margin: 10px;

	> .side {
		width: 100%;
		position: absolute;
		background: white;
		top: 0;
		left: 0;
		height: 100%;
		backface-visibility: hidden;
		transition: all 0.6s ease;
		box-shadow: 1em 1em 2em rgba(0, 0, 0, 0.2);
	}

	> .front {
		overflow: hidden;

		> .title {
			color: white;
			text-align: center;
			font-size: 20px;
			position: absolute;
			bottom: 10px;
			width: 100%;
		}

		> img {
			height: 100%;
			min-width: 100%;
		}
	}

	> .back {
		transform: rotateY(180deg);

		> .description {
			height: 90%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 10px;

			.buttons {
				text-align: center;
			}
		}
	}

	&:hover .front {
		transform: rotateY(-180deg);
	}

	&:hover .back {
		transform: rotate(0);
	}

	@media (max-width: 600px) {
		width: 90%;
		height: 15em;
	}
`;

export const LearnMore = styled.button`
	background-color: #4caf50;
	border: none;
	color: white;
	padding: 20px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	border-radius: 10px;
	outline: none;
	cursor: pointer;
	transition: all 0.2s ease-out;

	&:hover {
		transform: scale(1.02);
		background-color: #449d48;
	}

	&:active {
		background-color: #409444;
	}
`;
