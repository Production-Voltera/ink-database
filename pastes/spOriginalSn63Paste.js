// @flow

import Ink from 'modules/ink';
import path from 'path';
import { resourcesPath } from 'process';

// Use svgs for original pastes
const pastesResourceDir = process.env.NODE_ENV === 'production' ?
  `${resourcesPath}/procedures/solder/pastes` :
  'features/procedures/solder/settings/pastes'
;

export default new Ink({
  type: 'Sn63 Solder Paste',
  name: 'OriginalSn63Paste',
  organization: 'Voltera',

  lot: 'N/A',
  useBy: '2017-12-22',
  storage: '4°C – 10°C',

  description: `
    Use this lot for all Sn63 Solder Paste shipped before October 2017.
    This paste is not compatable with V-One-printed PCBs.
  `,

  label: {
    imgPath: path.join(pastesResourceDir, 'spOriginalSn63Paste.svg')
  },

  settings: {
    probing: {
      probePitch: { min: 0.1, max: 10, precision: 1, defaultValue: 5 }
    },
    dispensing: {
      trimLength: { min: 1, max: 9999, precision: 0, defaultValue: 45 },
      tracePadPenetration: { min: -5, max: 5, precision: 2, defaultValue: 0.15 },
      dispenseHeight: { min: 0.01, max: 1, precision: 2, defaultValue: 0.14 },
      feedrate: { min: 0, max: 900, precision: 0, defaultValue: 600 },
      passSpacing: { min: 0.1, max: 1, precision: 2, defaultValue: 0.15 },
      antiString: { min: 0.1, max: 5, precision: 1, defaultValue: 0.1 },
      kick: { min: 0.05, max: 2, precision: 2, defaultValue: 0.3 },
      softStart: { min: 0, max: 1, precision: 2, defaultValue: 0.05 },
      softStop: { min: 0, max: 1, precision: 2, defaultValue: 0.05 },
      rheologicalSetpoint: { min: 0, max: 1, precision: 2, defaultValue: 0.16 },
    }
  },

  heatingProfile: [
    { temperature: 180, duration: 45 },
    { temperature: 220, duration: 30 },
    { temperature: 60, duration: 1 },
  ],
});
