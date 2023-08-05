import { window } from 'vscode';

export const word = window.createTextEditorDecorationType({
   textDecoration: 'underline wavy #0000ff'
});

/* export const abbr = window.createTextEditorDecorationType({
   textDecoration: 'underline dotted #008000'
}); */