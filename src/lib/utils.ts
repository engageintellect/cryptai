/* eslint-disable @typescript-eslint/no-explicit-any */
import { PUBLIC_POCKETBASE_URL } from "$env/static/public";


export const getImageURL = (collectionId: unknown, recordId: unknown, fileName: unknown, size = '0x0') => {
	return `${PUBLIC_POCKETBASE_URL}/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};



export const validateData = async (formData:any, schema:any) => {
	const body = Object.fromEntries(formData);

	try {
		const data = schema.parse(body);
		return {
			formData: data,
			errors: null
		};
	} catch (err:any) {
		console.log('Error: ', err);
		const errors = err.flatten();
		return {
			formData: body,
			errors
		};
	}
};

export function floatToPrice(amount: number): string {
	if (Number(amount) < Number(0.01)) {
		return `$${amount.toFixed(6).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
	} else {
		return `$${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
	}
}


export function largeFloatToText(num: number): string {
  if (num >= 1e12) {
    return `${(num / 1e12).toFixed(2)} trillion`;
  } else if (num >= 1e9) {
    return `${(num / 1e9).toFixed(2)} billion`;
  } else if (num >= 1e6) {
    return `${(num / 1e6).toFixed(2)} million`;
  } else if (num >= 1e3) {
    return `${(num / 1e3).toFixed(2)} thousand`;
  }
  return num.toString();
}


export function floatToPercentage(num: number): string {
  const percentage = num.toFixed(2);
  const sign = num > 0 ? '+' : '';
  return `${sign}${percentage}%`;
}