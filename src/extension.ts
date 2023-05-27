import * as vscode from 'vscode';

import fetch from './lib/fetch';

const origin = 'https://raw.githubusercontent.com/abbrcode/db/main/abbrs/.json';

export async function activate(context: vscode.ExtensionContext) {
   let data;

   data = await fetch(origin);

   console.log(data);
}

export function deactivate() { }
