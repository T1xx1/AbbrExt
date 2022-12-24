import * as vscode from 'vscode';
import { words } from './data/words.js';

let replacer = (text: string, obj: object) => {
   let change;

   do {
      change = false;

      for (let word in obj) {
         let match = new RegExp(`\\b${word}\\b`, 'g');

         if (text.match(match)) {
            change = true;
            text = text.replaceAll(match, obj[word]);

            break;
         }
      }
   } while (change);

   return text;
};

export function activate(context: vscode.ExtensionContext) {
   context.subscriptions.push(
      vscode.commands.registerCommand('abbrext.abbr', function () {
         const editor = vscode.window.activeTextEditor;

         if (editor) {
            replacer(editor.document.getText(), words);
         }
      })
   );
}

export function deactivate() {}
