import { window } from 'vscode';

export const word = window.createTextEditorDecorationType({
   textDecoration: 'underline wavy #00f'
});

export const abbr = window.createTextEditorDecorationType({
   textDecoration: 'underline dotted #0f0 3px'
});

export const notRecommended = window.createTextEditorDecorationType({
   textDecoration: 'underline dotted #f00 3px'
});