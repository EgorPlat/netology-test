import { useEffect, useState } from 'react';
import './App.css';
import DesktopPageView from './components/DesktopPageView/DesktopPageView';

function App() {

  const [isMobile, setIsMobile] = useState<boolean>();

  const handleResize = () => {
    console.log(window.innerWidth);
    
    setIsMobile(window.innerWidth < 800);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className='app'>
      {
        !isMobile ? <DesktopPageView /> : null
      }
    </div>
  );
}

export default App;
