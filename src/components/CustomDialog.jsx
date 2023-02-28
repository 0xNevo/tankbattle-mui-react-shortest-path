import React, { Fragment, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { deepOrange } from '@mui/material/colors';

export default function CustomDialog( props ) {
	const open = props.open;
	const setOpen = props.setOpen;
	const winnerName = props.winnerName;
	
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Fragment>
			<Dialog
				fullWidth={true}
				maxWidth={"sm"}
				open={open}
			>
				<DialogTitle> Result </DialogTitle>
				<Divider/>
				<DialogContent sx={{
					height: '8rem'
				}}>
					<Grid container flex justifyContent="center" alignItems="center">
						<EmojiEventsIcon sx={{
							width: '7rem', height: '7rem',
							boxShadow: '0 0 0.25em 0.25em rgba(0, 0, 0, 0.25)',
							borderRadius: '3vw 4vw 8vw 2vw',
							color: 'gold'
						}}/>
						<Typography variant='h1'>
							{ winnerName } 
						</Typography>
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => { console.log( window.location ); location.href="/"} } variant="contained">Restart</Button>
					<Button onClick={handleClose} variant="contained">Close</Button>
				</DialogActions>
			</Dialog>
		</Fragment>
	);
}