import { Injectable } from '@angular/core';
import  * as localforage from 'localforage';

import { EmojiTheme, Unit, Settings } from 'app/models/settings';

@Injectable()
export class SettingsService {
  private settings: Settings;

  public themes: EmojiTheme[] = [
    {empty: '◻', filled: '◼', name: 'squares'},
    {empty: '🖤', filled: '💙', name: 'hearts_blue'},
    {empty: '❎', filled: '✅', name: 'checkmark'},
    {empty: '❕', filled: '❗', name: 'exclamation_mark'},
    {empty: '🔹', filled: '🔷', name: 'diamonds_blue'},
    {empty: '💸', filled: '💵', name: 'bucks'},
  ];

  public units: Unit[] = ['APs', 'MPs', 'EPs', 'SPs', 'HPs', 'Spoons', 'Feelsbucks'];

  constructor() {
    localforage.getItem('settings')
    .then((settings) => {
      if (settings) {
        this.settings = settings as Settings;
      } else {
        this.settings = {
          unit: 'APs',
          emojiTheme: this.themes[4],
          maxAmount: 10,
        };

        localforage.setItem('settings', this.settings);
      }
    });
  }

  getSettings (): Settings {
    return this.settings;
  }

  changeSetting (setting, value): void {
    if (this.settings[setting]) {
      this.settings[setting] = value;
    }
  }
}
