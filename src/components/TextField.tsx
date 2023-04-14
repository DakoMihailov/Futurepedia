import { useTheme, TextField, InputLabel } from '@mui/material';
import { FC, Fragment } from 'react';
interface FieldProps {
	text: string;
	label: string;
	multiline: boolean;
}
export const CustomizedInputs: FC<FieldProps> = ({
	text,
	label,
	multiline,
}) => {
	const theme = useTheme();
	return (
		<Fragment>
			<InputLabel
				sx={{ color: theme.palette.text.secondary, marginBottom: '8px' }}
			>
				{label}
			</InputLabel>
			<TextField
				fullWidth
				sx={{
					'&:focus-within fieldset': {
						border: '1px solid',
						borderColor: `${theme.palette.error.light} !important`,
						borderRadius: '4px',
					},
				}}
				placeholder={text}
				multiline={multiline}
			></TextField>
		</Fragment>
	);
};

export default CustomizedInputs;
