import { FC, Fragment } from 'react';
import { useTheme } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';

import { Grid, Typography, Container, Box, Button } from '@mui/material';
import Breadcrumbs from '../components/Breadcrum';
import Stepper from '../components/Stepper';
import TextField from '../components/TextField';
import TextEditor from '../components/TextEditor';

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
						<Breadcrumbs text="Submit Tool" />
					</Box>
					<Box>
						<Stepper />
					</Box>
					<Box sx={{ marginTop: '30px' }}>
						<Typography variant="h4" sx={{ color: theme.palette.text.primary }}>
							Submit your tool.
							<span
								style={{
									fontSize: '1rem',
									marginLeft: '10px',
									color: theme.palette.success.main,
								}}
							>
								{`It's free and takes less than a minute.`}
							</span>
						</Typography>
						<Typography
							sx={{
								color: theme.palette.text.secondary,
								fontSize: '1rem',
								marginTop: '10px',
							}}
						>
							{`We try to review all tools within 7 days and add it to the directory.`}
						</Typography>
					</Box>
					<Grid container sx={{ marginLeft: '-5px', marginTop: '12px' }}>
						<Grid lg={6} sx={{ paddingLeft: '5px', paddingTop: '16px' }} item>
							<TextField label="Tool Name" text="Copy AI" multiline={false} />
						</Grid>
						<Grid lg={6} sx={{ paddingLeft: '64px', paddingTop: '16px' }} item>
							<TextField
								label="Website URL"
								text="https://copy.ai"
								multiline={false}
							/>
						</Grid>
						<Grid
							lg={12}
							item
							sx={{
								paddingLeft: '5px',
								marginTop: '24px',
								paddingTop: '16px',
							}}
						>
							<TextField
								label="Tool's short description (Optional)"
								text="Please provide a short description"
								multiline={false}
							/>
						</Grid>
						<Grid
							lg={12}
							item
							sx={{
								paddingLeft: '5px',
								marginTop: '24px',
								paddingTop: '16px',
							}}
						>
							<TextEditor />
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
									backgroundColor: 'rgb(14, 165, 233)',
									minWidth: '150px',
									color: 'white',
									'&:hover': {
										backgroundColor: `${theme.palette.error.light} !important`,
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
