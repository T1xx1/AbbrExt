import * as vscode from 'vscode';

import abbrs from './abbrs';
import debounce from './lib/debounce';

export async function activate(context: ExtensionContext) {
   const abbrVals = await abbrs();



}

export function deactivate() { }