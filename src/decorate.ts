import { words } from './data';
import { word as wordDecoration } from './decorations';

import decoration from './decoration';

export default () => {
   decoration(words, wordDecoration);
};