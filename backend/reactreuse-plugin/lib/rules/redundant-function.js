module.exports = {
  meta: {
    docs: {
      description: "Detect redundant function declarations",
      category: "Best Practices",
      recommended: true,
    },
    fixable: "code",
  },
  create: function (context) {
    const functionDeclarations = new Map();

    return {
      FunctionDeclaration(node) {
        if (node.id && node.id.name) {
          const functionName = node.id.name;

          if (functionDeclarations.has(functionName)) {
            context.report({
              node,
              message: `Redundant function declaration: '${functionName}'`,
              fix: function (fixer) {
                // Here you can provide a fix, such as removing the redundant function declaration
                return fixer.remove(node);
              },
            });
          } else {
            functionDeclarations.set(functionName, true);
          }
        }
      },
    };
  },
};
