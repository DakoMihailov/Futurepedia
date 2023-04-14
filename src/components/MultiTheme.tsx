import { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { setTheme } from '../store/actions/themeActions';
import { RootState } from '../store';

const MultiTheme: FC = () => {
	const dispatch = useDispatch();
	const defaultTheme = useSelector((state: RootState) => state.theme.theme);
	const [curTheme, setCurTheme] = useState(defaultTheme);
	const reverseTheme = () => {
		if (curTheme === 'dark') return 'light';
		if (curTheme === 'light') return 'dark';
		else return 'dark';
	};

	const changeTheme = () => {
		setCurTheme(reverseTheme());
		dispatch(setTheme(reverseTheme()));
		if (curTheme === 'dark')
			document.querySelector('body')!.style.backgroundColor = 'white';
		else if (curTheme === 'light')
			document.querySelector('body')!.style.backgroundColor = 'rgb(55, 65, 81)';
	};
	return (
		<Button onClick={() => changeTheme()}>
			{curTheme === 'dark' ? (
				<Brightness7Icon sx={{ color: 'white' }}></Brightness7Icon>
			) : (
				<Brightness4Icon sx={{ color: '#616161' }}></Brightness4Icon>
			)}
		</Button>
	);
};

export default MultiTheme;
