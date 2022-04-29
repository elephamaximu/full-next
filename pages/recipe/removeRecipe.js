import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import tableStyles from '../common/styles/table.module.css';

export default function ModifyRecipe() {
	const columns = ['아이디', '요리', '레시피'];
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/recipe/deleteRecipe')
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
								<input />
								<button>삭제</button>
							</td>
						</tr>
					))
				)}
			</tbody>
		</table>
	);
}
