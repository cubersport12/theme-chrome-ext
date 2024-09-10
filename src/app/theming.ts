import { getVarName, Token } from './tokens';
import { huesArray } from './colors';

export type Palette = string[];

export type Palettes = {
  primary?: Palette;
  secondary?: Palette;
  tertiary?: Palette;
  error?: Palette
  success?: Palette
  warning?: Palette
  neutral?: Palette;
  neutralVariant?: Palette;
}

export type InitialColors = Record<keyof Palettes, string>;

export class MirTheming {
  constructor(private readonly _isDark: boolean) {
  }

  private _findHue(palette: Palette, hue: number): string {
    return palette[huesArray.indexOf(hue)];
  }
  public getCssContent(palettes: Palettes): string {
    const body = document.createElement('body');
    const style = body.style;
    const hues = {
      color: this._isDark ? 80 : 40,
      onColor: this._isDark ? 20 : 100,
      container: this._isDark ? 30 : 90,
      onContainer: this._isDark ? 90 : 10
    }
    const { primary, secondary, tertiary, success, warning, error, neutral, neutralVariant } = palettes;
    if (primary?.length) {
      style.setProperty(getVarName(Token.primary), this._findHue(primary, hues.color));
      style.setProperty(getVarName(Token['on-primary']), this._findHue(primary, hues.onColor));
      style.setProperty(getVarName(Token['primary-container']), this._findHue(primary, hues.container));
      style.setProperty(getVarName(Token['on-primary-container']), this._findHue(primary, hues.onContainer));

      style.setProperty(getVarName(Token.highlight), this._findHue(primary, hues.container));
      style.setProperty(getVarName(Token['on-highlight']), this._findHue(primary, hues.onContainer));
    }

    if (secondary?.length) {
      style.setProperty(getVarName(Token.secondary), this._findHue(secondary, hues.color));
      style.setProperty(getVarName(Token['on-secondary']), this._findHue(secondary, hues.onColor));
      style.setProperty(getVarName(Token['secondary-container']), this._findHue(secondary, hues.container));
      style.setProperty(getVarName(Token['on-secondary-container']), this._findHue(secondary, hues.onContainer));
    }

    if (warning?.length) {
      style.setProperty(getVarName(Token.warning), this._findHue(warning, 60));
      style.setProperty(getVarName(Token['on-warning']), this._findHue(warning, hues.onColor));
      style.setProperty(getVarName(Token['warning-container']), this._findHue(warning, hues.container));
      style.setProperty(getVarName(Token['on-warning-container']), this._findHue(warning, hues.onContainer));
    }

    if (error?.length) {
      style.setProperty(getVarName(Token.error), this._findHue(error, hues.color));
      style.setProperty(getVarName(Token['on-error']), this._findHue(error, hues.onColor));
      style.setProperty(getVarName(Token['error-container']), this._findHue(error, hues.container));
      style.setProperty(getVarName(Token['on-error-container']), this._findHue(error, hues.onContainer));
    }

    if (success?.length) {
      style.setProperty(getVarName(Token.success), this._findHue(success, hues.color));
      style.setProperty(getVarName(Token['on-success']), this._findHue(success, hues.onColor));
      style.setProperty(getVarName(Token['success-container']), this._findHue(success, hues.container));
      style.setProperty(getVarName(Token['on-success-container']), this._findHue(success, hues.onContainer));
    }

    if (neutral?.length) {
      style.setProperty(getVarName(Token.disabled), this._findHue(neutral, 80));
      style.setProperty(getVarName(Token['on-disabled']), this._findHue(neutral, this._isDark ? 60 : 90));

      style.setProperty(getVarName(Token.outline), this._findHue(neutral, this._isDark ? 60 : 50));
      style.setProperty(getVarName(Token['outline-variant']), this._findHue(neutral, this._isDark ? 50 : 80));

      style.setProperty(getVarName(Token.neutral), this._findHue(neutral, this._isDark ? 60 : 50));
      style.setProperty(getVarName(Token['on-neutral']), this._findHue(neutral, this._isDark ? 30 : 80));

      style.setProperty(getVarName(Token['surface-container-lowest']), this._findHue(neutral, this._isDark ? 4 : 100));
      style.setProperty(getVarName(Token['surface-container-low']), this._findHue(neutral, this._isDark ? 10 : 96));
      style.setProperty(getVarName(Token['surface']), this._findHue(neutral, this._isDark ? 6 : 99));
      style.setProperty(getVarName(Token['on-surface']), this._findHue(neutral, this._isDark ? 90 : 10));
      style.setProperty(getVarName(Token['surface-dim']), this._findHue(neutral, this._isDark ? 6 : 87));
      style.setProperty(getVarName(Token['shadow']), '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)');

      style.setProperty(getVarName(Token['hover-color']), `rgba(${this._findHue(neutral, 70)}, 0.2)`)
      style.setProperty(getVarName(Token['input-text-color']), this._findHue(neutral, this._isDark ? 70 : 10))
      style.setProperty(getVarName(Token['input-placeholder']), this._findHue(neutral, this._isDark ? 50 : 70));


      style.setProperty(getVarName(Token['backdrop-background-color']), `rgba(${this._findHue(neutral, 70)}, 0.5)`);
      style.setProperty(getVarName(Token['surface-container']), this._findHue(neutral, this._isDark ? 12 : 94));
      style.setProperty(getVarName(Token['surface-container-high']), this._findHue(neutral, this._isDark ? 17 : 92));
      style.setProperty(getVarName(Token['surface-container-highest']), this._findHue(neutral, this._isDark ? 24 : 90));
    }
    const cssContent = new Map<string, string>();
    Object.values(body.style).forEach(name => {
      if (name.startsWith('--')) {
        const v = body.style.getPropertyValue(name);
        cssContent.set(name, v);
      }
    });
    const selector = this._isDark ? '.mir-dark-theme' : '.mir-light-theme';
    return `
      ${selector} {
        ${Array.from(cssContent.entries()).map(([key, value]) => `${key}: ${value} !important`).join(';\n')}
      }
    `
  }
}
