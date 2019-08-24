import React from 'react';
import './App.css';
import FilterableProductTable from "./components/FilterableProductTable";
import DataService from "./service/DataService";
import SearchBoxComponent from "./components/SearchBoxComponent";


class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			listaProductos: DataService.getData('listaProductos'),
			listaFiltrada: DataService.getData('listaFiltrada'),
			inStock: DataService.getData('inStock')
		};

		DataService.addListener('listaFiltrada', (newValue, oldValue) => {

			this.setState({
				listaFiltrada: newValue
			})
		});


		DataService.addListener('inStock', (newValue, oldValue) => {

			this.setState({
				inStock:newValue
			})
		});



	}


	render() {

		return (

			<div>

				Inicio
				<SearchBoxComponent/>

				<FilterableProductTable products={this.state.listaFiltrada} inStock={this.state.inStock}/>

			</div>
		)


	}
}

export default App;
