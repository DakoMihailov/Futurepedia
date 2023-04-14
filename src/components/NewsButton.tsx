import { Badge, Button, Grid } from '@mui/material';
import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
interface NewsButtonProps {
	text: string;
	icon: JSX.Element;
	count: string;
}
const NewsButton: FC<NewsButtonProps> = ({ text, icon, count }) => {
	const theme = useTheme();
	return (
		<Grid item>
			<Button
				variant="outlined"
				sx={{
					border: '1px solid',
					borderColor: theme.palette.error.light,
					color: theme.palette.error.light,
					borderRadius: '10px',
					padding: '8px 35px',
					textTransform: 'capitalize',
					'&:hover': {
						backgroundColor: 'rgb(255 255 255) ',
						border: '1px solid',
						borderColor: theme.palette.error.dark,
					},
					fontSize: '1rem',
					fontWeight: '600',
				}}
				startIcon={icon}
			>
				{text}
			</Button>
			<Badge
				badgeContent={count}
				sx={{
					marginTop: '-40px',
					'& .MuiBadge-badge': {
						color: 'white',
						backgroundColor: theme.palette.warning.main,
					},
				}}
			></Badge>
		</Grid>
	);
};

export default NewsButton;
