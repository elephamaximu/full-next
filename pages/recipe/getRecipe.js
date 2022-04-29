import axios from 'axios';
import { useEffect, useState } from 'react';
import tableStyles from '../common/styles/table.module.css';
import Link from 'next/link';

export default function GetRecipe() {
	const columns = ['요리', '레시피'];
	const [data, setData] = useState([]);

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
							<td>{recipe.cook}</td>
							<td>{recipe.recipe}</td>
						</tr>
					))
				)}
			</tbody>
		</table>
	);
}
