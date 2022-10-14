
function ToggleMode({theme, setTheme}) {

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <>
            <div className='group-toggle'>
                <label className='switch' htmlFor="switchTheme">{theme ==='light' ? '🌞' : '🌙'}
                <input onClick={switchTheme} type="checkbox" id="switchTheme" />
                <span className="slider"></span>
                </label>
            </div>
        </>
    )
   
}

export default ToggleMode;