import { abbrs, words } from './data/data'
import { abbr, word } from './data/decorations';

import decoration from './decoration';

export default () => {
   decoration(words, word);
   decoration(abbrs, abbr);
};