import { saveTheme } from './local-storage-api';

export function onChangeTheme(event) {
  const isDark = document.body.classList.contains('theme-dark');
  const newTheme = isDark ? 'theme-light' : 'theme-dark';

  document.body.classList.replace(
    isDark ? 'theme-dark' : 'theme-light',
    newTheme
  );

  saveTheme(newTheme);
}
