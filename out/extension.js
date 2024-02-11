"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode_1 = require("vscode");
const hover_1 = require("./hover");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
let disposables = [];
function activate(context) {
    const codelensProvider = new hover_1.CodelensProvider();
    vscode_1.languages.registerCodeLensProvider("*", codelensProvider);
    vscode_1.commands.registerCommand("rei.enableCodeLens", () => {
        vscode_1.workspace.getConfiguration("rei").update("enableCodeLens", true, true);
    });
    vscode_1.commands.registerCommand("rei.disableCodeLens", () => {
        vscode_1.workspace.getConfiguration("rei").update("enableCodeLens", false, true);
    });
    vscode_1.commands.registerCommand("rei.codelensAction", (args) => {
        vscode_1.window.showInformationMessage(`CodeLens action clicked with args=${args}`);
    });
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
    if (disposables) {
        disposables.forEach(item => item.dispose());
    }
    disposables = [];
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map