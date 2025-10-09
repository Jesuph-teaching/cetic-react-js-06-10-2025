export function DisplayProfile(firstName: string, lastName: string, lang: 'en' | 'fr' = 'en') {
	const fn = firstName.replaceAll(/\d/g, '');
	const ln = lastName.replaceAll(/\d/g, '');
	if (lang === 'en') {
		return `${fn} ${ln}`;
	}
	return `${ln} ${fn}`;
}
