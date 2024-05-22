import type { PageServerLoad } from './$types';
import {FEAR_AND_GREED_API} from '$env/static/private';

export const load: PageServerLoad = async () => {
	const res = await fetch(FEAR_AND_GREED_API);
	if (!res.ok) {
		throw new Error('Failed to fetch data from server');
	} else {
		const fng = await res.json();
		return {fng};
	}
}