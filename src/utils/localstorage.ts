import { ITheme } from '../interfaces/theme.interface';

export const getLocalstorageTheme = (): ITheme | null => JSON.parse(localStorage.getItem('theme')!);

export const setLocalstorageTheme = (theme: ITheme): void => localStorage.setItem('theme', JSON.stringify(theme));
