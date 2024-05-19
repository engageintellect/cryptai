
import type { PageServerLoad } from './$types';
import { CRYPTO_API_ENDPOINT, FEAR_AND_GREED_API } from '$env/static/private';

export const load: PageServerLoad = async ({ params }) => {
	const res = await fetch(`${CRYPTO_API_ENDPOINT}/${params.slug}`);
	const fngRes = await fetch(`${FEAR_AND_GREED_API}`);
	if (!res.ok && !fngRes.ok) {
		throw new Error('Failed to fetch data from server');
	} else {

		const data = {
			crypto: await res.json(),
			fng: await fngRes.json(),
		} 
		return data;
	}
}
