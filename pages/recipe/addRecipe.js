import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tableStyles from '../common/styles/table.module.css';
import { recipeActions } from '../../redux/reducers/recipeReducer.ts';

export default function AddRecipe() {
	const [recipe, setRecipe] = useState({
		cook: '',
		recipe: '',
	});

	const dispatch = useDispatch();

	const handleChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setRecipe({ ...recipe, [name]: value });
	};

	return (
		<>
			<h1>레시피 추가하기</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					alert(JSON.stringify(recipe));
					dispatch(recipeActions.addRecipeRequest(recipe));
					setRecipe({ cook: '', recipe: '' });
				}}
			>
				<table className={tableStyles.table}>
					<thead>
						<tr>
							<th colSpan={2}>
								<h2>찌개 레시피 올리기</h2>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<label>찌개 이름</label>
							</td>
							<td>
								<input
									type='text'
									name='cook'
									className='input input__lg'
									onChange={handleChange}
								/>
							</td>
						</tr>
						<tr>
							<td>
								<label>레시피</label>
							</td>
							<td>
								<input
									type='text'
									name='recipe'
									className='input input__lg'
									onChange={handleChange}
								/>
							</td>
						</tr>
						<tr>
							<td>
								<label>올리기</label>
							</td>
							<td>
								<button
									type='submit'
									style={{ marginLeft: '20px' }}
									className='btn btn__primary btn__lg'
								>
									Add
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</form>
		</>
	);
}
