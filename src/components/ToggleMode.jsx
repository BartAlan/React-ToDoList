import React from 'react';

export default function ToggleMode({theme, setTheme}) {

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <div className='group-toggle'>
            <label className='switch' htmlFor="switchTheme">
                <img className="iconToggle" src={`./assets/${theme === 'light' ? 'sun' : 'moon'}.svg`} />
                <input onClick={switchTheme} type="checkbox" id="switchTheme" />
                <span className="slider"></span>
            </label>
        </div>
    )
   
}
