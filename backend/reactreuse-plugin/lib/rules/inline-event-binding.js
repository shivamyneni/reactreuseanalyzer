module.exports = {
  meta: {
    docs: {
      description:
        "Enforce the use of arrow functions for inline event handlers.",
      category: "Best Practices",
      recommended: true,
    },
    fixable: "code",
  },
  create: function (context) {
    return {
      JSXAttribute(node) {
        if (
          node.name.type === "JSXIdentifier" &&
          node.name.name.startsWith("on") &&
          node.value.type === "JSXExpressionContainer" &&
          node.value.expression.type === "FunctionExpression"
        ) {
          context.report({
            node,
            message: "Use arrow functions for inline event handlers.",
            fix: function (fixer) {
              const sourceCode = context.getSourceCode();
              const handlerCode = sourceCode.getText(node.value.expression);
              return fixer.replaceText(node.value, `{() => ${handlerCode}}`);
            },
          });
        }
      },
    };
  },
};
