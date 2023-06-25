import { ExtensionContext, window, workspace } from 'vscode';

import decorate from './decorate';

export async function activate(ctx: ExtensionContext) {
   let activeEditor = window.activeTextEditor;

   if (!activeEditor) return;

   // Init decorations
   decorate();

   // Update when active editor changes
   window.onDidChangeActiveTextEditor(editor => {
      activeEditor = editor;

      decorate();
   }, null, ctx.subscriptions);

   // Update when editor text changes
   workspace.onDidChangeTextDocument(() => decorate(), null, ctx.subscriptions);
}

export function deactivate() { }