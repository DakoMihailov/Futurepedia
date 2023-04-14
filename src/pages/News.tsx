import { FC, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import { Grid, Typography, Container, Box, Button } from '@mui/material';
// import { translate } from '../languages';
import Breadcrumbs from '../components/Breadcrum';
import SelectField from '../components/SelectField';
import NewsItem from '../components/NewsItem';

const News: FC = () => {
	const theme = useTheme();
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/submit-news');
	};
	//Infinite Scroll
	// const [items, setItems] = useState<number[]>([]);
	// const [page, setPage] = useState(1);

	// useEffect(() => {
	//   fetchData(page);
	// }, [page]);

	// const fetchData = (page: number) => {
	//   const newItems = [];
	//   alert(page);
	//   for (let i = 0; i < 100; i++) {
	//     newItems.push(i);
	//   }
	//   setItems([...items, ...newItems]);
	// };

	// const onScroll = () => {
	//   const scrollTop = document.documentElement.scrollTop;
	//   const scrollHeight = document.documentElement.scrollHeight;
	//   const clientHeight = document.documentElement.clientHeight;
	//   if (scrollTop + clientHeight >= scrollHeight) {
	//     setPage(page + 1);
	//   }
	// };

	// useEffect(() => {
	//   window.addEventListener('scroll', onScroll);
	//   return () => window.removeEventListener('scroll', onScroll);
	// }, [items]);

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
						<Breadcrumbs text="News" />
					</Box>
					<Box sx={{ marginTop: '30px' }}>
						<Typography variant="h4" sx={{ color: theme.palette.text.primary }}>
							Latest AI News | All Time
						</Typography>
						<Typography
							sx={{
								color: theme.palette.success.main,
								fontSize: '1rem',
								marginTop: '10px',
							}}
						>
							378 News
						</Typography>
					</Box>
					<Grid
						container
						sx={{
							display: 'flex',
							flexDirection: 'column',
							marginLeft: '-5px',
							marginTop: '15px',
						}}
					>
						<Grid
							sx={{
								paddingLeft: '5px',
							}}
						>
							<Button
								sx={{
									background: '#f0f9ff',
									minWidth: '150px',
									color: 'rgb(12, 74, 110)',
									'&:hover': {
										background: '#0369a1',
										boxShadow: 'none',
										color: 'white',
									},
								}}
								onClick={handleClick}
								variant="contained"
								startIcon={<AddIcon />}
							>
								Submit
							</Button>
						</Grid>
						<Grid
							sx={{
								marginTop: '24px',
								paddingTop: '16px',
								display: 'flex',
								marginLeft: '-5px',
							}}
						>
							<Box sx={{ width: '100%', display: 'flex' }}>
								<Grid item>
									<SelectField label="Time" />
								</Grid>
								<Grid item>
									<SelectField label="Category" />
								</Grid>
								<Grid item sx={{ marginLeft: 'auto' }}>
									<SelectField label="Sort" />
								</Grid>
							</Box>
						</Grid>
						<Grid
							sx={{
								marginTop: '24px',
								marginBottom: '24px',
								paddingTop: '16px',
								display: 'flex',
							}}
						>
							<NewsItem />
						</Grid>
					</Grid>
				</Container>
			</Container>
		</Fragment>
	);
};

export default News;
