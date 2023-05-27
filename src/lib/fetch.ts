import * as https from 'https';

export default async (url: string) => {
   return new Promise((resolve, reject) => {
      https.get(url, response => {
         let data = '';

         response.on('data', chunk => data += chunk);
         response.on('end', () => resolve(JSON.parse(data)));
      }).on('error', err => reject(err));
   });
};