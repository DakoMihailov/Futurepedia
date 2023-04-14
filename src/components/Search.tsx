import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material';
import { FC } from 'react';

const top100Films = [
	{ title: '12 Angry Men', year: 1957 },
	{ title: "Schindler's List", year: 1993 },
];

const Search: FC = () => {
	const theme = useTheme();
	const options = top100Films.map((option) => {
		return {
			firstLetter: 'Categories',
			...option,
		};
	});

	const GroupItems = styled('ul')({
		padding: 0,
	});

	const GroupHeader = styled('div')({
		position: 'sticky',
		top: '-8px',
		padding: '4px 10px',
		color: theme.palette.text.secondary,
		// backgroundColor: theme.palette.primary.main,
	});

	return (
		<Autocomplete
			id="grouped-demo"
			options={options.sort(
				(a, b) => -b.firstLetter.localeCompare(a.firstLetter)
			)}
			groupBy={(option) => option.firstLetter}
			getOptionLabel={(option) => option.title}
			sx={{
				'&:focus-within': {
					'& .MuiOutlinedInput-notchedOutline': {
						borderColor: `${theme.palette.error.light} !important`,
					},
				},
				'& .MuiOutlinedInput-root': {
					borderRadius: '15px !important',
				},
				width: '100%',
			}}
			popupIcon={<SearchIcon />}
			clearIcon={<ClearIcon />}
			renderInput={(params) => <TextField {...params} />}
			renderGroup={(params) => (
				<li key={params.key}>
					<GroupHeader>{params.group}</GroupHeader>
					<GroupItems>{params.children}</GroupItems>
				</li>
			)}
		/>
	);
};

export default Search;
