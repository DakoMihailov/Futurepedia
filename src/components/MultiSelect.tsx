import { FC, Fragment } from 'react';
import TextField from '@mui/material/TextField';
import { useTheme, Autocomplete } from '@mui/material';

const top100Films = [
	{ title: 'The Shawshank Redemption', year: 1994 },
	{ title: 'The Godfather', year: 1972 },
	{ title: 'The Godfather: Part II', year: 1974 },
	{ title: 'The Dark Knight', year: 2008 },
	{ title: '12 Angry Men', year: 1957 },
	{ title: "Schindler's List", year: 1993 },
	{ title: 'Pulp Fiction', year: 1994 },
];
const MultiSelect: FC = () => {
	const theme = useTheme();
	return (
		<Fragment>
			<Autocomplete
				multiple
				options={top100Films}
				getOptionLabel={(option) => option.title}
				renderInput={(params) => (
					<TextField
						sx={{
							'& .MuiInput-root': {
								padding: '4px 4px 4px 0px',
							},
							'& .MuiAutocomplete-root-MuiAutocomplete-paper': {
								color: 'red',
							},
							'&:focus': {
								'& .MuiFormLabel-root': {
									color: theme.palette.error.main,
								},
							},
							'& .MuiAutocomplete-option': {
								backgroundColor: 'rgb(146 156 171)',
							},
							'& .MuiInput-root:after': {
								borderBottom: '2px solid #0ea5e9',
							},
						}}
						{...params}
						variant="standard"
						label="Categories"
						placeholder="Please select categories that fit the tool"
					/>
				)}
			/>
		</Fragment>
	);
};

export default MultiSelect;
