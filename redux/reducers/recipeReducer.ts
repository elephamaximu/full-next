import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface RecipeType {
	cook: string;
	recipe: string;
	_id: string;
}

export interface RecipeState {
	loading: boolean;
	data: RecipeType[];
	error: any;
}

export interface ModifyRecipeRquestType {
	_id: string;
	recipe: string;
}

const initialState: RecipeState = {
	loading: false,
	data: [],
	error: null,
};

const recipeSlice = createSlice({
	name: 'recipes',
	initialState,
	reducers: {
		addRecipeRequest(state: RecipeState, payload) {
			state.loading = true;
		},
		addRecipeSuccess(state: RecipeState, { payload }) {
			state.data = [...state.data, payload];
			state.loading = false;
		},
		addRecipeFailure(state: RecipeState, { payload }) {
			state.data = payload;
			state.loading;
		},
		modifyRecipeRequest(state: RecipeState) {
			state.loading = true;
		},
		modifyRecipeSuccess(state: RecipeState, { payload }) {
			state.data = [...state.data, payload];
			state.loading = false;
		},
		modifyRecipeFailure(state: RecipeState, { payload }) {
			state.data = payload;
		},
	},
});

const { reducer, actions } = recipeSlice;
export const recipeActions = actions;
export default reducer;
