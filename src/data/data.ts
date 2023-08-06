import type { Abbr } from '../types/abbr';

import fetch from '../lib/fetch';

import remote from './remote';

const abbrsJson = await fetch<Abbr[]>(remote);

export const words = abbrsJson.filter(abbr => {
   for (const a of abbr.abbrs) {
      if (a.degree === 'green') return abbr;
   }
}).map(abbr => abbr.word);

export const abbrs = abbrsJson.map(abbr => {
   const abbrs: string[] = [];

   for (const a of abbr.abbrs) {
      if (a.degree === 'green') abbrs.push(a.abbr);
   }

   return abbrs;
}).reduce((res, subArr) => res.concat(subArr), []);

export const notRecommendeds = abbrsJson.map(abbr => {
   const abbrs: string[] = [];

   for (const a of abbr.abbrs) {
      if (a.degree === 'red') abbrs.push(a.abbr);
   }

   return abbrs;
}).reduce((res, subArr) => res.concat(subArr), []);