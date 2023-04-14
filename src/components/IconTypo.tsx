import { Typography } from '@mui/material';
import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
interface IconTypoProps {
	text: string;
	icon: JSX.Element;
}
const IconTypo: FC<IconTypoProps> = ({ text, icon }) => {
	const theme = useTheme();
	return (
		<Typography
			sx={{
				color: theme.palette.text.disabled,
				fontWeight: '700',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{icon}
			&nbsp;&nbsp;&nbsp;{text}
		</Typography>
	);
};

export default IconTypo;
