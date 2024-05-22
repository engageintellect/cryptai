
import type { PageServerLoad } from './$types';
import {COIN_GECKO_API} from '$env/static/private';

export const load: PageServerLoad = async () => {
	const res = await fetch(`${COIN_GECKO_API}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1`);
	if (!res.ok) {
		throw new Error('Failed to fetch data from server');
	} else {
		const data = await res.json();
		return {data};
	}
}
