import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Nav from './components/Nav';
import { Container, Box, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#121212',
      },
      primary: {
        main: '#ffeb3b',
      },
    },
  });
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box>
          <Nav />
        </Box>
      <Container>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
