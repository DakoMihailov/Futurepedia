import { FC, Fragment, useState } from 'react';
import { RichTextEditor } from '@mantine/rte';
import { InputLabel, useTheme } from '@mui/material';

const TextEditor: FC = () => {
	const theme = useTheme();
	const [value, onChange] = useState('');
	return (
		<Fragment>
			<InputLabel
				sx={{ color: theme.palette.text.secondary, marginBottom: '8px' }}
			>
				Tool Description (Optional)
			</InputLabel>
			<RichTextEditor
				controls={[
					['bold', 'italic', 'link'],
					['unorderedList', 'h1', 'h2', 'h3'],
				]}
				value={value}
				onChange={onChange}
				sx={{
					backgroundColor: theme.palette.primary.main,
					color: `${theme.palette.text.primary} !important`,
					border: `1px solid ${theme.palette.divider} !important`,
					'& .mantine-RichTextEditor-toolbar': {
						backgroundColor: `${theme.palette.primary.main} !important`,
						borderBottom: `1px solid ${theme.palette.divider} !important`,
					},
					'& .mantine-RichTextEditor-control': {
						backgroundColor: `${theme.palette.primary.main} !important`,
						color: `${theme.palette.text.primary} !important`,
						borderColor: 'rgb(222, 226, 230) !important',
					},
				}}
			/>
		</Fragment>
	);
};

export default TextEditor;
