export function toggleAllBoxes() {
	return {
		type: 'TOGGLE_ALL_BOXES',


	}
};

export function toggleSingleBox(boxColor) {
	return {
		type: 'TOGGLE_SINGLE_BOX',
		boxColor
	}
}