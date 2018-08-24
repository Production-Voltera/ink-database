// @flow

import Ink from 'modules/ink';

export default new Ink({
  type: 'Experimental Ink',
  name: 'X100-01',
  organization: 'Voltera',

  lot: '100-01',
  useBy: 'unknown',
  storage: '4°C – 10°C',

  description: `
    An experimental ink formulation that offers superior soldering,
    especially wetting. However, it is more brittle and can fracture
    when pressing rivets. See website for instructions on use.
  `,

  label: {
    type: 'EXPERIMENTAL',
    color: '#f250bf'
  },

  settings: {
    probing: {
      probePitch: { min: 0.1, max: 10, precision: 1, defaultValue: 5 }
    },
    dispensing: {
      trimLength: { min: 1, max: 9999, precision: 0, defaultValue: 30 },
      tracePadPenetration: { min: -5, max: 5, precision: 2, defaultValue: 0.15 },
      dispenseHeight: { min: 0.01, max: 1, precision: 2, defaultValue: 0.08 },
      feedrate: { min: 0, max: 600, precision: 0, defaultValue: 500 },
      passSpacing: { min: 0.1, max: 1, precision: 2, defaultValue: 0.15 },
      antiString: { min: 0.1, max: 5, precision: 1, defaultValue: 2 },
      kick: { min: 0.05, max: 2, precision: 2, defaultValue: 0.2 },
      softStart: { min: 0, max: 1, precision: 2, defaultValue: 0.05 },
      softStop: { min: 0, max: 1, precision: 2, defaultValue: 0.05 },
      rheologicalSetpoint: { min: 0, max: 1, precision: 2, defaultValue: 0.16 },
    }
  },

  heatingProfile: [
    { temperature: 240, duration: 30 * 60 },
    { temperature: 60, duration: 1 },
  ],
});
