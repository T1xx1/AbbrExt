import { Range, TextEditorDecorationType, window } from 'vscode';

export default (words: string[], decoration: TextEditorDecorationType) => {
   const activeEditor = window.activeTextEditor;

   if (!activeEditor) return;

   const document = activeEditor.document;

   const rngs = [];

   for (const word of words) {
      // Exact match 'word'
      let exact = `\\b${word}\\b`;
      // Camel case match 'thisWord'
      let camelCase = `\\w${word[0].toUpperCase() + word.slice(1)}(\\b|[A-Z])`;

      const regex = new RegExp([exact, camelCase].join('|'), 'g');

      const matches = [...document.getText().matchAll(regex)];

      for (let match of matches) {
         const startPos = document.positionAt(match.index!);
         const endPos = document.positionAt(match.index! + match[0].length);

         rngs.push(new Range(startPos, endPos));
      }
   }

   activeEditor.setDecorations(decoration, rngs);
};