import styled from 'styled-components';

export const PokemonFullDescription = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;

	> img {
		width: 50%;
		align-self: flex-start;
	}

	> .fullDescription {
		width: 40%;
	}
`;

export const BackBtn = styled.button`
	padding: 10px 15px;
	background-color: #f1f1f1;
	cursor: pointer;
	border: none;
	border-radius: 10px;
	font-size: 19px;

	&:hover {
		background-color: #ddd;
	}
`;
