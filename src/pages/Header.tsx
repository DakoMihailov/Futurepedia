import { FC, Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { Grid, Typography, Container, Box } from '@mui/material';
import NavButton from '../components/NavButton';
import NavDropMenuButton from '../components/NavDropMenuButton';
import MultiTheme from '../components/MultiTheme';
import MultiLang from '../components/MultiLang';
import { translate } from '../languages';
import { RootState } from '../store';

const Header: FC = () => {
	const lang = useSelector((state: RootState) => state.lang.language);
	const theme = useTheme();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const open2 = Boolean(anchorEl2);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl2(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleClose2 = () => {
		setAnchorEl2(null);
	};
	const subMenu1: Array<{
		name: string;
		url: string;
	}> = [
		{ name: 'Submit Tools', url: 'submit-tool' },
		{ name: 'Submit News', url: 'submit-news' },
	];
	const subMenu2: Array<{
		name: string;
		url: string;
	}> = [
		{ name: 'Newsletter Issues', url: 'submit-tool' },
		{ name: 'Latest AI News', url: 'news' },
	];
	return (
		<Fragment>
			<Container
				maxWidth={false}
				sx={{
					bgcolor: theme.palette.primary.main,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					borderBottom: `${theme.palette.divider} solid 1px`,
				}}
			>
				<Box
					gap={15}
					sx={{ bgcolor: theme.palette.primary.main, display: 'inline-flex' }}
				>
					<Grid
						container
						gap={10}
						sx={{ marginTop: '10px', marginBottom: '10px' }}
					>
						<NavButton text={translate('Favourites', lang)} />
						<NavButton text={translate('Discover', lang)} />
						<NavDropMenuButton
							text={translate('Submit', lang)}
							handleOpen={handleClick}
							handleClose={handleClose}
							anchorEl={anchorEl!}
							open={open}
							subMenu={subMenu1}
						/>
						<NavDropMenuButton
							text={translate('Community', lang)}
							handleOpen={handleClick2}
							handleClose={handleClose2}
							anchorEl={anchorEl2!}
							open={open2}
							subMenu={subMenu2}
						/>
					</Grid>
					<Grid
						item
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: '10px',
							marginBottom: '10px',
						}}
					>
						<Typography
							sx={{
								display: 'flex',
								cursor: 'pointer',
								justifyContent: 'center',
							}}
						>
							<MultiTheme />
							<MultiLang />
							<Grid
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<svg
									stroke="currentColor"
									fill="currentColor"
									strokeWidth="0"
									version="1.1"
									x="0px"
									y="0px"
									viewBox="0 0 48 48"
									enableBackground="new 0 0 48 48"
									height="22"
									width="22"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill="#FFC107"
										d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
									></path>
									<path
										fill="#FF3D00"
										d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
									></path>
									<path
										fill="#4CAF50"
										d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
									></path>
									<path
										fill="#1976D2"
										d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
									></path>
								</svg>
								<Typography
									sx={{
										color: theme.palette.text.primary,
										fontSize: '1rem',
										fontWeight: '300',
										marginLeft: '10px',
									}}
								>
									{translate('Login', lang)}
								</Typography>
							</Grid>
						</Typography>
					</Grid>
				</Box>
			</Container>
		</Fragment>
	);
};

export default Header;
