/*
/		Creating factory for converting integer into Roman numerals 
*/

app.factory('ConvertFactory', function() {
	const DECIMAL = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	const ROMAN = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
	const MIN_VALUE = 1;
	const MAX_VALUE = 3999;
	const BORDERS_INFO = `Enter number from ${MIN_VALUE} to ${MAX_VALUE}`;

	return {
		checkBorders: function(number) {
			return (!number || number < MIN_VALUE || number > MAX_VALUE) ? false : true;
		},

		getBordersInfo: function() {
			return BORDERS_INFO;
		},

		romanNumeralConverter: function(number) {
			for (let i = 0; i < DECIMAL.length; i++) {
				if (number < MIN_VALUE) {
					return '';
				}
				if (number >= DECIMAL[i]) {
					return ROMAN[i] + this.romanNumeralConverter(
						number - DECIMAL[i]
					);
				}
			}
		}
	}
});