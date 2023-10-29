REMOVES:

 (non-type, non-function path segment) ?

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

SHOULD ALL BE EXRPESSIONS
{
            "include": "#specialVariables"
        },
        {
            "include": "#constants"
        },
        {
            "include": "#specialTypes"
        },
        {
            "include": "#functions"
        },
        {
            "include": "#types"
        },
        {
            "include": "#keywords"
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
            "include": "#variables"
        },
        {
            "comment": "annotations",
            "name": "meta.attribute.rei",
            "match": "\\b@[a-z][a-z0-9]*"
        },
        {
            "comment": "modules",
            "match": "\\b(mod)\\s+((?:(outer|[Ss]elf|pkg))?[a-z][A-Za-z0-9_]*)",
            "captures": {
                "1": {
                    "name": "storage.type.rei"
                },
                "2": {
                    "name": "entity.name.module.rei"
                }
            }
        }

I REMOVED ESCAPES
"escapes": {
    "comment": "escapes: ASCII, byte, Unicode, quote, regex",
    "name": "constant.character.escape.rei",
    "match": "(\\\\)(?:(?:(x[0-7][0-7a-fA-F])|(u(\\{)[\\da-fA-F]{4,6}(\\}))|.))",
    "captures": {
        "1": {
            "name": "constant.character.escape.backslash.rei"
        },
        "2": {
            "name": "constant.character.escape.bit.rei"
        },
        "3": {
            "name": "constant.character.escape.unicode.rei"
        },
        "4": {
            "name": "constant.character.escape.unicode.punctuation.rei"
        },
        "5": {
            "name": "constant.character.escape.unicode.punctuation.rei"
        }
    }
},

REMOVED

{
          "comment": "parameterised expression definitions",
          "name": "meta.function.definition.rei",
          "begin": "_?[a-z][a-z0-9_]*(:)\\s+(\\()",
          "beginCaptures": {
            "1": {
              "name": "entity.name.function.rei"
            },
            "2": {
              "name": "punctuation.brackets.round.rei"
            },
            "3": {
              "name": "punctuation.brackets.generic.rei"
            }
          },
          "end": "\\)",
          "endCaptures": {
            "1": {
              "name": "punctuation.brackets.round.rei"
            },
            "2": {
              "name": "punctuation.brackets.generic.rei"
            }
          }
        }
Should be a new expression for variable or sequential defs
let x = something
x should be blue

X: ()
X should be green
Xs: ()
Xs should be green

XS: ()
XS should be white

xs: ()
xs should be yellow

For phantasm, all blocks should be dark blue to green I think...
x: should be green

{
          "comment": "namespace operator",
          "name": "keyword.operator.namespace.rei",
          "match": "::"
        },
        {
          "comment": "dereference asterisk",
          "match": "(\\*)(?=\\w+)",
          "captures": {
            "1": {
              "name": "keyword.operator.dereference.rei"
            }
          }
        },
        {
          "comment": "subpattern binding",
          "name": "keyword.operator.subpattern.rei",
          "match": "@"
        },


// namespaces are weird
 "namespaces": {
      "patterns": [
        {
          "comment": "namespace",
          "match": "(?<![A-Za-z0-9_])([a-z0-9_]+)((?<!outer|pkg|self).)",
          "captures": {
            "1": {
              "name": "entity.name.namespace.rei"
            },
            "2": {
              "name": "keyword.operator.namespace.rei"
            }
          }
        }
      ]
    },

