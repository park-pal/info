import React, { useEffect, useState } from 'react';

import Home from './Home.js';
import About from './About.js';
import Terms from './Terms.js';
import Contact from './Contact.js';

const MainContent = ({ page }) => {

    const [activePage, setActivePage] = useState('');

    useEffect(() => {
      const activePageKey = Object.keys(page).find((key) => page[key]);
      setActivePage(activePageKey);
    }, [page]);

    return (
        <div>
            {
                activePage === 'home' ? <Home /> :
                activePage === 'about' ? <About /> :
                activePage === 'terms' ? <Terms />:
                activePage === 'contact' ? <Contact />:
                null
            }
        </div>
    );
    };

export default MainContent;