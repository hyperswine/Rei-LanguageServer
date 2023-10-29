## Requirements

No dependencies right now.

IDK HOW TO HIGHLIGHT SOMETHING LIKE `export K: G` properly like how rust does `pub ...`.

probably important ??

```json
{
  "comment": "function definition",
  "name": "meta.function.definition.rei",
  "begin": "\\b(fn)\\s+((?:r#(?!outer|[Ss]elf|pkg))?[A-Za-z0-9_]+)((\\()|(<))",
  "beginCaptures": {
    "1": {
      "name": "keyword.other.fn.rei"
    },
    "2": {
      "name": "entity.name.function.rei"
    },
    "4": {
      "name": "punctuation.brackets.round.rei"
    },
    "5": {
      "name": "punctuation.brackets.angle.rei"
    }
  },
  "end": "\\{",
  "endCaptures": {
    "0": {
      "name": "punctuation.brackets.curly.rei"
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

,
        {
          "comment": "function/method calls, chaining",
          "name": "meta.function.call.rei",
          "begin": "((?:r#(?!outer|[Ss]elf|pkg))?[A-Za-z0-9_]+)(\\()",
          "beginCaptures": {
            "1": {
              "name": "entity.name.function.rei"
            },
            "2": {
              "name": "punctuation.brackets.round.rei"
            }
          },
          "end": "\\)",
          "endCaptures": {
            "0": {
              "name": "punctuation.brackets.round.rei"
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
          "comment": "function/method calls with turbofish",
          "name": "meta.function.call.rei",
          "begin": "[A-Za-z0-9_]+(?=::<.*>\\()",
          "beginCaptures": {
            "1": {
              "name": "entity.name.function.rei"
            }
          },
          "end": "\\)",
          "endCaptures": {
            "0": {
              "name": "punctuation.brackets.round.rei"
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
        }


        {
          "comment": "parameterized types",
          "begin": "\\b([A-Z][A-Za-z0-9]*)(<)",
          "beginCaptures": {
            "1": {
              "name": "entity.name.type.rei"
            },
            "2": {
              "name": "punctuation.brackets.angle.rei"
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
              "include": "#keywords"
            },
            {
              "include": "#lvariables"
            },
            {
              "include": "#punctuation"
            },
            {
              "include": "#types"
            },
            {
              "include": "#variables"
            }
          ]
        },
```
