module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "Enforce the use of double quotes for string literals.",
      category: "Stylistic Issues",
      recommended: true,
    },
    fixable: "code",
  },
  create: function (context) {
    return {
      Literal(node) {
        if (typeof node.value === "string" && node.raw[0] === "'") {
          context.report({
            node,
            message: "Use double quotes for string literals.",
            fix: function (fixer) {
              return fixer.replaceText(node, `"${node.value}"`);
            },
          });
        }
      },
    };
  },
};
