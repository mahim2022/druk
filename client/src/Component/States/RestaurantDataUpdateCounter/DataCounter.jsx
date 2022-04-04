import { createContext, useState } from "react";

export const DataCounter = createContext();

export const DataCounterProvider = (props) => {
	const [counter, setCounter] = useState(false);
	return (
		<DataCounter.Provider value={[counter, setCounter]}>
			{props.children}
		</DataCounter.Provider>
	);
};
