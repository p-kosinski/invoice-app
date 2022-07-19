import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { selectThemeMode, setThemeMode } from '../../../redux/themeSlice';
import type { ThemeMode } from '../../../redux/themeSlice';

import Styled from './Styled';

import { ReactComponent as SunIcon } from '../../../assets/icon-sun.svg';
import { ReactComponent as MoonIcon } from '../../../assets/icon-moon.svg';

const ThemeToggler: React.FC = () => {
  const dispatch = useAppDispatch();
  const themeMode: ThemeMode = useAppSelector(selectThemeMode);

  const changeThemeMode = (mode: ThemeMode) => {
    dispatch(setThemeMode(mode));
  };

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      changeThemeMode('dark');
    } else {
      changeThemeMode('light');
    }
  }, []);

  const handleThemeToggle = (themeMode: ThemeMode) => {
    if (themeMode === 'light') {
      changeThemeMode('dark');
    } else {
      changeThemeMode('light');
    }
  };

  return (
    <Styled.ThemeToggleButton
      onClick={() => handleThemeToggle(themeMode)}
      aria-label={
        themeMode === 'dark' ? 'set light color theme'
                                : 'set dark color theme'
      }
    >
      <Styled.LightThemeIconWrapper $active={themeMode === 'dark'}>
        <SunIcon />
      </Styled.LightThemeIconWrapper>
      <Styled.DarkThemeIconWrapper $active={themeMode === 'light'}>
        <MoonIcon />
      </Styled.DarkThemeIconWrapper>
    </Styled.ThemeToggleButton>
  );
};

export default ThemeToggler;
