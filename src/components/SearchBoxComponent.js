import React, {useState} from 'react';
import DataService from "../service/DataService";

class SearchBoxComponent extends React.Component {

	constructor(props) {
		super(props);

		this.inStoke = false;

		this.state = {
			searchText: '',
			inStock: false
		};

		this.setSearchText.bind(this);
		this.setInStock.bind(this);

	}

	setSearchText(texto) {


		let lista = DataService.getData('listaProductos').filter(p => {

			if (p.name.toString().indexOf(texto) > -1) {
				return true;
			}

			return false;
		});

		DataService.setData('listaFiltrada', lista);

		this.setState({searchText: texto});
	}

	setInStock (){

		let isIntock=!this.state.inStock;


		this.setState({
			inStock :isIntock
		});


		DataService.setData('inStock', isIntock);
	};

	onOrdenarPorNombre(e) {
		DataService.getData('listaFiltrada').rSort((a, b) => {

			if (a.name === b.name) {
				return 0;
			}

			if (a.name > b.name) {
				return 1;
			}

			return -1

		})
	}

	render() {


		return (

			<div>
				<h1>Search</h1>
				<input type="text" name="busqueda" value={this.state.searchText}
							 onChange={(e) => this.setSearchText(e.target.value)}/>

				<input type="checkbox" name="chkOnStock"
							 defaultChecked={this.state.inStock}

							 onChange={(e)=>{this.setInStock(e.target.value)}}/>
				Only short products on stack


				<div>
					<button onClick={this.onOrdenarPorNombre}>
						Reordear alfabeticamente
					</button>
				</div>
			</div>

		)
	}

}

export default SearchBoxComponent;
