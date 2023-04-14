import { FC, useState } from 'react';
import {
	InputLabel,
	MenuItem,
	Select,
	FormControl,
	useTheme,
	SelectChangeEvent,
} from '@mui/material';
interface FieldProps {
	label: string;
	// multiline: boolean;
}

const unis = [
	{ value: '1', label: 'd' },
	{ value: '2', label: 'dc' },
];
const SelectField: FC<FieldProps> = ({ label }) => {
	const theme = useTheme();
	const [value, setValue] = useState('1');
	const handleValueChange = (event: SelectChangeEvent<string>) => {
		setValue(event.target.value);
	};
	return (
		<div>
			<FormControl sx={{ m: 1, minWidth: 120 }} error>
				<InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
				<Select
					labelId="demo-simple-select-helper-label"
					id="demo-simple-select-helper"
					value={value}
					defaultValue={value}
					label={label}
					autoWidth
					onChange={handleValueChange}
					sx={{
						'& .MuiOutlinedInput-notchedOutline': {
							borderWidth: '1px !important',
							borderColor: '#656d79 !important',
							borderRadius: '15px',
						},
						'&:hover': {
							'& .MuiOutlinedInput-notchedOutline': {
								borderColor: `${theme.palette.error.main} !important`,
							},
						},
						'&:active': {
							'& .MuiOutlinedInput-notchedOutline': {
								borderColor: `${theme.palette.error.light} !important`,
							},
						},
					}}
				>
					{unis.map((u, i) => (
						<MenuItem
							value={u.value}
							key={i}
							sx={{
								backgroundColor: 'rgb(255 255 255 / 0%) !important',
								'&:hover': {
									backgroundColor: 'rgb(255 255 255 / 5%) !important',
								},
							}}
						>
							{u.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};

export default SelectField;
