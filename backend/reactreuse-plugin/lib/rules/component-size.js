module.exports = {
  meta: {
    docs: {
      description: "Enforce a maximum size limit for React components.",
      category: "Best Practices",
      recommended: true,
    },
    fixable: null,
  },
  create: function (context) {
    return {
      Program(node) {
        const sourceCode = context.getSourceCode();
        const lines = sourceCode.lines;
        const componentSizeLimit = 100; // Adjust the limit as needed

        if (lines.length > componentSizeLimit) {
          context.report({
            node,
            message: `Component size exceeds the limit of ${componentSizeLimit} lines.`,
          });
        }
      },
    };
  },
};
