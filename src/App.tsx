import CssBaseline from '@mui/material/CssBaseline';
import Home from './Coponents/Home';
import { ThemeProvider } from './Coponents/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      {
        <>
          <CssBaseline />
          <Home />
        </>
      }
    </ThemeProvider>
  );
}

export default App;
