import { argbFromHex, hexFromArgb, TonalPalette } from '@material/material-color-utilities';

export const huesArray = [0, 4, 6, 10, 12, 17, 20, 22, 24, 25, 30, 35, 40, 50, 60, 70, 80, 87, 90, 92, 94, 95, 96, 98, 99, 100];


export const generateShades = (color: string): string[] => {
  const shades: string[] = [];


  const tonal = TonalPalette.fromInt(argbFromHex(color));
  huesArray.forEach(hue => {
    shades.push(hexFromArgb(tonal.tone(hue)));
  });

  return shades;
}
