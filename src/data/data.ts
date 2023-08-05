import type { Abbr } from '../types/abbr';

import fetch from '../lib/fetch';

import remote from './remote';

const abbrsJson = await fetch<Abbr[]>(remote);

export const words = abbrsJson.filter(obj => {
   // Filter only recommended abbrs
   let isRecommended = false;

   for (let abbr of obj.abbrs) {
      if (abbr.degree === 'green') isRecommended = true;
   }

   if (isRecommended) return obj.word;
}).map(obj => obj.word);

/*
export const abbrs = abbrsJson.filter(obj => {
   for (let abbrObj of obj.abbrs) {
      if (abbrObj.degree === 'green') return abbrObj.abbr;
   }
}).map(obj => {
   for (let abbrObj of obj.abbrs) {
      if (abbrObj.degree === 'green') return abbrObj.abbr;
   }
});
*/