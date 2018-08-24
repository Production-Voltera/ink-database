// @flow

import Ink from 'modules/ink';

export default new Ink({
  type: 'Sn63 Solder Paste',
  name: 'TinyWolf',
  organization: 'Voltera',

  lot: 'Pbaste - 510009-3828',
  useBy: '2019-08-01',
  storage: '4°C – 10°C',

  description: `
    A T5, Sn63 formulation that offers superior performance
    on prefabbed boards with a lead-based HASL finish. The
    smaller particle size (T5) improves dispensing and reduces
    nozzle clogging. This paste is not compatable with
    V-One-printed PCBs.
  `,

  label: {
    type: 'Sn63 SOLDER PASTE T5',
    color: '#4778b4',
  },

  settings: {
    probing: {
      probePitch: { min: 0.1, max: 10, precision: 1, defaultValue: 5 },
    },
    dispensing: {
      trimLength: { min: 1, max: 9999, precision: 0, defaultValue: 30 },
      tracePadPenetration: {
        min: -5,
        max: 5,
        precision: 2,
        defaultValue: 0.15,
      },
      dispenseHeight: { min: 0.01, max: 1, precision: 2, defaultValue: 0.08 },
      feedrate: { min: 0, max: 900, precision: 0, defaultValue: 600 },
      passSpacing: { min: 0.1, max: 1, precision: 2, defaultValue: 0.15 },
      antiString: { min: 0.1, max: 5, precision: 1, defaultValue: 0.1 },
      kick: { min: 0.05, max: 2, precision: 2, defaultValue: 0.4 },
      softStart: { min: 0, max: 1, precision: 2, defaultValue: 0.05 },
      softStop: { min: 0, max: 1, precision: 2, defaultValue: 0.05 },
      rheologicalSetpoint: { min: 0, max: 1, precision: 2, defaultValue: 0.27 },
    },
  },

  heatingProfile: [
    { temperature: 180, duration: 45 },
    { temperature: 220, duration: 30 },
    { temperature: 60, duration: 1 },
  ],
});
