'use strict';
import React from 'react';
import DataService from "../service/DataService";

/**
 * Created by David on 24/08/2019.
 */



const FilterableProductTable = (props) => {


	// {"category": "Sporting Goods",  "price": "$49.99",    "stocked": true,    "name": "Football"},

	let lista = props.products;

	if (props.inStock) {
		lista = lista.filter(p => {
			return p.stocked === true;
		});
	}


	let listaTR = lista.map(p => {

		let texto = p.stocked ? "OK" : '';

		return <tr key={p.name}>
			<td>{p.category}</td>
			<td>{p.name}</td>
			<td>{p.price}</td>
			<td>{texto}</td>
		</tr>
	});


	return <div>

		<table>
			<thead>
			<tr>
				<th>category</th>
				<th>name</th>
				<th>price</th>
				<th>stocked</th>
			</tr>
			</thead>
			<tbody>
			{listaTR}
			</tbody>
		</table>
	</div>
};


export default FilterableProductTable;
