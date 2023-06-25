import fetch from './lib/fetch';

const abbrRemote = 'https://raw.githubusercontent.com/abbrcode/db/main/abbrs/.json';

type Abbr = {
   abbrs: {
      abbr: string;
      degree: string;
      // ...
   }[];
   // ...
   word: string;
};

let abbrsJson = await fetch(abbrRemote) as Abbr[];

export const words = abbrsJson.map(obj => obj.word)

/* export const words = abbrsJson.filter(obj => {
   let hasRecommendation = false;

   for (let abbr of obj.abbrs) {
      if (abbr.degree === 'green') hasRecommendation = true;
   }

   if (hasRecommendation) return obj.word;
}).map(obj => obj.word);

export const abbrs = abbrsJson.filter(obj => {
   for (let abbrObj of obj.abbrs) {
      if (abbrObj.degree === 'green') return abbrObj.abbr;
   }
}).map(obj => {
   for (let abbrObj of obj.abbrs) {
      if (abbrObj.degree === 'green') return abbrObj.abbr;
   }
}); */