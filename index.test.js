import mobik from './src/mobik';

const mockData = [{
	countryName: 'Egypt',
	countryCode: 'eg',
	bigmacIndex: '1.75',
	year: '2017'
},
{
	countryName: 'Austria',
	countryCode: 'at',
	bigmacIndex: '3.88',
	year: '2017'
},
{
	countryName: 'Argentina',
	countryCode: 'ar',
	bigmacIndex: '4.13',
	year: '2017'
}];

const mockData2 = [{
	countryName: 'Egypt',
	countryCode: {
		name: 'eg',
		value: 'a'
	},
	year: '2017'
},
{
	num: 12,
	year: '2017'
},
{
	random: 'Argentina',
	bigmacIndex: '4.13',
	year: '2017'
}];

describe('@mobik module', () => {
	it('should throw when no arguments are provided', () => {
		expect(() => {
			mobik();
		}).toThrow();
	});
	it('should return null if the the second argument is not an array', () => {
		const result = mobik('noKey', '[]');
		expect(result).toBeNull();
	});
	it('should return empty array if key is not found', () => {
		const result = mobik('noKey', mockData);
		expect(result).toEqual([]);
	});
	it('should merge object with no nested values', () => {
		const result = mobik('year', mockData);
		expect(result).toEqual([{year: '2017', bigmacIndex: '4.13', countryCode: 'ar', countryName: 'Argentina'}]);
	});
	it('should merge object with nested values', () => {
		const result = mobik('year', mockData2);
		expect(result).toEqual([{bigmacIndex: '4.13', countryCode: {name: 'eg', value: 'a'}, countryName: 'Egypt', num: 12, random: 'Argentina', year: '2017'}]);
	});
});

