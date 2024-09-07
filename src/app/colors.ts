export const huesArray = [0, 4, 6, 10, 12, 17, 20, 22, 24, 25, 30, 35, 40, 50, 60, 70, 80, 87, 90, 92, 94, 95, 96, 98, 99, 100];

export const generateShades = (color: string): string[] => {
  const shades: string[] = [];

  // Преобразование HEX в RGB
  const rgb = hexToRgb(color);

  huesArray.forEach(hue => {
    const shade = getShade(rgb, hue);
    shades.push(rgbToHex(shade));
  });

  return shades;
}

const rgbToHex = ([r, g, b]: [number, number, number]): string => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

const getShade = (rgb: [number, number, number], percentage: number): [number, number, number] => {
  const [r, g, b] = rgb;
  const factor = percentage / 100;

  return [
    Math.round(r * factor),
    Math.round(g * factor),
    Math.round(b * factor),
  ];
}

const hexToRgb = (hex: string): [number, number, number] => {
  let r = 0, g = 0, b = 0;

  // Удаляем символ '#' и парсим
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  }

  return [r, g, b];
}
