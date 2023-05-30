import * as vscode from 'vscode';

import abbrs from './abbrs';

export async function activate(context: ExtensionContext) {
   const abbrVals = await abbrs();



}

export function deactivate() { }