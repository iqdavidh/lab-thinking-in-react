import React from 'react';
import './App.css';
import DataService from "./service/DataService";

import FilterableProductTable from "./components/FilterableProductTable";

import SearchBoxComponent from "./components/SearchBoxComponent";


class App extends React.Component {

	constructor(props) {
		super(props);

	}


	render() {

		return (

			<div>

				Inicio

				<SearchBoxComponent/>

				<FilterableProductTable />

			</div>
		)


	}
}

export default App;
