const remainingDays = function(string) {
	const oneDay = 24 * 60 * 60 * 1000,
		firstDate = new Date(),
		secondDate = new Date(string),
		days = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

	return days;
}

const remainingMonths = function(string) {
	const firstDate = new Date(),
		secondDate = new Date(string),
	    d1Y = firstDate.getFullYear(),
        d2Y = secondDate.getFullYear(),
        d1M = firstDate.getMonth(),
        d2M = secondDate.getMonth();

    return (d1M+12*d1Y)-(d2M+12*d2Y);
}

const getPercent = function(numer1, number2) {
	const plus = numer1 + number2;

    return Math.round((numer1 / plus) * 100);
}

export { remainingDays, remainingMonths, getPercent };