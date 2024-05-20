
import type { PageServerLoad } from './$types';
import { CRYPTO_API_ENDPOINT, FEAR_AND_GREED_API, NEWS_API_KEY } from '$env/static/private';

export const load: PageServerLoad = async ({ params }) => {
	const res = await fetch(`${CRYPTO_API_ENDPOINT}/${params.slug}`);
	const historyRes = await fetch(`${CRYPTO_API_ENDPOINT}/${params.slug}/history?interval=h1`);
	const fngRes = await fetch(`${FEAR_AND_GREED_API}`);
	const newsRes = await fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&q=${params.slug}&language=en`)
	if (!res.ok && !fngRes.ok) {
		throw new Error('Failed to fetch data from server');
	} else {

		const data = {
			crypto: await res.json(),
			fng: await fngRes.json(),
			news: await newsRes.json(),
			history: await historyRes.json()
		} 
		return data;
	}
}
