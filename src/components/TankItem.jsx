import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';

export default function TankItem( props ) {
	const isMint = props.isMint;

	return (
		<Card sx={{ maxWidth: '25rem', maxHeight: '35rem', margin: 'auto', marginTop: '18vh'}}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="180"
					image={props.img}
					alt="green iguana"
				/>
				<CardContent>
					<Grid container flex justifyContent="center" alignItems="center">
						<TextField 
							id="tankName-ipt" 
							label={`Player${props.player} Name:`} 
							variant="outlined"
							value={props.pName}
							onInput={(e) => props.setPName(e.target.value)}
							disabled = {isMint}
						/>
					</Grid>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}