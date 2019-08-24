'use strict';
import React from 'react';
import DataService from "../service/DataService";

/**
 * Created by David on 24/08/2019.
 */



const FilterableProductTable = (props) => {


	// {"category": "Sporting Goods",  "price": "$49.99",    "stocked": true,    "name": "Football"},

	const listaTR = props.products.map(p => {
return <tr>
	<td>{p.category}</td>
	<td>{p.name}</td>
	<td>{p.price}</td>
	<td>{p.stocked}</td>
</tr>
	});


	return <div>

		<table>
			<thead>
			<tr>
				<th>col1</th>
				<th>col2</th>
			</tr>
			</thead>
			<tbody>
			{listaTR}
			</tbody>
		</table>
	</div>
};


export default FilterableProductTable;