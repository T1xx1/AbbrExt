import { ExtensionContext, Range, TextEditorDecorationType, window, workspace } from 'vscode';

import { words } from './datasets';
import { word as wordDecoration } from './decorations';

export async function activate(ctx: ExtensionContext) {
   let activeEditor = window.activeTextEditor;

   let decorate = (decoration: TextEditorDecorationType, words: string[]) => {
      if (!activeEditor) return;

      const document = activeEditor.document;

      let rngs = [];

      for (let word of words) {
         let regex = new RegExp(`\\b${word}\\b|\\w${word[0].toUpperCase() + word.slice(1)}(\\b|[A-Z])`, 'g');
         let matches = [...document.getText().matchAll(regex)];

         for (let match of matches) {
            let startPos = document.positionAt(match.index as number);
            let endPos = document.positionAt(match.index as number + match[0].length);

            rngs.push(new Range(startPos, endPos));
         }
      }

      activeEditor.setDecorations(decoration, rngs);
   };

   let style = () => {
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