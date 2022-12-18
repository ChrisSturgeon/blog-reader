import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import useCheckMobileScreen from './Hooks/useWindowDimensions';

// Component imports
import Sidebar from './Components/Sidebar/Sidebar';
import MobileSidebar from './Components/MobileSidebar/MobileSidebar';
import MobileNavbar from './Components/MobileNavbar/MobileNavbar';
import Home from './Components/Home/Home';
import Summaries from './Components/Summaries/Summaries';
import Post from './Components/Post/Post';
import NotFound from './Components/NotFound/NotFound';

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const isMobile = useCheckMobileScreen();

  // Toggles mobile side navbar open/closed
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="column-wrapper">
      {isMobile ? (
        <>
          <MobileNavbar toggleNav={toggleNav} />
          <MobileSidebar navOpen={navOpen} toggleNav={toggleNav} />
        </>
      ) : (
        <Sidebar />
      )}

      <Routes>
        <Route path="/" element={<Home isMobile={isMobile} />} />
        <Route path="/posts/all" element={<Summaries />} />
        <Route path="/posts/:postId" element={<Post />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
