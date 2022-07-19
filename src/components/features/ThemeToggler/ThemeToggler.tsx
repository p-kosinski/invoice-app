import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { selectCurrentTheme, setCurrentTheme } from '../../../redux/themeSlice';
import type { ThemeMode } from '../../../redux/themeSlice';

import Styled from './Styled';

import { ReactComponent as SunIcon } from '../../../assets/icon-sun.svg';
import { ReactComponent as MoonIcon } from '../../../assets/icon-moon.svg';

const ThemeToggler: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentTheme: ThemeMode = useAppSelector(selectCurrentTheme);

  const setThemeMode = (mode: ThemeMode) => {
    dispatch(setCurrentTheme(mode));
  };

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setThemeMode('dark');
    } else {
      setThemeMode('light');
    }
  }, []);

  const handleThemeToggle = (currentTheme: ThemeMode) => {
    if (currentTheme === 'light') {
      setThemeMode('dark');
    } else {
      setThemeMode('light');
    }
  };

  return (
    <Styled.ThemeToggleButton
      onClick={() => handleThemeToggle(currentTheme)}
    >
      <Styled.LightThemeIconWrapper $active={currentTheme === 'dark'}>
        <SunIcon />
      </Styled.LightThemeIconWrapper>
      <Styled.DarkThemeIconWrapper $active={currentTheme === 'light'}>
        <MoonIcon />
      </Styled.DarkThemeIconWrapper>
    </Styled.ThemeToggleButton>
  );
};

export default ThemeToggler;
