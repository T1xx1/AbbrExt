import { ExtensionContext, Range, window, workspace } from 'vscode';

import abbrs from './abbrs';
import { word } from './decorations';

export async function activate(ctx: ExtensionContext) {
   const abbrVals = await abbrs();

   let activeEditor = window.activeTextEditor;

   let decorate = () => {
      if (!activeEditor) return;

      const document = activeEditor.document;

      let rngs = [];

      let words = abbrVals.map(abbr => abbr.word);
      let regex = new RegExp(`\\b\w*${words.join('|')}\w*\\b`, 'gi');
      let matches = [...document.getText().matchAll(regex)];

      for (let match of matches) {
         let startPos = document.positionAt(match.index as number);
         let endPos = document.positionAt(match.index as number + match[0].length);

         rngs.push(new Range(startPos, endPos));
      }

      activeEditor.setDecorations(word, rngs);
   };

   // Init call
   decorate();

   // Update when curr active editor changes
   window.onDidChangeActiveTextEditor(editor => {
      activeEditor = editor;

      decorate();
   }, null, ctx.subscriptions);

   // Update when curr editor text changes
   workspace.onDidChangeTextDocument(event => {
      if (!activeEditor) return;

      if (activeEditor.document === event.document) decorate();
   }, null, ctx.subscriptions);
}

export function deactivate() { }