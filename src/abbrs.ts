import fetch from './lib/fetch';

export type Abbr = {
   // ...
   abbrs: Array<{
      abbr: string
      // ...
   }>
   word: string;
};

const origin = 'https://raw.githubusercontent.com/abbrcode/db/main/abbrs/.json';

export default async () => await fetch(origin) as Abbr[];