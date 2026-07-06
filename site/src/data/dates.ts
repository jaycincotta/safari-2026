export function parseItineraryDate(isoDate: string) {
	const [year, month, day] = isoDate.split('-').map(Number);
	return new Date(year, month - 1, day, 12, 0, 0, 0);
}

export function formatItineraryDate(isoDate: string, options: Intl.DateTimeFormatOptions) {
	return parseItineraryDate(isoDate).toLocaleDateString('en-US', options);
}

export function formatLocalIsoDate(date: Date) {
	const year = date.getFullYear();
	const month = `${date.getMonth() + 1}`.padStart(2, '0');
	const day = `${date.getDate()}`.padStart(2, '0');
	return `${year}-${month}-${day}`;
}