import {
	Fade,
	Grid,
	Menu,
	MenuItem,
	Typography,
	useTheme,
} from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
interface NavDropomenuButtonProps {
	text: string;
	handleOpen: (event: any) => void;
	handleClose: (event: any) => void;
	anchorEl: Element;
	open: boolean;
	subMenu: Array<{ name: string; url: string }>;
}
const NavDropMenuButton: FC<NavDropomenuButtonProps> = ({
	text,
	handleOpen,
	handleClose,
	anchorEl,
	open,
	subMenu,
}) => {
	const theme = useTheme();
	const navigate = useNavigate();
	const handleLink = (url: string) => {
		navigate(url);
	};
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
				id="fade-button"
				aria-controls={open ? 'fade-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleOpen}
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
			<Menu
				id="fade-menu"
				MenuListProps={{
					'aria-labelledby': 'fade-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				TransitionComponent={Fade}
			>
				{Object.values(subMenu).map((each, i) => (
					<MenuItem
						key={i}
						sx={{
							backgroundColor: 'rgb(255 255 255 / 0%) !important',
							'&:hover': {
								backgroundColor: 'rgb(255 255 255 / 0%) !important',
								color: theme.palette.error.light,
							},
						}}
						onClick={(e) => {
							handleLink(each.url);
							handleClose(e);
						}}
					>
						{each.name}
					</MenuItem>
				))}
			</Menu>
		</Grid>
	);
};

export default NavDropMenuButton;
