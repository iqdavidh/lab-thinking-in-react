import React, {useState} from 'react';

class SearchBoxComponent extends React.Component {

	constructor(props) {
		super(props);

		this.searchText = "";
		this.inStock = false;
	}

	setSearchText(texto) {

	}

	setInStock(valor) {

	}

	render() {

		return (

			<div>
				<h1>Search</h1>
				<input type="text" name="busqueda" value={this.searchText}
							 onChange={(e) => this.setSearchText(e.target.value)}/>

				<input type="checkbox" name="chkOnStock" checked={this.inStock ? "checked" : ""}
							 onChange={(e) => this.setInStock(e.target.value)}/>
				Only short products on stack
			</div>

		)
	}

}

export default SearchBoxComponent;
