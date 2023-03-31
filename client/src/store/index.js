import { proxy } from 'valtio';

//=> it works similar like context:
const state = proxy({
	intro: true,
	color: '#efbd48',
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: './threejs.png',
	fullDecal: './threejs.png',
});

export default state;
