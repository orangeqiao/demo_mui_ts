import React, { Suspense } from 'react'
import router from "./router"
import './App.css';
import { BrowserRouter as Router, } from "react-router-dom";
import { renderRoutes } from 'react-router-config'
function App() {
	return (
		<Router>
			<div className="App">
				<Suspense fallback={<div>Loading...</div>}>
					{renderRoutes(router)}
				</Suspense>
			</div>
		</Router>
	);
}

export default App;
