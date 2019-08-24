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
		};

		const onChangeListaFiltrada = (newValue, oldValue) => {

			this.setState({
				listaFiltrada: newValue
			})
		};

		DataService.addListener('listaFiltrada', onChangeListaFiltrada)

	}


	render() {

		return (

			<div>

				Inicio
				<SearchBoxComponent/>

				<FilterableProductTable products={this.state.listaFiltrada}/>

			</div>
		)


	}
}

export default App;
