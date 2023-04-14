import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Chip, Grid, Typography } from '@mui/material';

const NewsItem: FC = () => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				border: 'solid 1px',
				borderColor: 'rgb(189, 189, 189)',
				borderRadius: '10px',
				marginLeft: '5px',
				marginRight: '5px',
			}}
		>
			<Grid
				sx={{
					display: 'flex',
					marginLeft: '15px',
					marginTop: '10px',
					flexDirection: 'column',
				}}
			>
				<Grid item>
					<Typography
						variant="h6"
						sx={{
							color: theme.palette.text.primary,
							'&:hover': {
								cursor: 'pointer',
								color: theme.palette.error.light,
							},
						}}
					>
						How Math Predicts Everything{' '}
						<a
							style={{
								marginLeft: '5px',
								textDecoration: 'none',
								color: 'rgb(14, 165, 233)',
								fontSize: '12px',
							}}
							href="/"
						>
							How Math Predicts Everything
						</a>
					</Typography>
				</Grid>
				<Grid item sx={{ marginTop: '15px', marginBottom: '15px' }}>
					<Grid sx={{ display: 'flex', gap: '60px' }}>
						<Grid item>
							<Typography
								variant="h6"
								sx={{
									color: theme.palette.success.main,
									fontSize: '0.8rem',
								}}
							>
								submitted by Community Member{' '}
							</Typography>
							<Typography
								variant="h6"
								sx={{
									color: theme.palette.success.main,
									fontSize: '0.875rem',
								}}
							>
								5 hours ago{' '}
							</Typography>
						</Grid>
						<Grid item>
							<Chip
								sx={{ color: theme.palette.error.main }}
								avatar={<Avatar></Avatar>}
								label="Interesting"
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default NewsItem;
