const ghRemote = {
   origin: 'https://raw.githubusercontent.com',
   user: 'abbrcode',
   repo: 'db',
   branch: 'main',
   path: 'abbrs',
   file: '.json'
};

export default Object.values(ghRemote).join('/');