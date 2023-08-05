import { Range, TextEditorDecorationType, window } from 'vscode';

import capitalize from './lib/capitalize';

export default (words: string[], decoration: TextEditorDecorationType) => {
   const activeEditor = window.activeTextEditor;

   if (!activeEditor) return;

   const document = activeEditor.document;

   const rngs = [];

   for (const word of words) {
      const regex = new RegExp(`\\b${word}(\\b|[A-Z])|[a-z]${capitalize(word)}(\\b|[A-Z])`, 'g');

      const matches = [...document.getText().matchAll(regex)];

      for (const match of matches) {
         const pos = {
            start: document.positionAt(match.index!),
            end: document.positionAt(match.index! + match[0].length)
         };

         rngs.push(new Range(pos.start, pos.end));
      }
   }

   activeEditor.setDecorations(decoration, rngs);
};