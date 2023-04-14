import { FC, Fragment } from 'react';
import {
	Typography,
	Box,
	Container,
	Grid,
	Button,
	useTheme,
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HandymanIcon from '@mui/icons-material/Handyman';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ArticleIcon from '@mui/icons-material/Article';

// import { translate } from '../languages';
import NewsButton from '../components/NewsButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconTypo from '../components/IconTypo';
import Search from '../components/Search';
import SelectField from '../components/SelectField';
import NewItem from '../components/NewItem';

const Landing: FC = () => {
	const theme = useTheme();
	return (
		<Fragment>
			<Container
				maxWidth={false}
				sx={{
					bgcolor: theme.palette.primary.main,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<Container sx={{ marginBottom: '20px' }}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: '32px',
							marginBottom: '32px',
						}}
					>
						<Grid
							sx={{
								justifyContent: 'space-between',
								width: '375px',
								marginLeft: 'auto',
								marginRight: 'auto',
								marginBottom: '12px',
							}}
						>
							<Grid item sx={{ display: 'flex', gap: '20px' }}>
								<IconTypo
									text={'90,000+'}
									icon={
										<PeopleIcon
											sx={{
												color: theme.palette.text.secondary,
												fontWeight: '700',
											}}
										/>
									}
								></IconTypo>
								<IconTypo
									text={'190,000+'}
									icon={
										<BookmarkIcon
											sx={{
												color: theme.palette.text.secondary,
												fontWeight: '700',
											}}
										/>
									}
								></IconTypo>
							</Grid>
							<Grid item></Grid>
						</Grid>
						<Typography sx={{ color: theme.palette.text.primary }} variant="h2">
							<strong>FUTUREPEDIA</strong>
						</Typography>
						<Typography
							sx={{ color: theme.palette.text.secondary }}
							variant="h6"
						>
							THE LARGEST AI TOOLS DIRECTORY, UPDATED DAILY
						</Typography>
						<Grid
							sx={{
								display: 'flex',
								gap: '60px',
								marginTop: '40px',
								flexDirection: 'row',
							}}
						>
							<NewsButton
								text="Tools Added Today"
								icon={<HandymanIcon />}
								count="25"
							></NewsButton>
							<NewsButton
								text="News Added Today"
								icon={<ArticleIcon />}
								count="3"
							></NewsButton>
						</Grid>
					</Box>
					<Box>
						<Grid
							sx={{
								display: 'flex',
								gap: '60px',
								marginTop: '40px',
								flexDirection: 'row',
							}}
						>
							<Search />
						</Grid>
					</Box>
					<Box>
						<Grid sx={{ marginTop: '25px', display: 'flex' }}>
							<Box
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Grid item>
									<Button
										sx={{
											border: '1px solid',
											borderRadius: '10px',
											padding: '15px 25px 15px 25px',
											color: theme.palette.text.primary,
											borderColor: 'rgba(255, 255, 255, 0.23)',
											'&:hover': {
												backgroundColor: ` ${theme.palette.warning.dark} !important`,
												borderColor: 'rgba(255, 255, 255, 0.23)',
											},
										}}
										variant="outlined"
										endIcon={<FilterAltIcon />}
									>
										Filters
									</Button>
								</Grid>
								<Grid sx={{ width: '100%' }} item>
									<Box sx={{ width: '100%', display: 'flex' }}>
										<Grid item sx={{ marginLeft: '20px' }}>
											<ArrowBackIcon
												sx={{ color: theme.palette.text.primary }}
											/>
										</Grid>
										<Grid
											item
											sx={{
												marginRight: '20px',
												marginLeft: 'auto',
											}}
										>
											<ArrowForwardIcon
												sx={{ color: theme.palette.text.primary }}
											/>
										</Grid>
									</Box>
								</Grid>

								<Grid item sx={{ marginLeft: 'auto' }}>
									<SelectField label="Sort By" />
								</Grid>
							</Box>
						</Grid>
					</Box>
					<Box sx={{ marginTop: '50px' }}>
						<NewItem></NewItem>
					</Box>
				</Container>
			</Container>
		</Fragment>
	);
};

export default Landing;
