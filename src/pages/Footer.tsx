import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import {
	Grid,
	Typography,
	Container,
	IconButton,
	Divider,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { translate } from '../languages';
import { RootState } from '../store';

const Footer: FC = () => {
	const lang = useSelector((state: RootState) => state.lang.language);
	const theme = useTheme();
	return (
		<Container
			maxWidth={false}
			sx={{
				bgcolor: theme.palette.primary.main,
			}}
		>
			<Divider sx={{ borderColor: theme.palette.divider }} />
			<Grid container>
				<Grid
					container
					gap={3}
					sx={{
						bgcolor: theme.palette.primary.main,
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Grid item xs={2} sx={{ marginTop: '10px', marginBottom: '10px' }}>
						<Grid
							item
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Typography
								sx={{
									color: theme.palette.text.primary,
									fontSize: '14px',
									cursor: 'pointer',
									'&:hover': {
										textDecoration: 'underline !important',
									},
								}}
							>
								<a
									href="/"
									style={{
										color: theme.palette.text.primary,
										textDecoration: 'none',
									}}
								>
									{translate('Privacy Policy', lang)}
								</a>
							</Typography>
						</Grid>
						<Grid
							item
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Typography
								sx={{
									color: theme.palette.text.primary,
									fontSize: '14px',
									cursor: 'pointer',
									'&:hover': {
										textDecoration: 'underline !important',
									},
								}}
							>
								<a
									href="/"
									style={{
										color: theme.palette.text.primary,
										textDecoration: 'none',
									}}
								>
									{translate('Terms of services', lang)}
								</a>
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={2} sx={{ marginTop: '10px', marginBottom: '10px' }}>
						<Grid
							item
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Typography
								sx={{ color: theme.palette.text.primary, fontSize: '14px' }}
							>
								Copyright © 2023 - Futurepedia™
							</Typography>
						</Grid>
						<Grid
							item
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Typography
								sx={{
									color: theme.palette.text.primary,
									fontSize: '14px',
									cursor: 'pointer',
									'&:hover': {
										textDecoration: 'underline !important',
									},
								}}
							>
								<a
									href="/"
									style={{
										color: theme.palette.text.primary,
										textDecoration: 'none',
									}}
								>
									{translate('Sponsor', lang)}
								</a>
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={2} sx={{ marginTop: '10px', marginBottom: '10px' }}>
						<Grid
							item
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<IconButton>
								<LinkedInIcon
									sx={{ fontSize: '25px', color: '#0077b5', cursor: 'pointer' }}
								/>
							</IconButton>
							<IconButton>
								<TwitterIcon
									sx={{ fontSize: '25px', color: '#0077b5', cursor: 'pointer' }}
								/>
							</IconButton>
							<IconButton>
								<YouTubeIcon
									sx={{ fontSize: '25px', color: '#FF0000', cursor: 'pointer' }}
								/>
							</IconButton>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Footer;
