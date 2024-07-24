module.exports = {
  meta: {
    docs: {
      description: "Enforce a consistent order for imports.",
      category: "Best Practices",
      recommended: true,
    },
    fixable: "code",
  },
  create: function (context) {
    return {
      Program(node) {
        const importNodes = node.body.filter(
          (item) => item.type === "ImportDeclaration"
        );
        const sortedImports = importNodes.sort((a, b) =>
          a.source.value.localeCompare(b.source.value)
        );

        if (JSON.stringify(importNodes) !== JSON.stringify(sortedImports)) {
          context.report({
            node,
            message: "Maintain a consistent order for imports.",
            fix: function (fixer) {
              const sourceCode = context.getSourceCode();
              const start = importNodes[0].range[0];
              const end = importNodes[importNodes.length - 1].range[1];
              const sortedText = sortedImports
                .map((importNode) => sourceCode.getText(importNode))
                .join("\n");
              return fixer.replaceTextRange([start, end], sortedText);
            },
          });
        }
      },
    };
  },
};
