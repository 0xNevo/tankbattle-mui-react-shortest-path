import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import StartPage from './components/StartPage';
import Board from './components/Board';

import "./App.css";

// let's start and enjoy!!!
// Good Luck ~~ !
//init( 50, 50 );x

function App() {
	const [p1Name, setP1Name] = useState("");
	const [p2Name, setP2Name] = useState("");
	const [img1, setImg1] = useState( '' );
	const [img2, setImg2] = useState( '' );
	const [tank1, setTank1] = useState( '' );
	const [tank2, setTank2] = useState( '' );

	useEffect(() => {
		return () => {
			console.log(p1Name, p2Name);
		};
	}, [p1Name, p2Name]);

	useEffect( () => {
		setImg1( `./imgs/mintTanks/mintTank-${Math.floor(Math.random() * 7) + 1}.jpg` );
		setImg2( `./imgs/mintTanks/mintTank-${Math.floor(Math.random() * 7) + 1}.jpg` );
	}, []);

	return (
		<Routes>
			<Route
				index
				element={
					<StartPage
						p1Name = {p1Name} setP1Name  = {setP1Name} img1 = {img1} setTank1 = {setTank1}
						p2Name = {p2Name} setP2Name = {setP2Name} img2 = {img2} setTank2 = {setTank2}
					/>
				}
			/>
			<Route path="battle" element={<Board tank1 = {tank1} tank2 = {tank2} />} />
		</Routes>
	);
}

export default App;
