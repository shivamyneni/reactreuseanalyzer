module.exports = {
  meta: {
    docs: {
      description:
        "Encourage the use of prop spreading for component configurability.",
      category: "Best Practices",
      recommended: true,
    },
    fixable: "code",
  },
  create: function (context) {
    return {
      JSXOpeningElement(node) {
        const hasSpreadAttribute = node.attributes.some(
          (attr) => attr.type === "JSXSpreadAttribute"
        );

        if (!hasSpreadAttribute) {
          context.report({
            node,
            message:
              "Consider using prop spreading for better configurability.",
            fix: function (fixer) {
              const openingTag = context.getSourceCode().getText(node);
              return fixer.replaceText(node, `${openingTag} {...props}`);
            },
          });
        }
      },
    };
  },
};
