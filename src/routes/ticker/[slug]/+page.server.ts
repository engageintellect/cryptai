
import type { PageServerLoad } from './$types';
import { CRYPTO_API_ENDPOINT } from '$env/static/private';

export const load: PageServerLoad = async ({ params }) => {
	const res = await fetch(`${CRYPTO_API_ENDPOINT}/${params.slug}`);
	if (!res.ok) {
		throw new Error('Failed to fetch data from server');
	} else {
		const data = await res.json();
		return data;
	}
}
