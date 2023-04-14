import { Grid, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
interface NavButtonProps {
	text: string;
}
const NavButton: FC<NavButtonProps> = ({ text }) => {
	const theme = useTheme();
	return (
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
					fontSize: '1rem',
					fontWeight: '700',
					cursor: 'pointer',
					'&:hover': {
						color: theme.palette.error.light,
						transition: 'all 0.1s ease-in-out 0s',
					},
				}}
			>
				{text}
			</Typography>
		</Grid>
	);
};

export default NavButton;
