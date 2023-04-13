import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material'
import { getDesignTokens } from './theme'
import { useSelector } from 'react-redux'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Landing from './pages/Landing'
import SubmitTool from './pages/SubmitTool'
import SubmitNews from './pages/SubmitNews'
import News from './pages/News'

const App: FC = () => {
  const mode = useSelector((state: any) => state.theme.theme)
  const theme = createTheme(getDesignTokens(mode))
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
  )
}

export default App
