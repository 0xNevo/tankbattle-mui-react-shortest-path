import React, {useState} from 'react';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FortIcon from '@mui/icons-material/Fort';
import Fab from '@mui/material/Fab';

import TankItem from './TankItem';

import Tank from '../Tank';

export default function StartPage( props ) {
	const pName1 = props.p1Name;
	const pName2 = props.p2Name;
	const setTank1 = props.setTank1;
	const setTank2 = props.setTank2;
	const [isMint, setIsMint] = useState( false );

	const handleMint = () => {
        if( ( pName1 && pName2 ) && ( pName1 !== pName2 ) ) {
			setIsMint( true );

			let tmp1 = new Tank( pName1 );
			let tmp2 = new Tank( pName2 );

			setTank1( tmp1 );
			setTank2( tmp2 );

			localStorage.setItem( 
				window.btoa( window.btoa( "tank player1" ) ), 
				window.btoa( window.btoa( JSON.stringify( tmp1 ) ) ) 
			);
			localStorage.setItem( 
				window.btoa( window.btoa( "tank player2" ) ), 
				window.btoa( window.btoa( JSON.stringify( tmp2 ) ) ) 
			);
		}
    };

	return (
		<Grid container flex direction="column" justifyContent="center" alignItems="center">
			<Grid container item flex justifyContent="center" alignItems="center">
				<Paper  elevation={3} sx={{ 
					bgcolor: '#ffffff', width: '80%', height: '80vh', margin: 'auto', marginTop: '8vh' }} 
				>
					<Grid container flex direction="column" justifyContent="center" alignItems="center">
						<Grid container direction="row" justifyContent="center" alignItems="center">
							<TankItem 
								player={1} 
								pName = {pName1} setPName = {props.setP1Name}
								img = {props.img1}
								isMint = {isMint}
							/>
							{
								isMint 
								? <Fab variant="extended" sx={{
										width: "15rem",
										height: "5rem",
										backgroundColor: 'white',
										marginTop: '23vh'
									}}

									onClick = { () => {
										setTimeout(() => {
											location.href = "battle";
										}, 200);
									}}
								>
									<FortIcon sx={{ mr: 1 }} />
									V S
								</Fab>

								: <Fab variant="extended" sx={{
										width: "15rem",
										height: "5rem",
										backgroundColor: 'white',
										marginTop: '23vh'
									}}
									disabled = { !(pName1 && pName2) || (pName1 === pName2) }
									onClick = { handleMint }
								>
									<AutoAwesomeIcon sx={{ mr: 1 }} />
									Mint
								</Fab>
							}
							<TankItem 
								player={2}
								pName = {pName2} setPName = {props.setP2Name}
								img = {props.img2}
								isMint = {isMint}
							/>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</Grid>
	);
}