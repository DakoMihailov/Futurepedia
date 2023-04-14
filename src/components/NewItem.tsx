import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Button, Grid, Tooltip, Typography } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const NewItem: FC = () => {
	const theme = useTheme();
	return (
		<Grid
			container
			sx={{
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Grid xs={4} item>
				<Grid
					sx={{
						display: 'flex',
						border: `solid 1px ${theme.palette.error.light}`,
						backgroundColor: theme.palette.warning.dark,
						borderRadius: '8px',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Grid
						sx={{
							overflow: 'hidden',
							borderTopRightRadius: '7px',
							borderTopLeftRadius: '7px',
							'&:hover': {
								cursor: 'pointer',
								'& .headerImg': {
									transform: 'scale(1.1)',
								},
								'& .typo': {
									color: theme.palette.error.light,
								},
							},
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
						}}
					>
						<Box>
							<Grid>
								<img
									className="headerImg"
									style={{
										width: '100%',
										height: '100%',
										borderTopRightRadius: '7px',
										borderTopLeftRadius: '7px',
									}}
									src="https://media.licdn.com/dms/image/D5616AQGS8fazgm96eQ/profile-displaybackgroundimage-shrink_350_1400/0/1681055061125?e=1686787200&v=beta&t=rKEh5TqyrgCz1tUMH1V3b5wlv0xfG48oET9KlH2PdSQ"
								></img>
							</Grid>
						</Box>
						<Box
							sx={{
								width: '90%',
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Grid
								sx={{
									paddingTop: '10px',
									display: 'flex',
									flexDirection: 'row',
								}}
							>
								<Typography
									className="typo"
									sx={{ color: theme.palette.text.primary }}
								>
									Cohesive
								</Typography>
								<VerifiedIcon
									sx={{
										marginLeft: '10px',
										color: theme.palette.error.light,
									}}
								/>
							</Grid>
							<Grid
								sx={{
									marginLeft: 'auto',
									justifyContent: 'center',
									display: 'flex',
									alignItems: 'center',
									flexDirection: 'row',
								}}
							>
								<svg
									stroke="currentColor"
									fill="currentColor"
									strokeWidth="0"
									viewBox="0 0 16 16"
									color="gray"
									style={{ color: 'gray', marginRight: '5px' }}
									height="20"
									width="20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
									></path>
									<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path>
								</svg>
								<Typography sx={{ color: theme.palette.text.primary }}>
									24
								</Typography>
							</Grid>
						</Box>
						<Box
							sx={{
								width: '90%',
								marginTop: '15px',
							}}
						>
							<Typography sx={{ color: theme.palette.text.primary }}>
								The most powerful AI editor that amplifies your creativity and
								productivity.
							</Typography>
						</Box>
					</Grid>
					<Box sx={{ width: '90%' }}>
						<Button
							sx={{
								marginTop: '15px',
								border: '1px solid',
								borderRadius: '10px',
								padding: '5px 5px 5px 5px',
								color: theme.palette.text.primary,
								backgroundColor: theme.palette.primary.main,
								borderColor: 'rgb(189 189 189)',
								'&:hover': {
									backgroundColor: theme.palette.primary.main,
									borderColor: 'rgb(189 189 189)',
								},
							}}
							variant="outlined"
							startIcon={<FilterAltIcon />}
						>
							Filters
						</Button>
						<Typography
							sx={{
								marginTop: '15px',
								color: theme.palette.text.primary,
								'&:hover': {
									textDecoration: 'underline',
									textDecorationColor: theme.palette.error.light,
								},
							}}
						>
							<a
								style={{
									color: theme.palette.error.light,
									textDecoration: 'none',
								}}
								href="/"
							>
								#Copyright
							</a>
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							gap: '15px',
							marginTop: '40px',
							marginBottom: '20px',
							width: '90%',
						}}
					>
						<Tooltip title="Visit the website">
							<Button
								sx={{
									backgroundColor: 'rgb(14, 165, 233)',
									'&:hover': {
										backgroundColor: `${theme.palette.error.light} !important`,
									},
									width: '100%',
								}}
							>
								<svg
									stroke="currentColor"
									fill="none"
									strokeWidth="2"
									viewBox="0 0 24 24"
									strokeLinecap="round"
									strokeLinejoin="round"
									height="22"
									color="white"
									width="22"
									xmlns="http://www.w3.org/2000/svg"
								>
									<desc></desc>
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
									<line x1="10" y1="14" x2="20" y2="4"></line>
									<polyline points="15 4 20 4 20 9"></polyline>
								</svg>
							</Button>
						</Tooltip>
						<Tooltip title="Add to favourites">
							<Button
								sx={{
									backgroundColor: 'rgb(14, 165, 233)',
									'&:hover': {
										backgroundColor: `${theme.palette.error.light} !important`,
									},
									width: '100%',
								}}
							>
								<svg
									stroke="currentColor"
									fill="currentColor"
									strokeWidth="0"
									viewBox="0 0 16 16"
									height="22"
									width="22"
									color="white"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
									></path>
									<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path>
								</svg>
							</Button>
						</Tooltip>
					</Box>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default NewItem;
