import DataJSON from '../data';

/**
 * Created by David on 24/08/2019.
 */

class DataServiceObservable {
	constructor() {
		this.data = {};
		this.listener = {};

	}


	addData(key, value) {
		this.data[key] = value;
		let self=this;

		if (Array.isArray(value)) {
			/* override methodos*/

			value.rKey=key;


			value.rSort = function (fn) {
				value.sort(fn);

				self.listener[value.rKey].forEach(fn => {
					fn(value);
				});

				console.log('hicimos un sort !!!!!');

			}
		}

		this.listener[key] = [];
	}

	getData(key) {
		return this.data[key];
	}

	setData(key, value) {
		const oldValue = this.data[key];

		this.data[key] = value;
		this.listener[key].forEach(fn => {
			fn(value, oldValue);
		})
	}

	addListener(key, onChange) {
		this.listener[key].push(onChange);
	}
}

const DataService = new DataServiceObservable();


let lista = DataJSON.data;
DataService.addData('listaProductos', lista);
DataService.addData('listaFiltrada', [...lista]);

export default DataService;



