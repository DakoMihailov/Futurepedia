import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import { PaletteMode, ThemeProvider, createTheme } from '@mui/material';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Landing from './pages/Landing';
import SubmitTool from './pages/SubmitTool';
import SubmitNews from './pages/SubmitNews';
import News from './pages/News';
import { RootState } from './store';
import { getDesignTokens } from './theme';

const App: FC = () => {
	const mode = useSelector((state: RootState) => state.theme.theme);
	const theme = createTheme(getDesignTokens(mode));

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/submit-tool" element={<SubmitTool />} />
					<Route path="/submit-news" element={<SubmitNews />} />
					<Route path="/news" element={<News />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</ThemeProvider>
	);
};

export default App;
