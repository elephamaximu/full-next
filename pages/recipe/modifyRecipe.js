import axios from 'axios';
import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import tableStyles from '../common/styles/table.module.css';
import { recipeActions } from '../../redux/reducers/recipeReducer.ts';

export default function ModifyRecipe() {
	const columns = ['아이디', '요리', '레시피'];
	const [data, setData] = useState([]);
	const [recipe, setRecipe] = useState('');

	const dispatch = useDispatch();
	const handleChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setRecipe(value);
	};

	const updateOkOnclick = (e, _id) => {
		dispatch(recipeActions.modifyRecipeRequest({ _id, recipe }));
		setRecipe('');
	};

	useEffect(() => {
		axios
			.get('http://localhost:5000/recipe/getRecipe')
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {});
	}, []);

	return (
		<table className={tableStyles.table}>
			<thead>
				<tr>
					<th colSpan={6}>
						<h1>레시피 목록</h1>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					{columns.map((column, index) => (
						<td key={index}>{column}</td>
					))}
				</tr>
				{data.length == 0 ? (
					<tr>
						<td colSpan={6}>데이터가 없습니다</td>
					</tr>
				) : (
					data.map((recipe) => (
						<tr>
							<td>{recipe._id}</td>
							<td>{recipe.cook}</td>
							<td>
								{recipe.recipe}
								<input type='text' name='recipe' onChange={handleChange} />
								<button onClick={(e) => updateOkOnclick(e, recipe._id)}>
									수정
								</button>
							</td>
						</tr>
					))
				)}
			</tbody>
		</table>
	);
}
