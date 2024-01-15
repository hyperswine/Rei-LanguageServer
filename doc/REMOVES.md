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
            {
          "comment": "trait declarations",
          "match": "\\b(trait)\\s+([A-Z][A-Za-z0-9]*)\\b",
          "captures": {
            "1": {
              "name": "keyword.declaration.trait.rei storage.type.rei"
            },
            "2": {
              "name": "entity.name.type.trait.rei"
            }
          }
        },

        // THE NUMERIC STUFF ...
        // could be USEFUL FOR META.SYS, but more of a semantic thing probably
        {
          "comment": "numeric types",
          "match": "(?<![A-Za-z])(f16|f32|f64|i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)\\b",
          "captures": {
            "1": {
              "name": "entity.name.type.numeric.system.rei"
            }
          }
        },

            "lvariables": {
      "patterns": [
        {
          "comment": "self",
          "name": "variable.language.self.rei",
          "match": "\\b[Ss]elf\\b"
        },
        {
          "comment": "super",
          "name": "variable.language.super.rei",
          "match": "\\bsuper\\b"
        },
        {
          "comment": "pkg",
          "name": "variable.language.pkg.rei",
          "match": "\\bpkg\\b"
        }
      ]
    },

            {
          "comment": "math operators",
          "name": "keyword.operator.math.rei",
          "match": "(([+%]|(\\*(?!\\w)))(?!=))|(-(?!>))|(/(?!/))"
        },
        {
          "comment": "less than, greater than (special case)",
          "match": "(?:\\b|(?:(\\))|(\\])|(\\})))[ \\t]+([<>])[ \\t]+(?:\\b|(?:(\\()|(\\[)|(\\{)))",
          "captures": {
            "1": {
              "name": "punctuation.brackets.round.rei"
            },
            "2": {
              "name": "punctuation.brackets.square.rei"
            },
            "3": {
              "name": "punctuation.brackets.curly.rei"
            },
            "4": {
              "name": "keyword.operator.comparison.rei"
            },
            "5": {
              "name": "punctuation.brackets.round.rei"
            },
            "6": {
              "name": "punctuation.brackets.square.rei"
            },
            "7": {
              "name": "punctuation.brackets.curly.rei"
            }
          }
        },
        {
          "comment": "logical operators",
          "name": "keyword.operator.logical.rei",
          "match": "(\\^|\\||\\|\\||&&|<<|>>|!)(?!=)"
        },
        {
          "comment": "logical AND, borrow references",
          "name": "keyword.operator.borrow.and.rei",
          "match": "&(?![&=])"
        },
        {
          "comment": "assignment operators",
          "name": "keyword.operator.assignment.rei",
          "match": "(\\+=|-=|\\*=|/=|%=|\\^=|&=|\\|=|<<=|>>=)"
        },
        {
          "comment": "single equal",
          "name": "keyword.operator.assignment.equal.rei",
          "match": "(?<![<>])=(?!=|>)"
        },
        {
          "comment": "comparison operators",
          "name": "keyword.operator.comparison.rei",
          "match": "(=(=)?(?!>)|!=|<=|(?<!=)>=)"
        },

        // SEMANTIC HIGHLIGHTING, if defined specifically, kinda

          {
          "comment": "control flow keywords",
          "name": "keyword.control.rei",
          "match": "\\b(await|break|continue|do|else|for|if|loop|match|return|while|yield|resume)\\b"
        },
        {
          "comment": "const keyword",
          "name": "storage.modifier.rei",
          "match": "\\b(const|extern|let|mut|mod)\\b"
        },
        {
          "comment": "type keyword",
          "name": "keyword.declaration.type.rei storage.type.rei",
          "match": "\\b(type)\\b"
        },
        {
          "comment": "enum keyword",
          "name": "keyword.declaration.enum.rei storage.type.rei",
          "match": "\\b(enum)\\b"
        },
        {
          "comment": "union keyword",
          "name": "keyword.declaration.union.rei storage.type.rei",
          "match": "\\b(union)\\b"
        },
        {
          "comment": "trait keyword",
          "name": "keyword.declaration.trait.rei storage.type.rei",
          "match": "\\b(trait)\\b"
        },
        {
          "comment": "data keyword",
          "name": "keyword.declaration.data.rei storage.type.rei",
          "match": "\\b(data)\\b"
        },
        {
          "comment": "system keyword",
          "name": "keyword.declaration.system.rei storage.type.rei",
          "match": "\\b(system)\\b"
        },
        {
          "comment": "class keyword",
          "name": "keyword.declaration.class.rei storage.type.rei",
          "match": "\\b(class)\\b"
        },
        {
          "comment": "other keywords",
          "name": "keyword.other.rei",
          "match": "\\b(annotation|macro|replace|as|async|new|autoimpl|impl|transact|default|complex|extend|with|effect|handle|in|pub|internal|require|ref|unsafe|use|where|or|and|is|static)\\b"
        },
        {
          "comment": "Function Keyword Capital...",
          "name": "keyword.other.fn.rei",
          "match": "\\bFn\\b"
        },

  // TOO COMPLEX FOR SYNTAX HIHGLIGHTING PROBABLY

  ,
    "interpolations": {
      "comment": "curly brace interpolations",
      "name": "meta.interpolation.rei",
      "match": "({)[^\"{}]*(})",
      "captures": {
        "1": {
          "name": "punctuation.definition.interpolation.rei"
        },
        "2": {
          "name": "punctuation.definition.interpolation.rei"
        }
      }
    },

  {
          "comment": "primitive types",
          "name": "entity.name.type.primitive.rei",
          "match": "\\b(bool|char|str)\\b"
        },

  // so apparently you can, if you do, in your string
  ,
            {
              "include": "#interpolations"
            }

    "patterns": [
            {
              "match": "^\\s+(\\w+):\\s+(\\w+)",
              "name": "meta.field.declaration.custom",
              "captures": {
                "1": {
                  "name": "variable.other.field.custom"
                },
                "2": {
                  "name": "entity.name.type.custom"
                }
              }
            },
            {
              "match": "^\\s+(\\w+)",
              "name": "constant.other.enum.custom"
            }
          ]

                  {
          "comment": "octal integers",
          "name": "constant.numeric.oct.phantasm",
          "match": "\\b0o[0-7_]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b",
          "captures": {
            "1": {
              "name": "entity.name.type.numeric.phantasm"
            }
          }
        },
                {
          "comment": "octal integers",
          "name": "constant.numeric.oct.rei",
          "match": "\\b0o[0-7_]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b",
          "captures": {
            "1": {
              "name": "entity.name.type.numeric.rei"
            }
          }
        },
```
