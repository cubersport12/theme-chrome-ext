import { generateShades } from './colors';
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import { Palette } from './theming';

export const PaletteBlock =  ({ color, name, description, onChangePalette }: { color: string; name: string; description: string; onChangePalette: (byColor: string, palette: Palette) => void }) => {
  const [value, setValue] = useState(color);
  const [shades, setShades] = useState<string[]>([]);
  useEffect(() => {
    const newShades = generateShades(value);
    setShades(newShades);
  }, [value])
  const handleChangeColor: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChangePalette(value, generateShades(e.target.value));
  }
  return <div className="flex gap-1 p-1 rounded-md bg-gray-100 h-12 items-center">
    <div className="rounded-full cursor-pointer w-9 h-9" style={{ backgroundColor: value }}>
      <input className="opacity-0 cursor-pointer" type="color" value={value} onChange={handleChangeColor} />
    </div>
    <div className="flex flex-col" style={{ width: 106 }}>
      <p>{name}</p>
      <small className="text-gray-400">{description}</small>
    </div>
    <div className="flex">
      {shades.map((x, i) => <div className="w-5 h-9" key={i} style={{ backgroundColor: x }}></div>)}
    </div>
  </div>
}
