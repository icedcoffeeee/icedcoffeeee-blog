import colors from 'tailwindcss/colors';

type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	// Safari is mad about dashes in the date
	const toFormat = new Date(date.replaceAll('-', '/'));
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(toFormat);
}

export const logo = (slug: string) =>
	`https://cdn.simpleicons.org/${slug}/${colors.neutral[50].slice(1)}`;
