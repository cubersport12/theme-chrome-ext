import { PaletteBlock } from './palette-block';
import { InitialColors, MirTheming, Palette, Palettes } from './theming';
import { useEffect, useState } from 'react';
import { getSourceColorVarName } from './tokens';
import { exportPalettes } from './export';

const LS_KEY = 'theme-chrome-ext';

const defaultColor: InitialColors = {
  primary: '#abc7ff',
  secondary: '#abc7ff',
  tertiary: '#abc7ff',
  error: '#ffb4a8',
  neutral: '#cbc4cf',
  neutralVariant: '#cbc4cf',
  success: '#02e600',
  warning: '#ffb787',
};

export function App() {
  const [palettes, setPalettes] = useState<Palettes | undefined>(undefined);
  const [isDark, setIsDark] = useState<boolean>(false);
  const [colors, setColors] = useState(() => {
    let r: InitialColors | undefined;
    try {
      r = Object.assign(defaultColor, JSON.parse(localStorage.getItem(LS_KEY) ?? ''));
    } catch {
      /* empty */
    }
    return r ?? defaultColor;
  });

  useEffect(() => {
    if (Object.keys(colors).length) {
      localStorage.setItem(LS_KEY, JSON.stringify(colors));
    }
  }, [colors]);

  const handleChangePalette = (
    type: keyof Palettes,
    byColor: string,
    p: Palette
  ) => {
    const newPalettes: Palettes = {
      ...(palettes ?? {}),
      [type]: p,
    };
    setColors({
      ...(colors ?? {}),
      [type]: byColor,
    });
    setPalettes(newPalettes);
    document.body.style.setProperty(getSourceColorVarName(type), byColor);

    const theming = new MirTheming(isDark);
    const css = theming.getCssContent(newPalettes);
    if (chrome.tabs == null) {
      const style = document.createElement('style');
      style.innerHTML = css;
      document.head.appendChild(style);
    } else {
      chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
        const activeTab = tabs[0];
        if (activeTab?.id != null) {
          chrome.scripting.insertCSS({
            target: {
              allFrames: true,
              tabId: activeTab.id,
            },
            css,
          });
        }
      });
    }
  };
  const handleExport = () => {
    if (palettes != null) {
      exportPalettes(palettes)
    }
  }

  return (
    <div className="flex flex-col gap-1 p-2" style={{ width: 700 }}>
      <PaletteBlock
        onChangePalette={(c, p) => handleChangePalette('primary', c, p)}
        color={colors.primary}
        name="Primary"
        description="Описание цвета"
      />
      <PaletteBlock
        onChangePalette={(c, p) => handleChangePalette('secondary', c, p)}
        color={colors.secondary}
        name="Secondary"
        description="Описание цвета"
      />
      <PaletteBlock
        onChangePalette={(c, p) => handleChangePalette('tertiary', c, p)}
        color={colors.tertiary}
        name="Tertiary"
        description="Описание цвета"
      />
      <PaletteBlock
        onChangePalette={(c, p) => handleChangePalette('error', c, p)}
        color={colors.error}
        name="Error"
        description="Описание цвета"
      />
      <PaletteBlock
        onChangePalette={(c, p) => handleChangePalette('success', c, p)}
        color={colors.success}
        name="Success"
        description="Описание цвета"
      />
      <PaletteBlock
        onChangePalette={(c, p) => handleChangePalette('warning', c, p)}
        color={colors.warning}
        name="Warning"
        description="Описание цвета"
      />
      <PaletteBlock
        onChangePalette={(c, p) => handleChangePalette('neutral', c, p)}
        color={colors.neutral}
        name="Neutral"
        description="Описание цвета"
      />
      <PaletteBlock
        onChangePalette={(c, p) => handleChangePalette('neutralVariant', c, p)}
        color={colors.neutralVariant}
        name="Neutral Variant"
        description="Описание цвета"
      />
      <div className="flex gap-1 items-center justify-end">
        <div className="flex gap-1 items-center">
          <input checked={isDark} onChange={e => setIsDark(e.target.checked)} className="cursor-pointer" type="checkbox" id="theme-type" />
          <label className="cursor-pointer" htmlFor="theme-type">Темная тема</label>
        </div>
        <button disabled={palettes == null} onClick={handleExport} type="button" className="bg-blue-300 cursor-pointer p-2 rounded-md hover:bg-blue-200">
          Сохранить
        </button>
      </div>
    </div>
  );
}

export default App;
