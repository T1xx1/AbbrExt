import { ExtensionContext, Range, TextEditorDecorationType, window, workspace } from 'vscode';

import abbrs from './abbrs';
import { word as wordDecoration } from './decorations';

export async function activate(ctx: ExtensionContext) {
   const abbrVals = await abbrs();

   let activeEditor = window.activeTextEditor;

   let decorate = (decoration: TextEditorDecorationType, words: string[]) => {
      if (!activeEditor) return;

      const document = activeEditor.document;

      let rngs = [];

      let regex = new RegExp(`\\b\w*${words.join('|')}\w*\\b`, 'gi');
      let matches = [...document.getText().matchAll(regex)];

      for (let match of matches) {
         let startPos = document.positionAt(match.index as number);
         let endPos = document.positionAt(match.index as number + match[0].length);

         rngs.push(new Range(startPos, endPos));
      }

      activeEditor.setDecorations(decoration, rngs);
   };

   let style = () => {
      let words = abbrVals.map(obj => obj.word);

      decorate(wordDecoration, words);
   };

   // Init call
   style();

   // Update when curr active editor changes
   window.onDidChangeActiveTextEditor(editor => {
      activeEditor = editor;

      style();
   }, null, ctx.subscriptions);

   // Update when curr editor text changes
   workspace.onDidChangeTextDocument(event => {
      if (!activeEditor) return;

      if (activeEditor.document === event.document) style();
   }, null, ctx.subscriptions);
}

export function deactivate() { }