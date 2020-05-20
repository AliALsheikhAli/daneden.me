import React, { ReactElement } from "react"

export default function SyntaxHiglight(): ReactElement<unknown> {
  return (
    <style jsx global>
      {`
        /**
       * Modified version of the prism.js tomorrow night theme by Rose Pritchard
       * Based on https://github.com/chriskempson/tomorrow-theme
       * @author Rose Pritchard
       */

        code[class*="language-"],
        pre[class*="language-"] {
          color: var(--text-color, inherit);
          background: none;
          font-family: var(--font-mono), Consolas, Monaco, "Andale Mono",
            "Ubuntu Mono", monospace;
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;
          word-wrap: normal;
          line-height: 1.5;
          tab-size: 2;
          hyphens: none;
        }

        /* Code blocks */
        pre[class*="language-"] {
          padding: 1em;
          margin: 0.5em 0;
          overflow: auto;
          margin-bottom: 1.5rem;
        }

        :not(pre) > code[class*="language-"],
        pre[class*="language-"] {
          background: rgba(0, 0, 0, 0.05);
        }

        @media (prefers-color-scheme: dark) {
          :not(pre) > code[class*="language-"],
          pre[class*="language-"] {
            background: rgba(255, 255, 255, 0.05);
          }
        }

        /* Inline code */
        :not(pre) > code[class*="language-"] {
          padding: 0.1em;
          border-radius: 0.3em;
          white-space: normal;
        }

        .token.comment,
        .token.block-comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: #999;
        }

        .token.punctuation {
          color: #888;
        }

        .token.tag,
        .token.attr-name,
        .token.namespace,
        .token.deleted {
          color: #e2777a;
        }

        .token.function-name,
        .token.backreference {
          color: #6196cc;
        }

        .token.boolean,
        .token.number,
        .token.function,
        .token.charset {
          color: #ff7600;
        }

        .token.property,
        .token.class-name,
        .token.constant,
        .token.symbol,
        .token.group,
        .token.alternation {
          color: #f90;
        }

        .token.selector,
        .token.important,
        .token.atrule,
        .token.keyword,
        .token.builtin,
        .token.quantifier {
          color: #ac53ac;
        }

        .token.string,
        .token.char,
        .token.attr-value,
        .token.regex,
        .token.variable {
          color: #58a575;
        }

        .token.operator,
        .token.entity,
        .token.url {
          color: #67cdcc;
        }

        .token.important,
        .token.bold {
          font-weight: bold;
        }
        .token.italic {
          font-style: italic;
        }

        .token.entity {
          cursor: help;
        }

        .token.inserted {
          color: green;
        }
      `}
    </style>
  )
}
