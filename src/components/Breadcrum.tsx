import { Breadcrumbs, Link, Stack, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface BreadcrumProps {
	text: string;
}
const Breadcrum: FC<BreadcrumProps> = ({ text }) => {
	const theme = useTheme();
	const breadcrumbs = [
		<Link
			underline="hover"
			key="1"
			color="inherit"
			sx={{ color: theme.palette.text.secondary }}
			href="/"
		>
			Home
		</Link>,
		<Typography key="2" sx={{ color: theme.palette.success.main }}>
			{text}
		</Typography>,
	];
	return (
		<Stack spacing={2}>
			<Breadcrumbs
				separator={<NavigateNextIcon fontSize="small" />}
				aria-label="breadcrumb"
			>
				{breadcrumbs}
			</Breadcrumbs>
		</Stack>
	);
};

export default Breadcrum;
