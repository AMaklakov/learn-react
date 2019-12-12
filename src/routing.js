import {Root} from './components/Root';
import {Pokemon} from './components/Pokemon';

export const routes = {
	main: {
		link: '/',
		component: Root
	},
	pokemon: {
		link: '/pokemon/:id',
		component: Pokemon
	}
};
