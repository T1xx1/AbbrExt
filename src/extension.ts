import * as vscode from 'vscode';
import { window } from 'vscode';

import abbrs from './abbrs';
import debounce from './lib/debounce';

export async function activate(context: ExtensionContext) {
   const abbrVals = await abbrs();

   let activeEditor = window.activeTextEditor;


   // Init call
   decorate();

   // Update when curr active editor changes
   window.onDidChangeActiveTextEditor(editor => {
      activeEditor = editor;

      decorate();
   }, null, context.subscriptions);

   // Update when curr editor text changes
   workspace.onDidChangeTextDocument(event => {
      if (!activeEditor) return;

      if (activeEditor.document === event.document) debounce(decorate);
   }, null, context.subscriptions);
}

export function deactivate() { }