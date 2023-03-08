import React, { useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import ThemeContext from './ThemeContext';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleChange = () => {
    toggleTheme();
  };

  return (
    <Switch
      checked={theme === 'dark'}
      onChange={handleChange}
      name="theme-switch"
      inputProps={{ 'aria-label': 'toggle theme' }}
    />
  );
};

export default ThemeSwitch;
