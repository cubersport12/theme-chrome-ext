import { PaletteBlock } from './palette-block';
import { MirTheming, Palette, Palettes } from './theming';
import { useEffect, useState } from 'react';

let timer: any;

export function App() {
  const [palettes, setPalettes] = useState<Palettes>({
    primary: [],
    secondary: [],
    tertiary: [],
    success: [],
    warning: [],
    neutralVariant: [],
    error: [],
    neutral: []
  });

  const handleChangePalette = (type: keyof Palettes, p: Palette) => {
    const newPalettes : Palettes = {
      ...palettes,
      [type]: p
    }
    setPalettes(newPalettes);

    const theming = new MirTheming(false);
    const css = theming.getCssContent(newPalettes);
    if (chrome.tabs == null) {
      
    } else {
      chrome.tabs.query({ active: true, currentWindow: true }, async tabs => {
        const activeTab = tabs[0];
        if (activeTab?.id != null) {
          chrome.scripting.insertCSS({
            target: {
              allFrames: true,
              tabId: activeTab.id
            },
            css
          })
        }
      })
    }
  }
  return (
    <div className="flex flex-col gap-1 p-2" style={{ width: 700 }}>
      <PaletteBlock onChangePalette={p => handleChangePalette('primary', p)} color="#abc7ff" name="Primary" description="Описание цвета" />
      <PaletteBlock onChangePalette={p => handleChangePalette('secondary', p)} color="#abc7ff" name="Secondary" description="Описание цвета" />
      <PaletteBlock onChangePalette={p => handleChangePalette('tertiary', p)} color="#abc7ff" name="Tertiary" description="Описание цвета" />
      <PaletteBlock onChangePalette={p => handleChangePalette('error', p)} color="#ffb4a8" name="Error" description="Описание цвета" />
      <PaletteBlock onChangePalette={p => handleChangePalette('success', p)} color="#02e600" name="Success" description="Описание цвета" />
      <PaletteBlock onChangePalette={p => handleChangePalette('warning', p)} color="#ffb787" name="Warning" description="Описание цвета" />
      <PaletteBlock onChangePalette={p => handleChangePalette('neutral', p)} color="#cbc4cf" name="Neutral" description="Описание цвета" />
      <PaletteBlock onChangePalette={p => handleChangePalette('neutralVariant', p)} color="#cbc4cf" name="Neutral Variant" description="Описание цвета" />
    </div>
  );
}

export default App;
