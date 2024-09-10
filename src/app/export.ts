import { Palettes } from './theming';
import { huesArray } from './colors';

export const exportPalettes = (p: Palettes): void => {
  const r: Record<keyof Palettes, Record<number, string>> = {
    primary: {},
    secondary: {},
    tertiary: {},
    error: {},
    success: {},
    warning: {},
    neutral: {},
    neutralVariant: {},
  }
  const fill = (key: keyof Palettes) => {
    const palette = p[key];
    if (palette) {
      palette.forEach((color, index) => {
        const hue = huesArray[index];
        r[key][hue] = color
      });
    }
  }

  (['primary', 'secondary', 'tertiary', 'warning', 'error', 'success', 'neutral', 'neutralVariant'] as Array<keyof Palettes>)
    .forEach(key => {
      fill(key);
    });
  const i = document.createElement('a');
  i.href = URL.createObjectURL(new Blob([JSON.stringify(r)]));
  i.download = `Палитра цветов. ${new Date().getTime()}.json`;
  i.click();
  i.remove();
}
