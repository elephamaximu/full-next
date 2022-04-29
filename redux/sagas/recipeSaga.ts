import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { recipeActions } from '../reducers/recipeReducer.ts';
import { addRecipeApi, modifyRecipeApi } from '../api/recipeApi.ts';

interface RecipeType {
	type: string;
	payload: {
		cook: String;
		recipe: String;
	};
}

interface RecipeSuccessType {
	type: string;
	payload: {
		cook: String;
		recipe: String;
	};
}

function* addRecipe(recipe: RecipeType) {
	try {
		alert('사가내부진입');
		const response: RecipeSuccessType = yield addRecipeApi(recipe.payload);
		yield put(recipeActions.addRecipeSuccess(response));
	} catch (error) {
		yield put(recipeActions.taskFailure(error));
		alert('사가내부진입실패');
	}
}

function* modifyRecipe(recipe: RecipeType) {
	try {
		alert('사가내부진입');
		const response: RecipeSuccessType = yield modifyRecipeApi(recipe.payload);
		yield put(recipeActions.modifyRecipeSuccess(response));
	} catch (error) {
		yield put(recipeActions.taskFailure(error));
	}
}

export function* watchAddRecipe() {
	yield takeLatest(recipeActions.addRecipeRequest, addRecipe);
}

export function* watichModifyRecipe() {
	yield takeLatest(recipeActions.modifyRecipeRequest, modifyRecipe);
}