HUH? for vars, the first part \\b(?<!(?<!\\.)\\.)(?:r#(?!(outer|[Ss]elf|pkg)))?

no need for this!

{
      "comment": "modules",
      "match": "(mod)\\s+((?:r#(?!outer|[Ss]elf|pkg))?[a-z][A-Za-z0-9_]*)",
      "captures": {
        "1": {
          "name": "storage.type.rei"
        },
        "2": {
          "name": "entity.name.module.rei"
        }
      }
    },

{
      "comment": "external import",
      "name": "meta.import.rei",
      "begin": "\\b(extern)",
      "beginCaptures": {
        "1": {
          "name": "storage.type.rei"
        },
        "2": {
          "name": "keyword.other.pkg.rei"
        }
      },
      "end": "[ \t\n]",
      "endCaptures": {
        "0": {
          "name": "punctuation.semi.rei"
        }
      },
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
          "include": "#punctuation"
        }
      ]
    },

    {
      "comment": "export statements",
      "name": "meta.export.rei",
      "begin": "\\b(export)\\s",
      "beginCaptures": {
        "1": {
          "name": "keyword.other.rei"
        }
      },
      "end": "[ \t\n]",
      "endCaptures": {
        "0": {
          "name": "punctuation.semi.rei"
        }
      },
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
          "include": "#punctuation"
        },
        {
          "include": "#types"
        },
        {
          "include": "#lvariables"
        }
      ]
    },

ANNOTATIONS
(@)(\\!?)(\\()

"beginCaptures": {
        "1": {
          "name": "punctuation.definition.attribute.rei"
        },
        "2": {
          "name": "keyword.operator.attribute.inner.rei"
        },
        "3": {
          "name": "punctuation.brackets.attribute.rei"
        }
      },
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.brackets.attribute.rei"
        }
      },

{
      "comment": "boxed slice literal",
      "begin": "(<)(\\[)",
      "beginCaptures": {
        "1": {
          "name": "punctuation.brackets.angle.rei"
        },
        "2": {
          "name": "punctuation.brackets.square.rei"
        }
      },
      "end": ">",
      "endCaptures": {
        "0": {
          "name": "punctuation.brackets.angle.rei"
        }
      },
      "patterns": [
        {
          "include": "#block-comments"
        },
        {
          "include": "#comments"
        },
        {
          "include": "#gtypes"
        },
        {
          "include": "#lvariables"
        },
        {
          "include": "#punctuation"
        },
        {
          "include": "#types"
        }
      ]
    },

    what??

((?:r#(?!outer|[Ss]elf|pkg))?
    {
          "comment": "ALL CAPS constants",
          "name": "constant.other.caps.rei",
          "match": "\\b[A-Z]{2}[A-Z0-9_]*\\b"
        },
        {
          "comment": "constant declarations",
          "match": "\\b(const)\\s+([A-Z][A-Za-z0-9_]*)\\b",
          "captures": {
            "1": {
              "name": "storage.type.rei"
            },
            "2": {
              "name": "constant.other.caps.rei"
            }
          }
        },

{
          "comment": "data declarations",
          "match": "\\b(data)\\s+([A-Z][A-Za-z0-9]*)\\b",
          "captures": {
            "1": {
              "name": "keyword.declaration.data.rei storage.type.rei"
            },
            "2": {
              "name": "entity.name.type.data.rei"
            }
          }
        },
        {
          "comment": "system declarations",
          "match": "\\b(system)\\s+([A-Z][A-Za-z0-9]*)\\b",
          "captures": {
            "1": {
              "name": "keyword.declaration.system.rei storage.type.rei"
            },
            "2": {
              "name": "entity.name.type.system.rei"
            }
          }
        },
        {
          "comment": "enum declarations",
          "match": "\\b(enum)\\s+([A-Z][A-Za-z0-9_]*)\\b",
          "captures": {
            "1": {
              "name": "keyword.declaration.enum.rei storage.type.rei"
            },
            "2": {
              "name": "entity.name.type.enum.rei"
            }
          }
        },
        {
          "comment": "union declarations",
          "match": "\\b(union)\\s+([A-Z][A-Za-z0-9_]*)\\b",
          "captures": {
            "1": {
              "name": "keyword.declaration.union.rei storage.type.rei"
            },
            "2": {
              "name": "entity.name.type.union.rei"
            }
          }
        },
        {
          "comment": "type declarations",
          "match": "\\b(type)\\s+([A-Z][A-Za-z0-9_]*)\\b",
          "captures": {
            "1": {
              "name": "keyword.declaration.type.rei storage.type.rei"
            },
            "2": {
              "name": "entity.name.type.declaration.rei"
            }
          }
        },
```
