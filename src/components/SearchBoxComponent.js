import React, {useState} from 'react';
import DataService from "../service/DataService";

class SearchBoxComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			searchText: '',
			inStock: false
		};

	}

	setSearchText(texto) {


		let lista=DataService.getData('listaProductos').filter(p => {

			if (p.name.toString().indexOf(texto) > -1) {
				return true;
			}

			return false;
		});

		DataService.setData('listaFiltrada',lista);

		this.setState({searchText: texto});
	}

	setInStock(valor) {

	}

	render() {

		return (

			<div>
				<h1>Search</h1>
				<input type="text" name="busqueda" value={this.state.searchText}
							 onChange={(e) => this.setSearchText(e.target.value)}/>

				<input type="checkbox" name="chkOnStock" checked={this.state.inStock ? "checked" : ""}
							 onChange={(e) => this.setInStock(e.target.value)}/>
				Only short products on stack
			</div>

		)
	}

}

export default SearchBoxComponent;
