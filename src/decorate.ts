import { abbrs, notRecommendeds, words } from './data/data';
import { abbr, notRecommended, word } from './data/decorations';

import decoration from './decoration';

export default () => {
   decoration(words, word);
   decoration(abbrs, abbr);
   decoration(notRecommendeds, notRecommended);
};