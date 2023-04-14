import { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { setLanguage } from '../store/actions/languageActions';
import { Flag } from 'react-svg-country-flags';
import { RootState } from '../store';

const MultiLang: FC = () => {
	const dispatch = useDispatch();
	const defaultLang = useSelector((state: RootState) => state.lang.language);
	const [curLang, setCurLang] = useState(defaultLang);
	const changeLang = (event: SelectChangeEvent<string>) => {
		setCurLang(event.target.value);
		dispatch(setLanguage(event.target.value));
	};
	return (
		<Select
			sx={{
				boxShadow: 'none',
				'.MuiOutlinedInput-notchedOutline': { border: 0 },
			}}
			value={curLang}
			onChange={changeLang}
			autoWidth
			inputProps={{ 'aria-label': 'Without label' }}
		>
			<MenuItem value="US">
				<em>
					<Flag country="US" className="w-12" />
				</em>
			</MenuItem>
			<MenuItem value="RU">
				<Flag country="RU" className="w-12" />
			</MenuItem>
		</Select>
	);
};

export default MultiLang;
