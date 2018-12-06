const throwIfMissing = () => {
	throw new Error('Missing parameter');
};

export default function mobik(key = throwIfMissing(), array = throwIfMissing()) {
	if (!Array.isArray(array)) {
		return [];
	}
	const map = new Map();

	array.forEach(el => {
		const elKey = el[key];
		if (map.has(elKey)) {
			map.set(elKey, [...map.get(elKey), el]);
		} else {
			map.set(elKey, [el]);
		}
	});
	if (map.has(undefined) && map.size === 1) {
		return [];
	}
	return Array.from(map.entries()).map(([, value]) => Object.assign(...value));
}
