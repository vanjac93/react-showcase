import { BackgroundProps, ColorProps, LayoutProps, SpaceProps } from 'styled-system';

export interface DividerProps extends BackgroundProps, SpaceProps, LayoutProps, Omit<ColorProps, 'color'> {
  $vertical?: boolean;
}
