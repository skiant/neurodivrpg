import * as _ from 'lodash';

export enum meterChange {gain, loss};
export const units = ['APs', 'MPs', 'EPs', 'SPs', 'HPs', 'Spoons', 'Feelsbucks'];

type emojiTheme = {
  empty: string,
  filled: string,
  name: string,
}

// Emoji themes
const emojiThemes = [
  {empty: '◻', filled: '◼', name: 'squares'},
  {empty: '🖤', filled: '💙', name: 'hearts_blue'},
  {empty: '❎', filled: '✅', name: 'checkmark'},
  {empty: '❕', filled: '❗', name: 'exclamation_mark'},
  {empty: '🔹', filled: '🔷', name: 'diamonds_blue'},
  {empty: '💸', filled: '💵', name: 'bucks'},
];

export default class Meter {
  max: number = 10;
  current: number = 10;
  unit: string = units[0];
  themeName: string = 'diamonds_blue';
  availableThemes = emojiThemes;
  availableUnits = units;

  getMeter (): string {
    const {max, current, themeName, availableThemes} = this;
    const theme = _.find(availableThemes, {name: themeName});

    return `${theme.filled.repeat(current)}${theme.empty.repeat(max - current)}`;
  }

  changeUnit (selectedUnit: number): void {
    this.unit = units[selectedUnit] || units[0];
  }

  changeAmount (changeType: meterChange, delta: number): void {
    if (changeType === meterChange.gain) {
      this.current = Math.min(this.current + delta, this.max);
    } else {
      this.current = Math.max(this.current - delta, 0);
    }
  }
};
