import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Registration from "./pages/Registration";

function App() {

	return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Registration />} />
				</Routes>
			</BrowserRouter>
	);
}

export default App;