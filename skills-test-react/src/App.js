import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AccountMenu from './components/AccountMenu';
import BasicForm from './components/BasicForm';
import { Routes, Route } from 'react-router-dom';

export default function App() {
	const [openForm, setOpenForm] = React.useState(false);
	const handleOnClick = (page) => {
		console.log('open');
		if (!openForm) {
			setOpenForm(true)
		} else {
			setOpenForm(false)
		}
	};
	return (
		<Container maxWidth="sm">
			<Box sx={{ my: 4 }}>
				<Typography variant="h4" component="h1" gutterBottom>
					React Skills test
				</Typography>
			</Box>
			<Routes>
				<Route path="/" element={<AccountMenu onClick={handleOnClick} />}></Route>
				<Route path='/todo' element={openForm && <BasicForm />}></Route>
			</Routes>



		</Container>
	);
}
