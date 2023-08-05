import { words } from './data/data'
import { word } from './data/decorations';

import decoration from './decoration';

export default () => {
   decoration(words, word);
};