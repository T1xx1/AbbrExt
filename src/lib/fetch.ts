import * as https from 'https';

export default <T>(url: string) => {
   return new Promise<T>((res, reject) => {
      https.get(url, cb => {
         let data = '';

         cb.on('data', bytes => data += bytes);
         cb.on('end', () => res(JSON.parse(data)));
      }).on('error', err => reject(err));
   });
};