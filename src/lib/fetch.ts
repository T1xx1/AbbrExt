import * as https from 'https';

export default async (url: string) => {
   return new Promise((resolve, reject) => {
      https.get(url, res => {
         let data = '';

         res.on('data', bytes => data += bytes);
         res.on('end', () => resolve(JSON.parse(data)));
      }).on('error', err => reject(err));
   });
};