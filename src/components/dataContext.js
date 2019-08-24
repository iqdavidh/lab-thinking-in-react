import React, {useState, createContext} from 'react';
import data from '../data.js';

export const leContexte = createContext();


export const leProvedore = () =>{
	const [losdatos, setLosdatos] = useState(data);
	return(
		<leContexte.Provider data={[losdatos, setlosDatos]}>{props.children}</leContexte.Provider>
	)
};

export default leProvedore;
