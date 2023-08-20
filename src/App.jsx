import CssBaseline from '@mui/material/CssBaseline';
import MainContent from './MainContent';
import LinkDial from './navigation/LinkDial';
import { useMediaQuery } from '@mui/material';
import './App.css';

function App() {
  const min_500 = useMediaQuery('(min-width:500px)');

  return (
    <div className='App'>
      <CssBaseline />
      <MainContent min_500={min_500} />
      {min_500 && <LinkDial />}
    </div>
  )
}

export default App
