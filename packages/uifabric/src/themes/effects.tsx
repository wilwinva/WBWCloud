import { borderBase } from './borders';

import { IEffects } from '@uifabric/styling';

export interface IExtendedEffects extends IEffects {}

export const effects: IEffects = {
  elevation4: '0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108)',
  elevation8: '0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)',
  elevation16: '0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108)',
  elevation64: '0 25.6px 57.6px 0 rgba(0, 0, 0, 0.22), 0 4.8px 14.4px 0 rgba(0, 0, 0, 0.18)',
  roundedCorner2: borderBase,
};

export const extendedEffects: IExtendedEffects = {
  ...effects,
};
