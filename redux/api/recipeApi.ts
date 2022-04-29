import axios, { AxiosResponse } from 'axios';
const SERVER = 'http://127.0.0.1:5000';
const headers = {
	'Content-Type': 'application/json',
	Authorization: 'JWT fefege...',
};

export interface RecipeType {
	cook: string;
	recipe: string;
}

export const addRecipeApi = async (payload: {
	cook: string;
	recipe: string;
}) => {
	try {
		const response: AxiosResponse<unknown, RecipeType[]> = await axios.post(
			`${SERVER}/recipe/add`,
			payload,
			{ headers }
		);
		return response.data;
	} catch (err) {
		return err;
	}
};

export const modifyRecipeApi = async (payload: {
	_id: string;
	cook: string;
	recipe: string;
}) => {
	try {
		const response: AxiosResponse<unknown, RecipeType[]> = await axios.post(
			`${SERVER}/recipe/modify`,
			payload,
			{ headers }
		);
		return response.data;
	} catch (err) {}
};
