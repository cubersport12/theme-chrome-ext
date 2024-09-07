export enum Token {
  'hover-color' = 'hover-color',
  'primary' = 'primary',
  'on-primary' = 'on-primary',
  'primary-container' = 'primary-container',
  'on-primary-container' = 'on-primary-container',
  'secondary' = 'secondary',
  'on-secondary' = 'on-secondary',
  'secondary-container' = 'secondary-container',
  'on-secondary-container' = 'on-secondary-container',
  'tertiary' = 'tertiary',
  'error' = 'error',
  'on-error' = 'on-error',
  'error-container' = 'error-container',
  'on-error-container' = 'on-error-container',
  'disabled' = 'disabled',
  'on-disabled' = 'on-disabled',
  'input-control-color' = 'input-control-color',
  'input-placeholder' = 'input-placeholder',
  'success' = 'success',
  'on-success' = 'on-success',
  'success-container' = 'success-container',
  'on-success-container' = 'on-success-container',
  'surface-container-lowest' = 'surface-container-lowest',
  'surface-container-low' = 'surface-container-low',
  'surface-container' = 'surface-container',
  'surface-container-high' = 'surface-container-high',
  'surface-container-highest' = 'surface-container-highest',
  'on-surface' = 'on-surface',
  'surface' = 'surface',
  'inverse-surface' = 'inverse-surface',
  'surface-dim' = 'surface-dim',
  'highlight' = 'highlight',
  'on-highlight' = 'on-highlight',
  'warning' = 'warning',
  'on-warning' = 'on-warning',
  'warning-container' = 'warning-container',
  'on-warning-container' = 'on-warning-container',
  'outline' = 'outline',
  'outline-variant' = 'outline-variant',
  'background' = 'background',
  'scrim' = 'scrim',
  'shadow' = 'shadow',
  'box-shadow' = 'box-shadow',
  'neutral' = 'neutral',
  'on-neutral' = 'on-neutral',
  'neutral-variant' = 'neutral-variant',
  'backdrop-background-color' = 'backdrop-background-color',
  'input-text-color' = 'input-text-color',
}


export const getVarName = (token: Token): string => `--mir-${token}`;