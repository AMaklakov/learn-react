import { Pokemon } from './components/Pokemon';
import { Root } from './components/Root';

export const routes = {
	main: {
		link: '/',
		component: Root,
	},
	pokemon: {
		link: '/pokemon/:id',
		component: Pokemon,
	},
};
