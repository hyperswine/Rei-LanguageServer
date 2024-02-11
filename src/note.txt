A language server for rei. If using rein, the functionality is builtin with the `rei` extension. I.e. RLSP is compiled as a dynamic lib and linked to rein at initialisation. Otherwise it can be built as a server to interface with IDE's that implement the LSP client protocol.
Rein links rei-lsp as a prei library dependency, and so `server` is not actually built. The `server` target serves as the entry point for the LSP's server implementation.
We assume that each major theme is its own file. This makes development easier for certain features like goto definition. However the backend only deals with abstract ideas called "Contexts". Like an incremental compiler it only knows about generic input strings and open files.

INTERESTING OBSERVATIONS

connection.onCompletion
is used to autocomplete
you can use labels
