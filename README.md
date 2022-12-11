# Rei Language Server

An open source language server extension for VSCode.

RN I just copied rust syntax highlighter enhanced from [here](https://github.com/dustypomerleau/rust-syntax/blob/master/syntaxes/rust.tmLanguage.json).

## Features

- Syntax Highlighting (really only this rn)
- Printing vars and statements that have a definite result, would be introduced in `rein` too
- Automatic type inference and labelling when you dont specify a type

## Requirements

No dependencies right now.

IDK HOW TO HIGHLIGHT SOMETHING LIKE `export K: G` properly like how rust does `pub ...`.

## Extractions

I took out:

```json
{
    "comment": "export statements",
    "name": "meta.export.rei",
    "begin": "\\b(export)\\s",
    "end": ":",
    "captures": {
    }
},

// something to do with fns
lower_case: ()

{
                    "comment": "function definition",
                    "name": "meta.function.definition.rei",
                    "begin": "[A-Za-z0-9_]+: \\(",
                    "end": "\\{",

                    // IDK IF THESE ARE REQUIRED
                    "patterns": [
                        {
                            "include": "#block-comments"
                        },
                        {
                            "include": "#comments"
                        },
                        {
                            "include": "#keywords"
                        },
                        {
                            "include": "#lvariables"
                        },
                        {
                            "include": "#constants"
                        },
                        {
                            "include": "#gtypes"
                        },
                        {
                            "include": "#functions"
                        },
                        {
                            "include": "#namespaces"
                        },
                        {
                            "include": "#punctuation"
                        },
                        {
                            "include": "#strings"
                        },
                        {
                            "include": "#types"
                        },
                        {
                            "include": "#variables"
                        }
                    ]
                },

                {
                    "comment": "function definition",
                    "name": "meta.function.definition.rei",
                    "begin": "[a-z0-9_]+\\:[ \n\t]\\(",
                    "end": "(\\{|[ \n\t])"
                },
```
