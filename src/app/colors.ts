export const huesArray = [0, 4, 6, 10, 12, 17, 20, 22, 24, 25, 30, 35, 40, 50, 60, 70, 80, 87, 90, 92, 94, 95, 96, 98, 99, 100];

export const generateShades = (color: string): string[] => {
  const shades: string[] = [];

  // Преобразование HEX в RGB
  const rgb = hexToRgb(color);

  console.info(calculateHue(rgb));
  huesArray.forEach(hue => {
    const shade = getShade(rgb, hue);
    shades.push(rgbToHex(shade));
  });

  return shades;
}

const calculateHue = (rgb: [number, number, number]) => {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;

  if (r < 0 || r > 1 || g < 0 || g > 1 || b < 0 || b > 1) {
    throw new Error("RGB values must be in the range [0, 1].");
  }

  // Find the maximum and minimum of r, g, b
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;

  if (max === min) {
      // If max equals min, the color is achromatic (gray)
      h = 0; // Define hue as 0 for grayscale
  } else {
      const d = max - min;
      switch (max) {
          case r:
              h = ((g - b) / d + (g < b ? 6 : 0)) * 60;
              break;
          case g:
              h = ((b - r) / d + 2) * 60;
              break;
          case b:
              h = ((r - g) / d + 4) * 60;
              break;
      }
  }

  // Wrap the hue value to ensure it's in the range [0, 360)
  return (h + 360) % 360;
}

const rgbToHex = ([r, g, b]: [number, number, number]): string => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

const getShade = (rgb: [number, number, number], percentage: number): [number, number, number] => {
  const [r, g, b] = rgb;
  if (percentage >= 0) {
    const factor = percentage / 100;

    return [
      Math.round(r * factor),
      Math.round(g * factor),
      Math.round(b * factor),
    ];
  }

  return [Math.round(Math.min(255, r + (255 - r) * (percentage / 100))), Math.round(Math.min(255, g + (255 - g) * (percentage / 100))), Math.round(Math.min(255, b + (255 - b) * (percentage / 100)))];
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