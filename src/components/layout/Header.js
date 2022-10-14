import { useState } from 'react';
import ToggleMode from '../ToggleMode';

function Header() {

    const [theme, setTheme] = useState('theme' ? 'light' : 'dark');

    return (
        <nav className='navbar'>
            <div className='container ctn-between'>
                <a href="#home"><h1>MY TODO LIST</h1></a>
                <ToggleMode 
                theme={theme}
                setTheme={setTheme}
                />
            </div>
        </nav>
    )
}

export default Header;