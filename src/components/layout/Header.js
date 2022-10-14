import ToggleMode from '../ToggleMode';

function Header({handleToggle,theme}) {

    const setTheme = (newTheme) =>{
        handleToggle(newTheme);
    }

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