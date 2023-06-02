import fetch from './lib/fetch';

export type Abbr = {
   // ...
   abbrs: Array<{
      abbr: string
      // ...
   }>
   word: string;
};

const orig = 'https://raw.githubusercontent.com/abbrcode/db/main/abbrs/.json';

export default async () => await fetch(orig) as Abbr[];