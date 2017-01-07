export interface EmojiTheme {
  empty: string;
  filled: string;
  name: string;
}

export type Unit = 'APs' | 'MPs' | 'EPs' | 'SPs' | 'HPs' | 'Spoons' | 'Feelsbucks';

export interface Settings {
  unit: Unit;
  emojiTheme: EmojiTheme;
  maxAmount: number;
}
