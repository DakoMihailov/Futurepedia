import { FC, Fragment } from 'react';
import { useTheme } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';

import {
	Grid,
	Typography,
	Container,
	Box,
	Button,
	InputLabel,
} from '@mui/material';
import CustomTextField from '../components/TextField';
import MultiSelect from '../components/MultiSelect';
import Breadcrum from '../components/Breadcrum';

const SubmitTools: FC = () => {
	const theme = useTheme();
	return (
		<Fragment>
			<Container
				maxWidth={false}
				sx={{
					bgcolor: theme.palette.primary.main,
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Container sx={{ marginTop: '15px' }}>
					<Box>
						<Breadcrum text="Submit News" />
					</Box>
					<Box sx={{ marginTop: '30px' }}>
						<Typography variant="h4" sx={{ color: theme.palette.text.primary }}>
							Submit.
						</Typography>
						<Typography
							sx={{
								color: theme.palette.success.main,
								fontSize: '1rem',
								marginTop: '10px',
							}}
						>
							Once approved, your submission will be added to the feed.
						</Typography>
					</Box>
					<Grid container sx={{ marginLeft: '-5px', marginTop: '5px' }}>
						<Grid lg={12} sx={{ paddingLeft: '5px', paddingTop: '16px' }} item>
							<CustomTextField
								label="Title"
								text="Please describe the content in 1-2 sentences."
								multiline={true}
							/>
						</Grid>
						<Grid
							lg={6}
							item
							sx={{
								paddingLeft: '5px',
								marginTop: '24px',
								paddingTop: '16px',
							}}
						>
							<CustomTextField
								label="Tool's short description (Optional)"
								text="Please provide a short description"
								multiline={false}
							/>
						</Grid>
						<Grid
							lg={6}
							item
							sx={{
								paddingLeft: '5px',
								marginTop: '24px',
								paddingTop: '16px',
							}}
						>
							<InputLabel
								sx={{
									color: theme.palette.text.secondary,
									marginBottom: '8px',
								}}
							>
								Select Categories (max 2)
							</InputLabel>
							<MultiSelect />
						</Grid>
						<Grid
							sx={{
								paddingLeft: '5px',
								marginTop: '24px',
								paddingTop: '16px',
								marginBottom: '24px',
							}}
						>
							<Button
								sx={{
									background: 'rgb(14, 165, 233)',
									minWidth: '150px',
									color: 'white',
									'&:hover': {
										background: `${theme.palette.error.light} !important`,
										boxShadow: 'none',
									},
								}}
								variant="contained"
								endIcon={<SendIcon />}
							>
								Next
							</Button>
						</Grid>
					</Grid>
				</Container>
			</Container>
		</Fragment>
	);
};

export default SubmitTools;
