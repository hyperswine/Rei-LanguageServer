import { ExtensionContext, languages, commands, Disposable, workspace, window } from 'vscode'
import { CodelensProvider } from './hover'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

let disposables: Disposable[] = []

export function activate(context: ExtensionContext) {
  const codelensProvider = new CodelensProvider()

  languages.registerCodeLensProvider("*", codelensProvider)

  commands.registerCommand("rei.enableCodeLens", () => {
    workspace.getConfiguration("rei").update("enableCodeLens", true, true)
  })

  commands.registerCommand("rei.disableCodeLens", () => {
    workspace.getConfiguration("rei").update("enableCodeLens", false, true)
  })

  commands.registerCommand("rei.codelensAction", (args: any) => {
    window.showInformationMessage(`CodeLens action clicked with args=${args}`)
  })
}

// this method is called when your extension is deactivated
export function deactivate() {
  if (disposables) {
    disposables.forEach(item => item.dispose())
  }
  disposables = []
}
